import { describe, expect, it } from "vitest";
import { buildJwtClaims, expectCheck, summarizeChecks } from "./rls-check";

describe("T-02 · AC-10 · utilidades de la verificación de RLS", () => {
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
});
