import { describe, expect, it } from "vitest";
import { parseServerEnv, requireServerEnv } from "./env";
import { publicEnvSchema } from "./env.public";

// T-05a · Centraliza la configuración que necesitan el login y el dashboard (AC-23, AC-29) y el resto de la app.
const base = {
  NEXT_PUBLIC_SUPABASE_URL: "https://demo.supabase.co",
  NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY: "sb_publishable_demo",
};

describe("core/env (AC-23, AC-29)", () => {
  it("acepta un entorno completo y convierte CORREO_PORT a número", () => {
    const env = parseServerEnv({
      ...base,
      NEXT_PUBLIC_SITE_URL: "https://lebauto.es",
      HUGGINGFACE_API_KEY: "hf_x",
      OPENROUTER_API_KEY: "sk-or-x",
      CORREO_HOST: "smtp.example.com",
      CORREO_PORT: "465",
      CORREO_USUARIO: "info@example.com",
      CORREO_PASS: "secret",
    });
    expect(env.CORREO_PORT).toBe(465);
    expect(env.NEXT_PUBLIC_SITE_URL).toBe("https://lebauto.es");
  });

  it("no falla si faltan las claves opcionales de IA y correo", () => {
    const env = parseServerEnv({ ...base, CORREO_HOST: "", NEXT_PUBLIC_SITE_URL: "" });
    expect(env.HUGGINGFACE_API_KEY).toBeUndefined();
    expect(env.CORREO_HOST).toBeUndefined();
    expect(env.CORREO_PORT).toBeUndefined();
    expect(env.NEXT_PUBLIC_SITE_URL).toBeUndefined();
  });

  it("falla con un mensaje que nombra las claves obligatorias que faltan", () => {
    expect(() => parseServerEnv({})).toThrow(/NEXT_PUBLIC_SUPABASE_URL/);
    expect(() => parseServerEnv({})).toThrow(/NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY/);
  });

  it("rechaza valores con formato incorrecto", () => {
    expect(() => parseServerEnv({ ...base, NEXT_PUBLIC_SUPABASE_URL: "no-es-url" })).toThrow(
      /NEXT_PUBLIC_SUPABASE_URL/
    );
    expect(() => parseServerEnv({ ...base, CORREO_PORT: "abc" })).toThrow(/CORREO_PORT/);
  });

  it("requireServerEnv da un error claro solo cuando se pide una clave ausente", () => {
    const env = parseServerEnv({ ...base, OPENROUTER_API_KEY: "sk-or-x" });
    expect(requireServerEnv("OPENROUTER_API_KEY", env)).toBe("sk-or-x");
    expect(() => requireServerEnv("HUGGINGFACE_API_KEY", env)).toThrow(
      "Falta la variable de entorno HUGGINGFACE_API_KEY"
    );
  });

  it("el esquema público solo exige las variables de Supabase", () => {
    expect(publicEnvSchema.safeParse(base).success).toBe(true);
    expect(publicEnvSchema.safeParse({ NEXT_PUBLIC_SUPABASE_URL: base.NEXT_PUBLIC_SUPABASE_URL }).success).toBe(
      false
    );
  });
});
