/** Lógica pura de scripts/make-admin.ts (spec 002, AC-9). Probada en admin-lib.test.ts. */

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/** Lee el email del primer argumento, lo normaliza (minúsculas, sin espacios) y lo valida. */
export function parseEmailArg(args: readonly string[]): string {
  const email = args.find((arg) => arg !== "--")?.trim().toLowerCase();
  if (!email) {
    throw new Error("Indica el email del usuario: pnpm db:make-admin persona@dominio.es");
  }
  if (!EMAIL_PATTERN.test(email)) {
    throw new Error("El email no tiene un formato válido.");
  }
  return email;
}
