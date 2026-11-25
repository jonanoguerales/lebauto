import path from "node:path";
import { describe, expect, it } from "vitest";
import { detectImageContentType, isUploadable, toBucketPath } from "./storage-lib";

const bytes = (...values: (number | string)[]) =>
  Uint8Array.from(values.flatMap((v) => (typeof v === "string" ? [...v].map((c) => c.charCodeAt(0)) : [v])));

describe("002 · AC-7 · subida de las fotos del backup", () => {
  it("detecta WebP aunque el fichero se llame .jpg (como en el backup)", () => {
    expect(detectImageContentType(bytes("RIFF", 0, 0, 0, 0, "WEBPVP8 "))).toBe("image/webp");
  });

  it("detecta JPEG, PNG y AVIF y rechaza lo que no es imagen", () => {
    expect(detectImageContentType(bytes(0xff, 0xd8, 0xff, 0xe0))).toBe("image/jpeg");
    expect(detectImageContentType(bytes(0x89, "PNG", 0x0d, 0x0a, 0x1a, 0x0a))).toBe("image/png");
    expect(detectImageContentType(bytes(0, 0, 0, 0x1c, "ftypavif"))).toBe("image/avif");
    expect(detectImageContentType(bytes("hola mundo"))).toBeNull();
  });

  it("conserva la ruta cars/<uuid>/<fichero> dentro del bucket", () => {
    const root = path.join("/repo", "supabase", "seed", "storage", "car-images");
    const file = path.join(root, "cars", "1b3715a1-1bf7-4cdd-ae44-0361e3c540f2", "sm70klna6a.webp");
    expect(toBucketPath(root, file)).toBe("cars/1b3715a1-1bf7-4cdd-ae44-0361e3c540f2/sm70klna6a.webp");
  });

  it("no acepta ficheros fuera de la carpeta del backup", () => {
    expect(() => toBucketPath("/repo/backup", "/repo/otro/foto.webp")).toThrow();
    expect(() => toBucketPath("/repo/backup", "/repo/backup")).toThrow();
  });

  it("salta los ficheros ocultos como .emptyFolderPlaceholder", () => {
    expect(isUploadable(".emptyFolderPlaceholder")).toBe(false);
    expect(isUploadable("sm70klna6a.webp")).toBe(true);
  });
});
