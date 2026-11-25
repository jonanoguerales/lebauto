/**
 * Carga los datos de demostración (spec 002, AC-6). Idempotente: se puede ejecutar las veces que haga
 * falta; actualiza los coches, cargadores y características del seed sin tocar el resto de filas.
 * Uso: pnpm db:seed-demo
 */
import { config as loadEnv } from "dotenv";
import { connectDb } from "./db";
import { BACKUP_CARS } from "./seed/cars-backup";
import { LOCAL_CARS } from "./seed/cars-local";
import { SEED_CHARGERS } from "./seed/chargers-data";
import { FEATURE_NAMES } from "./seed/features-data";
import {
  buildCarFeaturePairs,
  buildCarImageRows,
  buildCarRow,
  buildChargerRow,
  buildExcludedSetClause,
  buildPublicStorageUrl,
} from "./seed/seed-lib";

const SEED_CARS = [...BACKUP_CARS, ...LOCAL_CARS];

function requireEnv(name: string, hint: string): string {
  const value = process.env[name]?.trim();
  if (!value) throw new Error(`Falta ${name} en .env.local. ${hint}`);
  return value;
}

/** Avisa si las fotos del backup todavía no están subidas al bucket (no bloquea el seed). */
async function warnIfStorageIsEmpty(supabaseUrl: string): Promise<void> {
  const first = BACKUP_CARS[0].images[0];
  try {
    const response = await fetch(buildPublicStorageUrl(supabaseUrl, first.path), { method: "HEAD" });
    if (!response.ok) {
      console.warn(
        "Aviso: las fotos del backup aún no están en el bucket car-images. Ejecuta «pnpm db:upload-storage».",
      );
    }
  } catch {
    console.warn("Aviso: no se ha podido comprobar el bucket car-images (¿sin conexión?).");
  }
}

async function main(): Promise<void> {
  loadEnv({ path: ".env.local", quiet: true });
  const databaseUrl = requireEnv("DATABASE_URL", "Cópiala de Supabase → Connect → Transaction pooler.");
  const supabaseUrl = requireEnv("NEXT_PUBLIC_SUPABASE_URL", "Es la URL del proyecto de Supabase.");

  const carRows = SEED_CARS.map(buildCarRow);
  const chargerRows = SEED_CHARGERS.map(buildChargerRow);
  const imageRows = buildCarImageRows(supabaseUrl, SEED_CARS);
  const featurePairs = buildCarFeaturePairs(SEED_CARS, FEATURE_NAMES);
  const carIds = SEED_CARS.map((car) => car.id);

  const carSet = buildExcludedSetClause(Object.keys(carRows[0]).filter((c) => c !== "id"));
  const chargerSet = buildExcludedSetClause(Object.keys(chargerRows[0]).filter((c) => c !== "id"));

  const sql = connectDb(databaseUrl);

  try {
    await sql.begin(async (tx) => {
      await tx`
        insert into public.features ${tx(FEATURE_NAMES.map((name) => ({ name })))}
        on conflict (name) do nothing
      `;
      const features = await tx<{ id: string; name: string }[]>`
        select id, name from public.features where name in ${tx([...FEATURE_NAMES])}
      `;
      const featureIdByName = new Map(features.map((f) => [f.name, f.id]));

      await tx`
        insert into public.cars ${tx(carRows)}
        on conflict (id) do update set ${tx.unsafe(carSet)}
      `;

      // Galería y equipamiento se reemplazan enteros para que el orden y la lista coincidan con el seed.
      await tx`delete from public.car_images where car_id in ${tx(carIds)}`;
      await tx`insert into public.car_images ${tx(imageRows)}`;

      await tx`delete from public.car_features where car_id in ${tx(carIds)}`;
      const carFeatureRows = featurePairs.map(({ car_id, feature_name }) => ({
        car_id,
        feature_id: featureIdByName.get(feature_name)!,
      }));
      await tx`insert into public.car_features ${tx(carFeatureRows)}`;

      await tx`
        insert into public.chargers ${tx(chargerRows)}
        on conflict (id) do update set ${tx.unsafe(chargerSet)}
      `;
    });

    const [counts] = await sql<{ cars: number; images: number; features: number; chargers: number }[]>`
      select
        (select count(*)::int from public.cars) as cars,
        (select count(*)::int from public.car_images) as images,
        (select count(*)::int from public.features) as features,
        (select count(*)::int from public.chargers) as chargers
    `;
    console.info(
      `Seed de demostración cargado: ${counts.cars} coches, ${counts.images} fotos, ` +
        `${counts.features} características y ${counts.chargers} cargadores en la base de datos.`,
    );
  } finally {
    await sql.end({ timeout: 5 });
  }

  await warnIfStorageIsEmpty(supabaseUrl);
}

main().catch((error: unknown) => {
  const message = error instanceof Error ? error.message : String(error);
  console.error(`\nError al cargar el seed de demostración: ${message}`);
  process.exitCode = 1;
});
