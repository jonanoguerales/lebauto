/**
 * Comprueba la RLS de Lebauto (spec 002, AC-4/AC-5) como anon, como usuario normal y como admin.
 * Todo ocurre en una transacción que se deshace al final: los usuarios de prueba (@example.test) y las
 * filas de prueba no quedan en la base de datos. Sale con código 1 si alguna comprobación falla.
 * Uso: pnpm db:check-rls
 */
import { randomUUID } from "node:crypto";
import { config as loadEnv } from "dotenv";
import type postgres from "postgres";
import { connectDb } from "./db";
import {
  buildJwtClaims,
  buildVectorLiteral,
  describeOutcome,
  expectCheck,
  isAllowed,
  isBlocked,
  summarizeChecks,
  type CheckResult,
  type DbRole,
  type QueryOutcome,
} from "./rls-check";

type Tx = postgres.TransactionSql;
type Query = (sp: Tx) => Promise<postgres.RowList<postgres.Row[]>>;

const PUBLIC_TABLES = ["cars", "car_images", "features", "car_features", "chargers"] as const;

class Rollback extends Error {}

/** Ejecuta la consulta en un savepoint para que un error (permiso o RLS) no aborte la transacción. */
async function attempt(tx: Tx, query: Query): Promise<QueryOutcome> {
  try {
    const rows = await tx.savepoint((sp) => query(sp as unknown as Tx));
    return { ok: true, rows: rows.count ?? rows.length };
  } catch (error) {
    return { ok: false, error: error instanceof Error ? error.message : String(error) };
  }
}

/**
 * Cambia al rol y a los claims del JWT como lo hacen PostgREST y la Storage API. La Storage API además
 * activa `storage.allow_delete_query` (el trigger protect_delete bloquea los DELETE directos): así el
 * borrado en el bucket lo decide la RLS y no ese trigger.
 */
async function actAs(tx: Tx, role: DbRole, userId?: string): Promise<void> {
  await tx`
    select
      set_config('role', ${role}, true),
      set_config('request.jwt.claims', ${buildJwtClaims(role, userId)}, true),
      set_config('storage.allow_delete_query', 'true', true)
  `;
}

async function insertFixtures(tx: Tx, ids: Record<string, string>, vector: string): Promise<void> {
  await tx`
    insert into auth.users (id, instance_id, aud, role, email)
    values
      (${ids.user}, '00000000-0000-0000-0000-000000000000', 'authenticated', 'authenticated', ${`rls-user-${ids.user}@example.test`}),
      (${ids.admin}, '00000000-0000-0000-0000-000000000000', 'authenticated', 'authenticated', ${`rls-admin-${ids.admin}@example.test`})
  `;
  await tx`insert into public.admins (user_id) values (${ids.admin})`;
  await tx`
    insert into public.cars (id, brand, model, condition, price, year, mileage, fuel, color, doors, seats, slug)
    values (${ids.car}, 'RLS', 'Prueba', 'Seminuevo', 1000, 2020, 1000, 'Eléctrico', 'Blanco', 5, 5, ${`rls-${ids.car}`})
  `;
  await tx`insert into public.features (id, name) values (${ids.feature}, ${`RLS ${ids.feature}`})`;
  await tx`insert into public.car_features (car_id, feature_id) values (${ids.car}, ${ids.feature})`;
  await tx`insert into public.car_images (car_id, image_url) values (${ids.car}, '/coches/bmw-i4.jpg')`;
  await tx`
    insert into public.chargers (id, name, power_kw, connector_type, price_eur, category)
    values (${ids.charger}, 'Cargador RLS', 7.4, 'Tipo 2', 500, 'home')
  `;
  await tx`
    insert into public.documentos (car_id, content, embedding)
    values (${ids.car}, 'Documento de prueba RLS', ${vector}::extensions.vector)
  `;
  await tx`insert into storage.objects (bucket_id, name) values ('car-images', ${`rls/${ids.car}/fixture.webp`})`;
}

