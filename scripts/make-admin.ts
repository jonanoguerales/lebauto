/**
 * Da de alta como administrador a un usuario que ya existe en Supabase Auth (spec 002, AC-9).
 * Uso: pnpm db:make-admin persona@dominio.es
 */
import { config as loadEnv } from "dotenv";
import { connectDb } from "./db";
import { parseEmailArg } from "./admin-lib";

async function main(): Promise<void> {
  loadEnv({ path: ".env.local", quiet: true });
  const email = parseEmailArg(process.argv.slice(2));

  const databaseUrl = process.env.DATABASE_URL?.trim();
  if (!databaseUrl) {
    throw new Error("Falta DATABASE_URL en .env.local (Supabase → Connect → Transaction pooler).");
  }

  const sql = connectDb(databaseUrl);
  try {
    const users = await sql<{ id: string }[]>`
      select id from auth.users where lower(email) = ${email} limit 1
    `;
    if (users.length === 0) {
      throw new Error(
        "No hay ningún usuario con ese email en Supabase Auth. Créalo primero en el panel de Supabase " +
          "(Authentication → Users → Add user) y vuelve a ejecutar este comando.",
      );
    }
    const inserted = await sql`
      insert into public.admins (user_id) values (${users[0].id})
      on conflict (user_id) do nothing
      returning user_id
    `;
    console.info(
      inserted.length > 0
        ? "Hecho: el usuario ya es administrador."
        : "El usuario ya era administrador: no hay nada que cambiar.",
    );
  } finally {
    await sql.end({ timeout: 5 });
  }
}

main().catch((error: unknown) => {
  const message = error instanceof Error ? error.message : String(error);
  console.error(`\nError al dar de alta al administrador: ${message}`);
  process.exitCode = 1;
});
