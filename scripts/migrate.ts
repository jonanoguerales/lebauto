/**
 * Applies pending SQL migrations from supabase/migrations/ to DATABASE_URL.
 * Usage: npm run db:migrate
 */
import { readdir, readFile } from "node:fs/promises";
import path from "node:path";
import { config as loadEnv } from "dotenv";
import postgres from "postgres";
import { selectPendingMigrations } from "./migrations";

const MIGRATIONS_DIR = path.join(process.cwd(), "supabase", "migrations");

async function main(): Promise<void> {
  loadEnv({ path: ".env.local", quiet: true });

  const databaseUrl = process.env.DATABASE_URL?.trim();
  if (!databaseUrl) {
    throw new Error(
      "Falta DATABASE_URL en .env.local. Cópiala de Supabase → Connect → Transaction pooler (puerto 6543).",
    );
  }

  const files = await readdir(MIGRATIONS_DIR);

  // The Supabase pooler hangs on pipelined queries: one connection, no prepared statements, no pipelining.
  const sql = postgres(databaseUrl, {
    prepare: false,
    max: 1,
    max_pipeline: 1,
    onnotice: () => {},
  });

  try {
    await sql`
      create table if not exists public.schema_migrations (
        name text primary key,
        applied_at timestamptz not null default now()
      )
    `;

    const appliedRows = await sql<{ name: string }[]>`select name from public.schema_migrations`;
    const pending = selectPendingMigrations(
      files,
      appliedRows.map((row) => row.name),
    );

    if (pending.length === 0) {
      console.info("La base de datos ya está al día: no hay migraciones pendientes.");
      return;
    }

    for (const name of pending) {
      const content = await readFile(path.join(MIGRATIONS_DIR, name), "utf8");
      process.stdout.write(`Aplicando ${name}… `);
      await sql.begin(async (tx) => {
        await tx.unsafe(content);
        await tx`insert into public.schema_migrations (name) values (${name})`;
      });
      console.info("hecho.");
    }

    console.info(`Migraciones aplicadas: ${pending.length}.`);
  } finally {
    await sql.end({ timeout: 5 });
  }
}

main().catch((error: unknown) => {
  const message = error instanceof Error ? error.message : String(error);
  console.error(`\nError al aplicar las migraciones: ${message}`);
  process.exitCode = 1;
});
