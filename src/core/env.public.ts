import { z } from "zod";

// Variables públicas (NEXT_PUBLIC_*): las usan el servidor, el proxy y el navegador.
// Este módulo NO lleva `server-only` porque también entra en el bundle del cliente.

/** Trata la cadena vacía (`CLAVE=` en .env) como «no definida». */
export const optional = <T extends z.ZodType>(schema: T) =>
  z.preprocess((value) => (value === "" ? undefined : value), schema.optional());

export const publicEnvSchema = z.object({
  NEXT_PUBLIC_SUPABASE_URL: z.url(),
  NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY: z.string().min(1),
  NEXT_PUBLIC_SITE_URL: optional(z.url()),
});

export type PublicEnv = z.infer<typeof publicEnvSchema>;

/** Valida `source` con `schema` y lanza un error legible con las claves que fallan. */
export function parseEnv<T extends z.ZodType>(
  schema: T,
  source: Record<string, string | undefined>,
  label: string
): z.infer<T> {
  const result = schema.safeParse(source);
  if (!result.success) {
    throw new Error(`Variables de entorno ${label} no válidas:\n${z.prettifyError(result.error)}`);
  }
  return result.data;
}

let cached: PublicEnv | undefined;

/** Variables públicas validadas. Se leen en el primer uso, no al importar el módulo. */
export function getPublicEnv(): PublicEnv {
  cached ??= parseEnv(
    publicEnvSchema,
    {
      // Referencias literales: Next.js solo sustituye `process.env.NEXT_PUBLIC_X` escrito así en el cliente.
      NEXT_PUBLIC_SUPABASE_URL: process.env.NEXT_PUBLIC_SUPABASE_URL,
      NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY: process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY,
      NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL,
    },
    "públicas"
  );
  return cached;
}
