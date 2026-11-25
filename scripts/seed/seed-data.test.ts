import { existsSync, readdirSync } from "node:fs";
import path from "node:path";
import { describe, expect, it } from "vitest";
import { BACKUP_CARS } from "./cars-backup";
import { LOCAL_CARS } from "./cars-local";
import {
  BODY_TYPES,
  CHARGER_CATEGORIES,
  COLORS,
  CONDITIONS,
  DEALERSHIPS,
  DRIVETRAINS,
  ENVIRONMENTAL_TAGS,
  FUELS,
  TRANSMISSIONS,
} from "./catalog-values";
import { SEED_CHARGERS } from "./chargers-data";
import { FEATURE_NAMES } from "./features-data";
import { buildCarFeaturePairs, buildCarRow, buildChargerRow } from "./seed-lib";

const ROOT = process.cwd();
const BACKUP_DIR = path.join(ROOT, "supabase", "seed", "storage", "car-images", "cars");
const CARS = [...BACKUP_CARS, ...LOCAL_CARS];
const distinct = <T>(values: T[]) => new Set(values).size;

describe("002 · AC-6 · datos de demostración", () => {
  it("hay al menos 12 coches y 4 eléctricos para la portada", () => {
    expect(CARS.length).toBeGreaterThanOrEqual(12);
    expect(CARS.filter((c) => c.fuel === "Eléctrico").length).toBeGreaterThanOrEqual(4);
  });

  it("los ids y slugs son únicos", () => {
    expect(distinct(CARS.map((c) => c.id))).toBe(CARS.length);
    expect(distinct(CARS.map((c) => buildCarRow(c).slug))).toBe(CARS.length);
    expect(distinct(SEED_CHARGERS.map((c) => buildChargerRow(c).slug))).toBe(SEED_CHARGERS.length);
  });

  it("usa exactamente los valores de los filtros y formularios de la app", () => {
    for (const car of CARS) {
      expect(FUELS).toContain(car.fuel);
      expect(COLORS).toContain(car.color);
      expect(BODY_TYPES).toContain(car.body_type);
      expect(ENVIRONMENTAL_TAGS).toContain(car.environmental_tag);
      expect(TRANSMISSIONS).toContain(car.transmission);
      expect(DRIVETRAINS).toContain(car.drivetrain);
      expect(CONDITIONS).toContain(car.condition);
      expect(Object.keys(DEALERSHIPS)).toContain(car.location);
    }
  });

  it("hay variedad en cada filtro: marcas, combustibles, carrocerías, colores, ubicaciones, puertas, plazas y etiquetas", () => {
    expect(distinct(CARS.map((c) => c.brand))).toBeGreaterThanOrEqual(5);
    expect(distinct(CARS.map((c) => c.fuel))).toBeGreaterThanOrEqual(3);
    expect(distinct(CARS.map((c) => c.body_type))).toBeGreaterThanOrEqual(3);
    expect(distinct(CARS.map((c) => c.color))).toBeGreaterThanOrEqual(4);
    expect(distinct(CARS.map((c) => c.location))).toBe(Object.keys(DEALERSHIPS).length);
    expect(distinct(CARS.map((c) => c.doors))).toBeGreaterThanOrEqual(3);
    expect(distinct(CARS.map((c) => c.seats))).toBeGreaterThanOrEqual(2);
    expect(distinct(CARS.map((c) => c.environmental_tag))).toBeGreaterThanOrEqual(3);
    expect(distinct(CARS.map((c) => c.condition))).toBeGreaterThanOrEqual(4);
  });

  it("cubre rangos amplios de precio, año y kilómetros", () => {
    const prices = CARS.map((c) => c.price);
    const years = CARS.map((c) => c.year);
    const km = CARS.map((c) => c.mileage);
    expect(Math.min(...prices)).toBeLessThan(20000);
    expect(Math.max(...prices)).toBeGreaterThan(100000);
    expect(Math.max(...years) - Math.min(...years)).toBeGreaterThanOrEqual(10);
    expect(Math.min(...km)).toBeLessThan(1000);
    expect(Math.max(...km)).toBeGreaterThan(100000);
  });

  it("asigna unas 20 características y todas existen", () => {
    expect(FEATURE_NAMES.length).toBeGreaterThanOrEqual(20);
    const pairs = buildCarFeaturePairs(CARS, FEATURE_NAMES);
    expect(distinct(pairs.map((p) => p.feature_name))).toBe(FEATURE_NAMES.length);
  });

  it("hay al menos 6 cargadores de las 3 categorías", () => {
    expect(SEED_CHARGERS.length).toBeGreaterThanOrEqual(6);
    expect(new Set(SEED_CHARGERS.map((c) => c.category))).toEqual(new Set(CHARGER_CATEGORIES));
  });
});

describe("002 · AC-6/AC-7 · fotos del seed", () => {
  it("los 5 coches del backup usan como id el UUID de su carpeta y todas sus fotos", () => {
    const folders = readdirSync(BACKUP_DIR).filter((name) => readdirSync(path.join(BACKUP_DIR, name)).length > 0);
    expect(BACKUP_CARS.map((c) => c.id).sort()).toEqual(folders.sort());
    for (const car of BACKUP_CARS) {
      const files = readdirSync(path.join(BACKUP_DIR, car.id)).sort();
      expect(car.images.map((i) => i.path.split("/").pop()).sort()).toEqual(files);
      expect(car.images.every((i) => i.kind === "storage" && i.path.startsWith(`cars/${car.id}/`))).toBe(true);
    }
  });

  it("el resto de coches y los cargadores usan imágenes que existen en public/", () => {
    for (const car of LOCAL_CARS) {
      for (const image of car.images) {
        expect(image.kind).toBe("public");
        expect(existsSync(path.join(ROOT, "public", image.path))).toBe(true);
      }
    }
    for (const charger of SEED_CHARGERS) {
      expect(existsSync(path.join(ROOT, "public", charger.image_url))).toBe(true);
    }
  });
});
