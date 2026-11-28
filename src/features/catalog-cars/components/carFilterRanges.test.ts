import { beforeEach, describe, expect, it, vi } from "vitest";
import { toast } from "sonner";
import { applyRangeBound } from "@/common/hooks/useDebouncedRange";
import { getRangeFilters, rangeFilterHandlers, type RangeFilterName } from "./carFilterRanges";

vi.mock("sonner", () => ({ toast: { error: vi.fn() } }));

// AC-4: rangos de precio, año y km del catálogo. Mismos textos, valores por defecto y correcciones que los
// antiguos usePriceDebounce, useYearDebounce y useKmDebounce.
const CURRENT_YEAR = 2026;

const cases: {
  name: RangeFilterName;
  keys: [string, string];
  fallback: [number, number];
  minMessage: string;
  maxMessage: string;
}[] = [
  {
    name: "price",
    keys: ["minPrice", "maxPrice"],
    fallback: [0, 1000000],
    minMessage: "El precio mínimo no puede ser mayor que el precio máximo.",
    maxMessage: "El precio máximo no puede ser menor que el precio mínimo.",
  },
  {
    name: "year",
    keys: ["minYear", "maxYear"],
    fallback: [1990, CURRENT_YEAR],
    minMessage: "El año mínimo no puede ser mayor que el año máximo.",
    maxMessage: "El año máximo no puede ser menor que el año mínimo.",
  },
  {
    name: "km",
    keys: ["minKm", "maxKm"],
    fallback: [0, 500000],
    minMessage: "Los kilómetros mínimos no pueden ser mayores que los kilómetros máximos.",
    maxMessage: "Los kilómetros máximos no pueden ser menores que los kilómetros mínimos.",
  },
];

describe.each(cases)("filtro de rango $name (AC-4)", ({ name, keys, fallback, minMessage, maxMessage }) => {
  const setFilter = vi.fn();
  const setMin = vi.fn();
  const setMax = vi.fn();
  const state = (min: string, max: string) => ({
    min,
    max,
    setMin,
    setMax,
    ...rangeFilterHandlers(getRangeFilters(CURRENT_YEAR)[name], setFilter),
  });

  beforeEach(() => vi.clearAllMocks());

  it("min > max: toast con el texto exacto, filtro al máximo y campo mínimo corregido", () => {
    applyRangeBound("min", "3000", state("3000", "2000"));
    expect(toast.error).toHaveBeenCalledWith("Error", { description: minMessage });
    expect(setFilter).toHaveBeenCalledWith(keys[0], 2000);
    expect(setMin).toHaveBeenCalledWith("2000");
  });

  it("max < min: toast con el texto exacto, filtro al mínimo y campo máximo corregido", () => {
    applyRangeBound("max", "1000", state("2000", "1000"));
    expect(toast.error).toHaveBeenCalledWith("Error", { description: maxMessage });
    expect(setFilter).toHaveBeenCalledWith(keys[1], 2000);
    expect(setMax).toHaveBeenCalledWith("2000");
  });

  it("campos vacíos: aplica los valores por defecto sin avisar", () => {
    applyRangeBound("min", "", state("", ""));
    applyRangeBound("max", "", state("", ""));
    expect(toast.error).not.toHaveBeenCalled();
    expect(setFilter).toHaveBeenNthCalledWith(1, keys[0], fallback[0]);
    expect(setFilter).toHaveBeenNthCalledWith(2, keys[1], fallback[1]);
  });
});
