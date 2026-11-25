import { describe, expect, it } from "vitest";
import type { CarRowWithRelations } from "@/lib/definitions";
import { mapCarFromDB, mapCarToDB } from "./mappers";

// T-01b.1 · AC-2 / AC-5: los mappers usan el tipo real de la fila de `cars`
// y las columnas nullable de la BD llegan al modelo como `undefined`.
const row: CarRowWithRelations = {
  id: "c1",
  brand: "Tesla",
  model: "Model 3",
  variant: null,
  condition: "Seminuevo",
  price: 32000,
  location: null,
  year: 2022,
  mileage: 15000,
  body_type: "Berlina",
  fuel: "Eléctrico",
  transmission: "Automático",
  environmental_tag: "0",
  drivetrain: null,
  power: 283,
  engine_displacement: null,
  color: "Blanco",
  doors: 4,
  seats: 5,
  electric_range: 491,
  battery_capacity: 60,
  charging_time: null,
  fast_charge: true,
  charging_port: "CCS",
  iva_deductible: false,
  monthly_price: null,
  finance_price: null,
  description: null,
  slug: "tesla-model-3-2022",
  images: ["https://example.com/1.jpg"],
  features: ["f1"],
};

describe("mapCarFromDB (T-01b.1 · AC-5)", () => {
  it("pasa de snake_case a camelCase con imágenes y características", () => {
    const car = mapCarFromDB(row);
    expect(car.bodyType).toBe("Berlina");
    expect(car.environmentalTag).toBe("0");
    expect(car.electricRange).toBe(491);
    expect(car.fastCharge).toBe(true);
    expect(car.images).toEqual(["https://example.com/1.jpg"]);
    expect(car.features).toEqual(["f1"]);
  });

  it("convierte las columnas null en undefined", () => {
    const car = mapCarFromDB(row);
    expect(car.variant).toBeUndefined();
    expect(car.location).toBeUndefined();
    expect(car.engineDisplacement).toBeUndefined();
    expect(car.monthlyPrice).toBeUndefined();
    expect(car.description).toBeUndefined();
  });
});

describe("mapCarToDB (T-01b.1 · AC-2)", () => {
  it("es la inversa de mapCarFromDB en las columnas de la tabla", () => {
    const db = mapCarToDB(mapCarFromDB(row));
    expect(db.body_type).toBe("Berlina");
    expect(db.environmental_tag).toBe("0");
    expect(db.seats).toBe(5);
    expect(db.slug).toBe("tesla-model-3-2022");
    expect(db).not.toHaveProperty("images");
  });
});
