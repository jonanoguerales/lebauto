/** Lógica pura de scripts/upload-storage.ts (spec 002, AC-7). Probada en storage-lib.test.ts. */
import path from "node:path";

/**
 * Tipo MIME a partir de los primeros bytes. Hace falta porque varios ficheros del backup se llaman
 * `.jpg` pero son WebP: si se subieran como image/jpeg algunos navegadores no los mostrarían.
 */
export function detectImageContentType(bytes: Uint8Array): string | null {
  const ascii = (start: number, end: number) => String.fromCharCode(...bytes.subarray(start, end));
  if (bytes.length >= 12 && ascii(0, 4) === "RIFF" && ascii(8, 12) === "WEBP") return "image/webp";
  if (bytes.length >= 3 && bytes[0] === 0xff && bytes[1] === 0xd8 && bytes[2] === 0xff) return "image/jpeg";
  if (bytes.length >= 8 && ascii(1, 4) === "PNG" && bytes[0] === 0x89) return "image/png";
  if (bytes.length >= 12 && ascii(4, 8) === "ftyp" && ascii(8, 12) === "avif") return "image/avif";
  return null;
}

/** Ruta dentro del bucket (siempre con «/») de un fichero que está bajo la carpeta raíz del backup. */
export function toBucketPath(rootDir: string, filePath: string): string {
  const relative = path.relative(rootDir, filePath);
  if (relative === "" || relative.startsWith("..") || path.isAbsolute(relative)) {
    throw new Error(`El fichero no está dentro de la carpeta del backup: ${filePath}`);
  }
  return relative.split(path.sep).join("/");
}

/** Ficheros que no se suben (marcadores de carpeta del dashboard de Supabase, ficheros ocultos). */
export function isUploadable(fileName: string): boolean {
  return !fileName.startsWith(".");
}
