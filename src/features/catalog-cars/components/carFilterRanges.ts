import { toast } from "sonner";
import type { NumberFilterKey } from "@/lib/definitions";
import type { RangeBound, RangeHandlers } from "@/common/hooks/useDebouncedRange";

// Configuración de dominio de los filtros de rango del catálogo (claves, valores por defecto y avisos).
// Hasta T-07 vive junto a CarFilters; el hook genérico está en common/hooks/useDebouncedRange.
export type RangeFilterName = "price" | "year" | "km";

interface RangeFilterConfig {
  keys: Record<RangeBound, NumberFilterKey>;
  fallback: Record<RangeBound, number>;
  messages: Record<RangeBound, string>;
}

export function getRangeFilters(currentYear: number): Record<RangeFilterName, RangeFilterConfig> {
  return {
    price: {
      keys: { min: "minPrice", max: "maxPrice" },
      fallback: { min: 0, max: 1000000 },
      messages: {
        min: "El precio mínimo no puede ser mayor que el precio máximo.",
        max: "El precio máximo no puede ser menor que el precio mínimo.",
      },
    },
    year: {
      keys: { min: "minYear", max: "maxYear" },
      fallback: { min: 1990, max: currentYear },
      messages: {
        min: "El año mínimo no puede ser mayor que el año máximo.",
        max: "El año máximo no puede ser menor que el año mínimo.",
      },
    },
    km: {
      keys: { min: "minKm", max: "maxKm" },
      fallback: { min: 0, max: 500000 },
      messages: {
        min: "Los kilómetros mínimos no pueden ser mayores que los kilómetros máximos.",
        max: "Los kilómetros máximos no pueden ser menores que los kilómetros mínimos.",
      },
    },
  };
}

/** Conecta un filtro de rango con el store de filtros y con el aviso (toast) de rango inválido. */
export function rangeFilterHandlers(
  config: RangeFilterConfig,
  setFilter: (key: NumberFilterKey, value: number) => void,
): RangeHandlers {
  return {
    fallback: config.fallback,
    onCommit: (bound, value) => setFilter(config.keys[bound], value),
    onInvalid: (bound) => toast.error("Error", { description: config.messages[bound] }),
  };
}
