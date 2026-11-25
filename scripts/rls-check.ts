/** Pure helpers for scripts/check-rls.ts (tested in rls-check.test.ts). */

export type DbRole = "authenticated" | "anon";

/** JWT claims as PostgREST exposes them to Postgres in `request.jwt.claims` (read by auth.uid()). */
export function buildJwtClaims(role: DbRole, sub?: string): string {
  return JSON.stringify(sub ? { sub, role } : { role });
}

export interface CheckResult {
  name: string;
  passed: boolean;
  detail: string;
}

/** Builds a check result comparing what happened with what was expected. */
export function expectCheck(name: string, actual: unknown, expected: unknown): CheckResult {
  const passed = Object.is(actual, expected);
  return {
    name,
    passed,
    detail: passed ? `ok (${String(actual)})` : `esperado ${String(expected)}, obtenido ${String(actual)}`,
  };
}

/** Text report plus overall result. */
export function summarizeChecks(results: CheckResult[]): { ok: boolean; report: string } {
  const lines = results.map((r) => `${r.passed ? "PASA " : "FALLA"} · ${r.name} — ${r.detail}`);
  const failed = results.filter((r) => !r.passed).length;
  lines.push(
    failed === 0
      ? `\nRLS verificada: ${results.length}/${results.length} comprobaciones correctas.`
      : `\nRLS con fallos: ${failed} de ${results.length} comprobaciones fallan.`,
  );
  return { ok: failed === 0 && results.length > 0, report: lines.join("\n") };
}
