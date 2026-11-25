import { describe, expect, it } from "vitest";
import {
  buildJwtClaims,
  buildVectorLiteral,
  describeOutcome,
  expectCheck,
  isAllowed,
  isBlocked,
  summarizeChecks,
} from "./rls-check";

describe("002 · AC-5 · utilidades de la verificación de RLS", () => {
  it("construye los claims del JWT con sub y rol", () => {
    expect(JSON.parse(buildJwtClaims("authenticated", "abc"))).toEqual({ sub: "abc", role: "authenticated" });
    expect(JSON.parse(buildJwtClaims("anon"))).toEqual({ role: "anon" });
  });

  it("marca una comprobación como correcta solo si coincide lo esperado", () => {
    expect(expectCheck("B no ve", 0, 0).passed).toBe(true);
    const failed = expectCheck("B no ve", 1, 0);
    expect(failed.passed).toBe(false);
    expect(failed.detail).toBe("esperado 0, obtenido 1");
  });

  it("el resumen falla si alguna comprobación falla o si no hay ninguna", () => {
    expect(summarizeChecks([expectCheck("a", 1, 1)]).ok).toBe(true);
    expect(summarizeChecks([expectCheck("a", 1, 1), expectCheck("b", 1, 0)]).ok).toBe(false);
    expect(summarizeChecks([]).ok).toBe(false);
  });

  it("una escritura está bloqueada si Postgres la rechaza o no afecta a ninguna fila", () => {
    expect(isBlocked({ ok: false, error: "permission denied for table cars" })).toBe(true);
    expect(isBlocked({ ok: true, rows: 0 })).toBe(true);
    expect(isBlocked({ ok: true, rows: 1 })).toBe(false);
  });

  it("una operación está permitida solo si no falla y devuelve filas", () => {
    expect(isAllowed({ ok: true, rows: 1 })).toBe(true);
    expect(isAllowed({ ok: true, rows: 0 })).toBe(false);
    expect(isAllowed({ ok: false, error: "new row violates row-level security policy" })).toBe(false);
    expect(isAllowed({ ok: true, rows: 2 }, 3)).toBe(false);
  });

  it("describe el resultado de una comprobación fallida", () => {
    expect(describeOutcome({ ok: false, error: "denegado" })).toBe("error: denegado");
    expect(describeOutcome({ ok: true, rows: 2 })).toBe("2 fila(s)");
    expect(describeOutcome()).toBe("resultado inesperado");
  });

  it("genera un vector de pgvector con las dimensiones de all-MiniLM-L6-v2 (384)", () => {
    const literal = buildVectorLiteral(384);
    expect(literal.startsWith("[") && literal.endsWith("]")).toBe(true);
    expect(literal.slice(1, -1).split(",")).toHaveLength(384);
    expect(() => buildVectorLiteral(0)).toThrow();
  });
});
