import type { Charger } from "@/lib/definitions";
import type { ChargerFormInput } from "@/lib/validations";

/** Valores iniciales del formulario: los del cargador que se edita o los de uno nuevo. */
export function getChargerFormDefaults(charger: Charger | null): ChargerFormInput {
  if (!charger) {
    return {
      name: "",
      brand: undefined,
      power_kw: 7.4,
      connector_type: "Tipo 2",
      price_eur: 0,
      installation_cost_eur: undefined,
      features: [],
      description: undefined,
      image_url: undefined,
      category: "home",
      efficiency: undefined,
      dimensions: undefined,
      weight_kg: undefined,
      warranty_years: undefined,
      compatibility_notes: undefined,
    };
  }

  return {
    id: charger.id,
    name: charger.name || "",
    brand: charger.brand || undefined,
    power_kw: charger.power_kw || 0,
    connector_type: charger.connector_type || "",
    price_eur: charger.price_eur || 0,
    installation_cost_eur: charger.installation_cost_eur ?? undefined,
    features: charger.features || [],
    description: charger.description || undefined,
    image_url: charger.image_url || undefined,
    category: charger.category || "home",
    efficiency: charger.efficiency ?? undefined,
    dimensions: charger.dimensions || undefined,
    weight_kg: charger.weight_kg ?? undefined,
    warranty_years: charger.warranty_years ?? undefined,
    compatibility_notes: charger.compatibility_notes || undefined,
  };
}
