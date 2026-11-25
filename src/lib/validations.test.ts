import { describe, expect, it } from "vitest";
import { chargerSchema, contactFormSchema, sellCarSchema } from "./validations";

// T-01 · AC-8: los esquemas se migran a Zod 4 sin cambiar su comportamiento.
const validCharger = {
  name: "Wallbox Pro",
  power_kw: "7.4",
  connector_type: "Tipo 2",
  price_eur: "899",
  category: "home",
};

describe("chargerSchema (AC-8 · Zod 4)", () => {
  it("convierte los números que llegan como texto", () => {
    const result = chargerSchema.parse(validCharger);
    expect(result.power_kw).toBe(7.4);
    expect(result.price_eur).toBe(899);
    expect(result.features).toEqual([]);
  });

  it("trata los opcionales vacíos ('' o null) como no informados", () => {
    const result = chargerSchema.parse({
      ...validCharger,
      installation_cost_eur: "",
      efficiency: null,
      weight_kg: "",
      warranty_years: "",
      image_url: "",
    });
    expect(result.installation_cost_eur).toBeUndefined();
    expect(result.efficiency).toBeUndefined();
    expect(result.weight_kg).toBeUndefined();
    expect(result.warranty_years).toBeUndefined();
    expect(result.image_url).toBeUndefined();
  });

  it("acepta que falten las claves opcionales", () => {
    expect(chargerSchema.safeParse(validCharger).success).toBe(true);
  });

  it("valida los opcionales cuando vienen informados", () => {
    const result = chargerSchema.safeParse({
      ...validCharger,
      efficiency: "120",
      image_url: "no-es-una-url",
    });
    expect(result.success).toBe(false);
    const messages = result.error?.issues.map((issue) => issue.message);
    expect(messages).toContain("La eficiencia debe estar entre 0 y 100.");
    expect(messages).toContain("Debe ser una URL válida.");
  });

  it("mantiene el mensaje de categoría obligatoria", () => {
    const result = chargerSchema.safeParse({ ...validCharger, category: undefined });
    expect(result.error?.issues[0]?.message).toBe("La categoría es obligatoria.");
  });
});

describe("contactFormSchema y sellCarSchema (AC-8 · Zod 4)", () => {
  it("rechaza un email inválido con el mensaje en español", () => {
    const result = contactFormSchema.safeParse({
      name: "Ana",
      surnames: "López",
      email: "ana@",
      phone: "600000000",
      message: "Quiero información del coche.",
    });
    expect(result.error?.issues.map((issue) => issue.message)).toContain("Email inválido.");
  });

  it("acepta un email válido en el formulario de vender tu coche", () => {
    const result = sellCarSchema.safeParse({
      name: "Ana",
      email: "ana@example.com",
      phone: "600000000",
      brand: "Seat",
      model: "Ibiza",
      year: "2019",
      kilometers: "50000",
      fuel: "Gasolina",
    });
    expect(result.success).toBe(true);
  });
});
