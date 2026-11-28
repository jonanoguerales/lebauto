import "server-only";
import { z } from "zod";
import { optional, parseEnv, publicEnvSchema } from "./env.public";

// Variables del servidor. Las de IA y correo son opcionales en el esquema: su ausencia no rompe el build
// ni las páginas que no las usan; la función que las necesita pide la suya con `requireServerEnv`.
// DATABASE_URL y SUPABASE_SECRET_KEY no están aquí: solo las usan los scripts de `scripts/`.
export const serverEnvSchema = publicEnvSchema.extend({
  HUGGINGFACE_API_KEY: optional(z.string()),
  OPENROUTER_API_KEY: optional(z.string()),
  CORREO_HOST: optional(z.string()),
  CORREO_PORT: optional(z.coerce.number().int().positive()),
  CORREO_USUARIO: optional(z.string()),
  CORREO_PASS: optional(z.string()),
});

export type ServerEnv = z.infer<typeof serverEnvSchema>;
type OptionalServerKey = {
  [K in keyof ServerEnv]-?: undefined extends ServerEnv[K] ? K : never;
}[keyof ServerEnv];

export function parseServerEnv(source: Record<string, string | undefined>): ServerEnv {
  return parseEnv(serverEnvSchema, source, "del servidor");
}

let cached: ServerEnv | undefined;

/** Variables del servidor validadas. Se leen en el primer uso, no al importar el módulo. */
export function getServerEnv(): ServerEnv {
  cached ??= parseServerEnv(process.env);
  return cached;
}

/** Devuelve una variable opcional que la función llamante necesita, o lanza un error claro si falta. */
export function requireServerEnv<K extends OptionalServerKey>(
  key: K,
  env: ServerEnv = getServerEnv()
): NonNullable<ServerEnv[K]> {
  const value = env[key];
  if (value === undefined) {
    throw new Error(`Falta la variable de entorno ${key}: añádela a .env.local (ver .env.example).`);
  }
  return value as NonNullable<ServerEnv[K]>;
}
