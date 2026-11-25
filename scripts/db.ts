import postgres from "postgres";

/**
 * Conexión de los scripts a Postgres (DATABASE_URL, pooler de Supabase en modo transaction).
 * El pooler deja colgadas las consultas encadenadas: una conexión, sin prepared statements y sin
 * pipelining. `max_pipeline` existe en postgres.js pero no en sus tipos; al pasar las opciones en una
 * variable TypeScript no lo marca como propiedad desconocida.
 */
export function connectDb(databaseUrl: string): postgres.Sql {
  const options = { prepare: false, max: 1, max_pipeline: 1, onnotice: () => {} };
  return postgres(databaseUrl, options);
}
