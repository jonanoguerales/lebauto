/** Lógica pura del seed de demostración (spec 002, AC-6/AC-7). Probada en seed-lib.test.ts. */
import { generateChargerSlug, generateVehicleSlug } from "../../src/utils/slug";
import {
  DEALERSHIPS,
  type BodyType,
  type ChargerCategory,
  type Color,
  type Condition,
  type Dealership,
  type Drivetrain,
  type EnvironmentalTag,
  type Fuel,
  type Location,
  type Transmission,
} from "./catalog-values";

export const BUCKET = "car-images";

/** Foto del bucket (ruta dentro de car-images) o fichero de public/ servido por Next. */
export type ImageRef = { kind: "storage"; path: string } | { kind: "public"; path: string };

export const storageImage = (path: string): ImageRef => ({ kind: "storage", path });
export const publicImage = (path: string): ImageRef => ({ kind: "public", path });

export interface SeedCar {
  id: string;
  brand: string;
  model: string;
  variant: string;
  condition: Condition;
  price: number;
  location: Location;
  year: number;
  mileage: number;
  body_type: BodyType;
  fuel: Fuel;
  transmission: Transmission;
  environmental_tag: EnvironmentalTag;
  drivetrain: Drivetrain;
  power: number;
  engine_displacement: number | null;
  color: Color;
  doors: number;
  seats: number;
  electric_range: number | null;
  battery_capacity: number | null;
  charging_time: number | null;
  fast_charge: boolean;
  charging_port: string | null;
  iva_deductible: boolean;
  monthly_price: number;
  finance_price: number;
  description: string;
  images: ImageRef[];
  /** Nombres de `features`. */
  features: string[];
}

export type CarRow = Omit<SeedCar, "images" | "features"> & Dealership & { slug: string };

export interface SeedCharger {
  id: string;
  name: string;
  brand: string | null;
  power_kw: number;
  connector_type: string;
  price_eur: number;
  installation_cost_eur: number | null;
  features: string[];
  description: string;
  image_url: string;
  category: ChargerCategory;
  efficiency: number | null;
  dimensions: string | null;
  weight_kg: number | null;
  warranty_years: number | null;
  compatibility_notes: string | null;
}

export type ChargerRow = SeedCharger & { slug: string };

/** URL pública de un objeto del bucket, igual que la que devuelve getPublicUrl() de supabase-js. */
export function buildPublicStorageUrl(supabaseUrl: string, path: string): string {
  const base = supabaseUrl.trim().replace(/\/+$/, "");
  if (!/^https?:\/\//.test(base)) {
    throw new Error("NEXT_PUBLIC_SUPABASE_URL no es una URL válida.");
  }
  const cleanPath = path.replace(/^\/+/, "");
  const encoded = cleanPath.split("/").map(encodeURIComponent).join("/");
  return `${base}/storage/v1/object/public/${BUCKET}/${encoded}`;
}

/** Convierte una referencia de imagen en el valor de car_images.image_url. */
export function resolveImageUrl(supabaseUrl: string, ref: ImageRef): string {
  if (ref.kind === "storage") return buildPublicStorageUrl(supabaseUrl, ref.path);
  if (!ref.path.startsWith("/")) throw new Error(`Ruta pública sin «/» inicial: ${ref.path}`);
  return ref.path;
}

/** Fila de `cars`: datos del coche + concesionario de su ubicación + slug como lo genera la app. */
export function buildCarRow(car: SeedCar): CarRow {
  const { images: _images, features: _features, ...columns } = car;
  return {
    ...columns,
    ...DEALERSHIPS[car.location],
    slug: generateVehicleSlug(car),
  };
}

export function buildChargerRow(charger: SeedCharger): ChargerRow {
  return {
    ...charger,
    slug: generateChargerSlug({ name: charger.name, brand: charger.brand ?? undefined, id: charger.id }),
  };
}

/** Pares (car_id, image_url) en el orden de la galería (la primera es la portada). */
export function buildCarImageRows(
  supabaseUrl: string,
  cars: SeedCar[],
): { car_id: string; image_url: string }[] {
  return cars.flatMap((car) =>
    car.images.map((ref) => ({ car_id: car.id, image_url: resolveImageUrl(supabaseUrl, ref) })),
  );
}

/** Pares (car_id, nombre de característica); falla si un coche usa una característica que no existe. */
export function buildCarFeaturePairs(
  cars: SeedCar[],
  featureNames: readonly string[],
): { car_id: string; feature_name: string }[] {
  const known = new Set(featureNames);
  return cars.flatMap((car) =>
    car.features.map((name) => {
      if (!known.has(name)) throw new Error(`Característica desconocida en ${car.brand} ${car.model}: ${name}`);
      return { car_id: car.id, feature_name: name };
    }),
  );
}

/** `"col" = excluded."col", …` para el `on conflict … do update` del seed (columnas del propio código). */
export function buildExcludedSetClause(columns: readonly string[]): string {
  if (columns.length === 0) throw new Error("No hay columnas que actualizar.");
  return columns
    .map((column) => {
      if (!/^[a-z_][a-z0-9_]*$/.test(column)) throw new Error(`Nombre de columna no válido: ${column}`);
      return `"${column}" = excluded."${column}"`;
    })
    .join(", ");
}
