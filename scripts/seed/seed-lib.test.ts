import { describe, expect, it } from "vitest";
import { BACKUP_CARS } from "./cars-backup";
import {
  buildCarFeaturePairs,
  buildCarImageRows,
  buildCarRow,
  buildChargerRow,
  buildExcludedSetClause,
  buildPublicStorageUrl,
  publicImage,
  resolveImageUrl,
  storageImage,
} from "./seed-lib";
import { SEED_CHARGERS } from "./chargers-data";

const URL = "https://proyecto.supabase.co";

describe("002 · AC-7 · URLs de las fotos del seed", () => {
  it("construye la URL pública del bucket car-images desde NEXT_PUBLIC_SUPABASE_URL", () => {
    expect(buildPublicStorageUrl(`${URL}/`, "cars/abc/foto.webp")).toBe(
      `${URL}/storage/v1/object/public/car-images/cars/abc/foto.webp`,
    );
  });

  it("falla si la URL del proyecto no es una URL", () => {
    expect(() => buildPublicStorageUrl("proyecto", "cars/a.webp")).toThrow(/NEXT_PUBLIC_SUPABASE_URL/);
  });

  it("deja las fotos de public/ como rutas locales y exige la «/» inicial", () => {
    expect(resolveImageUrl(URL, publicImage("/coches/bmw-i4.jpg"))).toBe("/coches/bmw-i4.jpg");
    expect(resolveImageUrl(URL, storageImage("cars/x/y.jpg"))).toContain("/object/public/car-images/cars/x/y.jpg");
    expect(() => resolveImageUrl(URL, publicImage("coches/bmw-i4.jpg"))).toThrow();
  });

  it("las fotos de los coches del backup apuntan a su carpeta cars/<id>/ y mantienen el orden", () => {
    const rows = buildCarImageRows(URL, BACKUP_CARS);
    for (const row of rows) {
      expect(row.image_url).toContain(`/car-images/cars/${row.car_id}/`);
    }
    const tesla = rows.filter((r) => r.car_id === BACKUP_CARS[0].id);
    expect(tesla).toHaveLength(7);
    expect(tesla[0].image_url.endsWith("sm70klna6a.webp")).toBe(true);
  });
});

describe("002 · AC-6 · filas del seed", () => {
  it("la fila del coche lleva el slug de la app y el concesionario de su ubicación", () => {
    const row = buildCarRow(BACKUP_CARS[0]);
    expect(row.slug).toBe("tesla-model-3-con-38500km-2021-1b3715a1");
    expect(row.dealership_name).toBe("Lebauto Madrid");
    expect(row).not.toHaveProperty("images");
    expect(row).not.toHaveProperty("features");
  });

  it("la fila del cargador lleva slug", () => {
    expect(buildChargerRow(SEED_CHARGERS[0]).slug).toMatch(/^cargador-domestico-74-kw-0b6e2d4f$/);
  });

  it("falla si un coche usa una característica que no existe", () => {
    expect(() => buildCarFeaturePairs(BACKUP_CARS, [])).toThrow(/Característica desconocida/);
  });

  it("genera el SET del upsert solo con nombres de columna válidos", () => {
    expect(buildExcludedSetClause(["brand", "body_type"])).toBe(
      '"brand" = excluded."brand", "body_type" = excluded."body_type"',
    );
    expect(() => buildExcludedSetClause(['brand"; drop table cars; --'])).toThrow();
    expect(() => buildExcludedSetClause([])).toThrow();
  });
});
