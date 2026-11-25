/**
 * Sube las fotos del backup (supabase/seed/storage/car-images/) al bucket car-images con las mismas
 * rutas (cars/<uuid>/<fichero>). Idempotente: usa upsert. Spec 002, AC-7.
 *
 * Necesita SUPABASE_SECRET_KEY en .env.local: es una clave solo para scripts locales y nunca se usa en src/.
 * Uso: pnpm db:upload-storage
 */
import { readdir, readFile } from "node:fs/promises";
import path from "node:path";
import { createClient } from "@supabase/supabase-js";
import { config as loadEnv } from "dotenv";
import { detectImageContentType, isUploadable, toBucketPath } from "./storage-lib";

const BUCKET = "car-images";
const BACKUP_DIR = path.join(process.cwd(), "supabase", "seed", "storage", BUCKET);

async function listFiles(dir: string): Promise<string[]> {
  const entries = await readdir(dir, { withFileTypes: true });
  const nested = await Promise.all(
    entries
      .filter((entry) => isUploadable(entry.name))
      .map((entry) => {
        const fullPath = path.join(dir, entry.name);
        return entry.isDirectory() ? listFiles(fullPath) : Promise.resolve([fullPath]);
      }),
  );
  return nested.flat().sort();
}

async function main(): Promise<void> {
  loadEnv({ path: ".env.local", quiet: true });

  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL?.trim();
  const secretKey = process.env.SUPABASE_SECRET_KEY?.trim();
  if (!supabaseUrl) {
    throw new Error("Falta NEXT_PUBLIC_SUPABASE_URL en .env.local.");
  }
  if (!secretKey) {
    throw new Error(
      "Falta SUPABASE_SECRET_KEY en .env.local. Créala en Supabase → Project Settings → API Keys → " +
        "Secret keys y pégala solo en .env.local (no lleva NEXT_PUBLIC_ y nunca se usa en la app).",
    );
  }

  const supabase = createClient(supabaseUrl, secretKey, {
    auth: { persistSession: false, autoRefreshToken: false },
  });

  const files = await listFiles(BACKUP_DIR);
  if (files.length === 0) {
    throw new Error(`No hay fotos en ${path.relative(process.cwd(), BACKUP_DIR)}.`);
  }

  let failed = 0;
  for (const file of files) {
    const bucketPath = toBucketPath(BACKUP_DIR, file);
    const bytes = await readFile(file);
    const contentType = detectImageContentType(bytes);
    if (!contentType) {
      console.error(`FALLA · ${bucketPath} — no es una imagen reconocible (JPEG, PNG, WebP o AVIF).`);
      failed += 1;
      continue;
    }
    const { error } = await supabase.storage
      .from(BUCKET)
      .upload(bucketPath, bytes, { contentType, upsert: true, cacheControl: "3600" });
    if (error) {
      console.error(`FALLA · ${bucketPath} — ${error.message}`);
      failed += 1;
    } else {
      console.info(`subida · ${bucketPath} (${contentType})`);
    }
  }

  if (failed > 0) {
    throw new Error(`${failed} de ${files.length} fotos no se han podido subir.`);
  }
  console.info(`\nFotos subidas al bucket ${BUCKET}: ${files.length}.`);
}

main().catch((error: unknown) => {
  const message = error instanceof Error ? error.message : String(error);
  console.error(`\nError al subir las fotos: ${message}`);
  process.exitCode = 1;
});
