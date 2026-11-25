import { describe, expect, it } from "vitest";
import type { Charger } from "@/lib/definitions";
import { getChargerFormDefaults } from "./chargerFormDefaults";

// T-01b.3 · AC-3 y AC-6: el diálogo de cargadores se monta de nuevo en cada apertura y rellena el
// formulario con estos valores (antes los copiaba un efecto con form.reset).
describe("getChargerFormDefaults (T-01b.3 AC-3, AC-6)", () => {
  it("AC-3: al crear, el formulario empieza con los valores por defecto", () => {
    const defaults = getChargerFormDefaults(null);
    expect(defaults).toMatchObject({ name: "", power_kw: 7.4, connector_type: "Tipo 2", price_eur: 0, category: "home", features: [] });
    expect(defaults.id).toBeUndefined();
  });

  it("AC-3: al editar, el formulario se rellena con los datos del cargador", () => {
    const charger: Charger = {
      id: "c1",
      name: "Wallbox Pro",
      brand: "Lebauto",
      power_kw: 22,
      connector_type: "CCS",
      price_eur: 899,
      installation_cost_eur: 0,
      features: ["WiFi"],
      image_url: "https://example.com/a.png",
      category: "business",
      efficiency: 95,
    };
    expect(getChargerFormDefaults(charger)).toMatchObject({
      id: "c1",
      name: "Wallbox Pro",
      brand: "Lebauto",
      power_kw: 22,
      connector_type: "CCS",
      price_eur: 899,
      installation_cost_eur: 0,
      features: ["WiFi"],
      image_url: "https://example.com/a.png",
      category: "business",
      efficiency: 95,
      description: undefined,
    });
  });
});
