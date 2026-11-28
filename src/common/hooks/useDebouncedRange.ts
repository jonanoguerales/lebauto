import { useDebouncedCallback } from "use-debounce";

export type RangeBound = "min" | "max";

export const RANGE_DEBOUNCE_MS = 500;

export interface RangeHandlers {
  /** Valor por defecto de cada extremo cuando el campo queda vacío o a 0. */
  fallback: Record<RangeBound, number>;
  /** Aplica el valor numérico definitivo de un extremo (p. ej. al filtro). */
  onCommit: (bound: RangeBound, value: number) => void;
  /** Avisa de que el extremo cruzaba al otro y se ha corregido. */
  onInvalid: (bound: RangeBound) => void;
}

export interface RangeState {
  min: string;
  max: string;
  setMin: (value: string) => void;
  setMax: (value: string) => void;
}

/**
 * Decide qué valor aplicar a un extremo del rango: si cruza al otro extremo (min > max o max < min) se corrige al
 * valor del otro; si no, se usa el número escrito o, si está vacío o es 0, el valor por defecto.
 */
export function resolveRangeBound(
  bound: RangeBound,
  value: string,
  other: string,
  fallback: number,
): { value: number; corrected: boolean } {
  const numValue = Number(value);
  const otherValue = Number(other);
  const crosses = bound === "min" ? numValue > otherValue : numValue < otherValue;
  if (otherValue && crosses) return { value: otherValue, corrected: true };
  return { value: numValue || fallback, corrected: false };
}

/** Valida un extremo y notifica en el mismo orden que los antiguos hooks: aviso, valor aplicado y campo corregido. */
export function applyRangeBound(
  bound: RangeBound,
  value: string,
  { min, max, setMin, setMax, fallback, onCommit, onInvalid }: RangeState & RangeHandlers,
): void {
  const other = bound === "min" ? max : min;
  const result = resolveRangeBound(bound, value, other, fallback[bound]);
  if (result.corrected) {
    onInvalid(bound);
    onCommit(bound, result.value);
    (bound === "min" ? setMin : setMax)(other);
  } else {
    onCommit(bound, result.value);
  }
}

/** Validación con retardo (500 ms por defecto) de un rango numérico min/max escrito en dos campos de texto. */
export function useDebouncedRange(params: RangeState & RangeHandlers, delay = RANGE_DEBOUNCE_MS) {
  // use-debounce guarda siempre la última versión del callback, así que `params` (min/max) está al día al disparar.
  const validateMin = useDebouncedCallback((value: string) => applyRangeBound("min", value, params), delay);
  const validateMax = useDebouncedCallback((value: string) => applyRangeBound("max", value, params), delay);
  return { validateMin, validateMax };
}
