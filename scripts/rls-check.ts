/** Pure helpers for scripts/check-rls.ts (tested in rls-check.test.ts). Spec 002, AC-5. */

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

/** Resultado de intentar una consulta como un rol: filas devueltas/afectadas o el error de Postgres. */
export type QueryOutcome = { ok: true; rows: number } | { ok: false; error: string };

/** Una operación está bloqueada si Postgres la rechaza (permiso o RLS) o si no afecta a ninguna fila. */
export function isBlocked(outcome: QueryOutcome): boolean {
  return !outcome.ok || outcome.rows === 0;
}

/** Una operación está permitida si no falla y devuelve o afecta al menos a `minRows` filas. */
export function isAllowed(outcome: QueryOutcome, minRows = 1): boolean {
  return outcome.ok && outcome.rows >= minRows;
}

/** Vector literal de pgvector (`[x,y,…]`) con `dimensions` componentes iguales a `value`. */
export function buildVectorLiteral(dimensions: number, value = 0.1): string {
  if (!Number.isInteger(dimensions) || dimensions <= 0) throw new Error("Dimensiones no válidas.");
  return `[${Array.from({ length: dimensions }, () => value).join(",")}]`;
}

/** Texto del detalle de una comprobación fallida. */
export function describeOutcome(outcome?: QueryOutcome): string {
  if (!outcome) return "resultado inesperado";
  return outcome.ok ? `${outcome.rows} fila(s)` : `error: ${outcome.error}`;
}
