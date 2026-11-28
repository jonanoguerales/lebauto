import { describe, expect, it, vi } from "vitest";
import { applyRangeBound, RANGE_DEBOUNCE_MS, resolveRangeBound } from "./useDebouncedRange";

// AC-4: filtros de rango del catálogo (precio, año, km). Lógica pura del hook genérico de rango con retardo.
describe("resolveRangeBound (AC-4)", () => {
  it("mantiene el retardo de 500 ms de los hooks anteriores", () => {
    expect(RANGE_DEBOUNCE_MS).toBe(500);
  });

  it("corrige el mínimo al máximo cuando min > max", () => {
    expect(resolveRangeBound("min", "300", "200", 0)).toEqual({ value: 200, corrected: true });
  });

  it("corrige el máximo al mínimo cuando max < min", () => {
    expect(resolveRangeBound("max", "100", "200", 999)).toEqual({ value: 200, corrected: true });
  });

  it("acepta extremos iguales sin corregir", () => {
    expect(resolveRangeBound("min", "200", "200", 0)).toEqual({ value: 200, corrected: false });
    expect(resolveRangeBound("max", "200", "200", 999)).toEqual({ value: 200, corrected: false });
  });

  it("un máximo vacío con mínimo puesto cuenta como 0 y se corrige (igual que antes)", () => {
    expect(resolveRangeBound("max", "", "100", 999)).toEqual({ value: 100, corrected: true });
  });

  it("no corrige si el otro extremo está vacío o a 0", () => {
    expect(resolveRangeBound("min", "300", "", 0)).toEqual({ value: 300, corrected: false });
    expect(resolveRangeBound("max", "5", "0", 999)).toEqual({ value: 5, corrected: false });
  });

  it("usa el valor por defecto si el campo está vacío o a 0", () => {
    expect(resolveRangeBound("min", "", "200", 7)).toEqual({ value: 7, corrected: false });
    expect(resolveRangeBound("max", "0", "", 999)).toEqual({ value: 999, corrected: false });
  });
});

describe("applyRangeBound (AC-4)", () => {
  const setup = (min: string, max: string) => {
    const calls: string[] = [];
    const state = {
      min,
      max,
      setMin: vi.fn((v: string) => calls.push(`setMin:${v}`)),
      setMax: vi.fn((v: string) => calls.push(`setMax:${v}`)),
      fallback: { min: 0, max: 1000 },
      onCommit: vi.fn((bound: string, v: number) => calls.push(`commit:${bound}:${v}`)),
      onInvalid: vi.fn((bound: string) => calls.push(`invalid:${bound}`)),
    };
    return { state, calls };
  };

  it("min > max: avisa, aplica el máximo y corrige el campo mínimo, en ese orden", () => {
    const { state, calls } = setup("500", "200");
    applyRangeBound("min", "500", state);
    expect(calls).toEqual(["invalid:min", "commit:min:200", "setMin:200"]);
  });

  it("max < min: avisa, aplica el mínimo y corrige el campo máximo, en ese orden", () => {
    const { state, calls } = setup("500", "200");
    applyRangeBound("max", "200", state);
    expect(calls).toEqual(["invalid:max", "commit:max:500", "setMax:500"]);
  });

  it("rango válido: solo aplica el valor (o el de por defecto si está vacío)", () => {
    const { state, calls } = setup("", "");
    applyRangeBound("min", "100", state);
    applyRangeBound("max", "", state);
    expect(calls).toEqual(["commit:min:100", "commit:max:1000"]);
  });
});
