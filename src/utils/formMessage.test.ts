import { describe, expect, it } from "vitest";
import { toFormMessage } from "./formMessage";

// T-02a AC-2: la página /sign-in lee sus searchParams tipados con PageProps y los convierte en un Message.
describe("toFormMessage (T-02a AC-2)", () => {
  it("devuelve el error que deja encodedRedirect", () => {
    expect(toFormMessage({ error: "Credenciales incorrectas" })).toEqual({ error: "Credenciales incorrectas" });
  });

  it("devuelve success y message", () => {
    expect(toFormMessage({ success: "Hecho" })).toEqual({ success: "Hecho" });
    expect(toFormMessage({ message: "Revisa tu correo" })).toEqual({ message: "Revisa tu correo" });
  });

  it("devuelve null sin mensaje o con valores repetidos", () => {
    expect(toFormMessage({})).toBeNull();
    expect(toFormMessage({ error: ["a", "b"] })).toBeNull();
    expect(toFormMessage({ otro: "x" })).toBeNull();
  });
});