async function runChecks(tx: Tx): Promise<CheckResult[]> {
  const ids = {
    user: randomUUID(),
    admin: randomUUID(),
    car: randomUUID(),
    feature: randomUUID(),
    charger: randomUUID(),
  };
  const vector = buildVectorLiteral(384);
  const results: CheckResult[] = [];
  const check = (name: string, passed: boolean, outcome?: QueryOutcome) =>
    results.push({ name, passed, detail: passed ? "ok" : describeOutcome(outcome) });

  // Estructura: RLS en todas las tablas de public y bucket público.
  const noRls = await tx<{ relname: string }[]>`
    select relname from pg_class
    where relnamespace = 'public'::regnamespace and relkind in ('r', 'p') and not relrowsecurity
  `;
  results.push(expectCheck("RLS activado en todas las tablas de public", noRls.map((r) => r.relname).join(", "), ""));
  const [bucket] = await tx<{ public: boolean }[]>`select public from storage.buckets where id = 'car-images'`;
  results.push(expectCheck("El bucket car-images existe y es público", bucket?.public ?? false, true));

  await insertFixtures(tx, ids, vector);
  const storagePath = `rls/${ids.car}/nueva.webp`;
  const fixturePath = `rls/${ids.car}/fixture.webp`;

  for (const actor of ["anon", "usuario"] as const) {
    await actAs(tx, actor === "anon" ? "anon" : "authenticated", actor === "anon" ? undefined : ids.user);
    for (const table of PUBLIC_TABLES) {
      const read = await attempt(tx, (sp) => sp`select 1 from ${sp(`public.${table}`)} limit 1`);
      check(`${actor} lee ${table}`, isAllowed(read), read);
    }
    const docs = await attempt(tx, (sp) => sp`select id from public.documentos`);
    check(`${actor} no lee documentos directamente`, isBlocked(docs), docs);
    const admins = await attempt(tx, (sp) => sp`select user_id from public.admins`);
    check(`${actor} no lee admins`, isBlocked(admins), admins);
    const match = await attempt(tx, (sp) => sp`select * from public.match_documentos(${vector}::extensions.vector, -1, 3)`);
    check(`${actor} usa match_documentos`, isAllowed(match), match);
    const [{ is_admin }] = await tx<{ is_admin: boolean }[]>`select public.is_admin() as is_admin`;
    check(`${actor} no es admin`, is_admin === false);

    const writes: [string, Query][] = [
      ["inserta en cars", (sp) => sp`insert into public.cars (brand, model, condition, price, year, mileage, fuel, color, doors, seats) values ('X', 'Y', 'Seminuevo', 1, 2020, 0, 'Gasolina', 'Negro', 5, 5) returning id`],
      ["actualiza cars", (sp) => sp`update public.cars set price = 1 where id = ${ids.car} returning id`],
      ["borra cars", (sp) => sp`delete from public.cars where id = ${ids.car} returning id`],
      ["inserta en features", (sp) => sp`insert into public.features (name) values (${`RLS hack ${actor}`}) returning id`],
      ["borra car_images", (sp) => sp`delete from public.car_images where car_id = ${ids.car} returning id`],
      ["borra car_features", (sp) => sp`delete from public.car_features where car_id = ${ids.car} returning car_id`],
      ["actualiza chargers", (sp) => sp`update public.chargers set price_eur = 1 where id = ${ids.charger} returning id`],
      ["inserta en documentos", (sp) => sp`insert into public.documentos (car_id, content, embedding) values (${ids.car}, 'x', ${vector}::extensions.vector) returning id`],
      ["se hace admin", (sp) => sp`insert into public.admins (user_id) values (${ids.user}) returning user_id`],
      ["sube al bucket", (sp) => sp`insert into storage.objects (bucket_id, name) values ('car-images', ${storagePath}) returning id`],
      ["actualiza en el bucket", (sp) => sp`update storage.objects set metadata = '{}' where bucket_id = 'car-images' and name = ${fixturePath} returning id`],
      ["borra del bucket", (sp) => sp`delete from storage.objects where bucket_id = 'car-images' and name = ${fixturePath} returning id`],
    ];
    for (const [label, query] of writes) {
      const outcome = await attempt(tx, query);
      check(`${actor} no ${label}`, isBlocked(outcome), outcome);
    }
    await tx`reset role`;
  }

  // Administrador: puede escribir en todo lo del catálogo, en documentos y en el bucket.
  await actAs(tx, "authenticated", ids.admin);
  const [{ is_admin }] = await tx<{ is_admin: boolean }[]>`select public.is_admin() as is_admin`;
  check("admin es admin", is_admin === true);
  const adminOps: [string, Query][] = [
    ["inserta en cars", (sp) => sp`insert into public.cars (brand, model, condition, price, year, mileage, fuel, color, doors, seats) values ('X', 'Y', 'Seminuevo', 1, 2020, 0, 'Gasolina', 'Negro', 5, 5) returning id`],
    ["actualiza cars", (sp) => sp`update public.cars set price = 2000 where id = ${ids.car} returning id`],
    ["inserta en features", (sp) => sp`insert into public.features (name) values (${`RLS admin ${ids.admin}`}) returning id`],
    ["inserta en car_images", (sp) => sp`insert into public.car_images (car_id, image_url) values (${ids.car}, '/coches/porsche-911.jpg') returning id`],
    ["actualiza chargers", (sp) => sp`update public.chargers set price_eur = 600 where id = ${ids.charger} returning id`],
    ["lee documentos", (sp) => sp`select id from public.documentos where car_id = ${ids.car}`],
    ["hace upsert en documentos", (sp) => sp`insert into public.documentos (car_id, content, embedding) values (${ids.car}, 'nuevo', ${vector}::extensions.vector) on conflict (car_id) do update set content = excluded.content returning id`],
    ["sube al bucket", (sp) => sp`insert into storage.objects (bucket_id, name) values ('car-images', ${storagePath}) returning id`],
    ["actualiza en el bucket", (sp) => sp`update storage.objects set metadata = '{}' where bucket_id = 'car-images' and name = ${fixturePath} returning id`],
    ["borra del bucket", (sp) => sp`delete from storage.objects where bucket_id = 'car-images' and name = ${fixturePath} returning id`],
    ["borra cars", (sp) => sp`delete from public.cars where id = ${ids.car} returning id`],
  ];
  for (const [label, query] of adminOps) {
    const outcome = await attempt(tx, query);
    check(`admin ${label}`, isAllowed(outcome), outcome);
  }
  await tx`reset role`;

  // AC-3: al borrar el coche se borran en cascada sus fotos, características y documento.
  const [orphans] = await tx<{ n: number }[]>`
    select (select count(*) from public.car_images where car_id = ${ids.car})
         + (select count(*) from public.car_features where car_id = ${ids.car})
         + (select count(*) from public.documentos where car_id = ${ids.car}) as n
  `;
  results.push(expectCheck("borrar un coche borra en cascada fotos, características y documento", Number(orphans.n), 0));

  return results;
}

async function main(): Promise<void> {
  loadEnv({ path: ".env.local", quiet: true });
  const databaseUrl = process.env.DATABASE_URL?.trim();
  if (!databaseUrl) throw new Error("Falta DATABASE_URL en .env.local.");

  const sql = connectDb(databaseUrl);
  let results: CheckResult[] = [];
  try {
    await sql.begin(async (tx) => {
      results = await runChecks(tx);
      throw new Rollback("rollback");
    });
  } catch (error) {
    if (!(error instanceof Rollback)) throw error;
  } finally {
    await sql.end({ timeout: 5 });
  }

  const { ok, report } = summarizeChecks(results);
  console.info(report);
  if (!ok) process.exitCode = 1;
}

main().catch((error: unknown) => {
  const message = error instanceof Error ? error.message : String(error);
  console.error(`\nError al comprobar la RLS: ${message}`);
  process.exitCode = 1;
});
