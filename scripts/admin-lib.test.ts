import { describe, expect, it } from "vitest";
import { parseEmailArg } from "./admin-lib";

describe("002 · AC-9 · email del comando db:make-admin", () => {
  it("normaliza el email (minúsculas y sin espacios)", () => {
    expect(parseEmailArg(["  Admin@Lebauto.ES "])).toBe("admin@lebauto.es");
  });

  it("ignora el separador «--» que añade pnpm", () => {
    expect(parseEmailArg(["--", "admin@lebauto.es"])).toBe("admin@lebauto.es");
  });

  it("falla con un mensaje claro si falta el email o no es válido", () => {
    expect(() => parseEmailArg([])).toThrow(/Indica el email/);
    expect(() => parseEmailArg(["no-es-un-email"])).toThrow(/formato válido/);
  });
});
