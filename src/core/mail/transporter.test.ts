import { beforeEach, describe, expect, it, vi } from "vitest";

// T-05b · Un único transporter para todos los emails de leads, contacto y venta (AC-15, AC-16, AC-20).
const nodemailerMock = vi.hoisted(() => {
  const sendMail = vi.fn().mockResolvedValue({ messageId: "test" });
  const createTransport = vi.fn(() => ({ sendMail }));
  return { sendMail, createTransport };
});

vi.mock("nodemailer", () => ({
  default: { createTransport: nodemailerMock.createTransport },
}));

const mailEnv = {
  NEXT_PUBLIC_SUPABASE_URL: "https://demo.supabase.co",
  NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY: "sb_publishable_demo",
  CORREO_HOST: "smtp.example.com",
  CORREO_PORT: "465",
  CORREO_USUARIO: "info@example.com",
  CORREO_PASS: "secret",
};

// `core/env` y `core/mail` guardan su estado en el módulo: cada test los carga de cero con su entorno.
async function loadMail(env: Record<string, string>) {
  vi.resetModules();
  vi.unstubAllEnvs();
  for (const key of ["CORREO_HOST", "CORREO_PORT", "CORREO_USUARIO", "CORREO_PASS"]) {
    vi.stubEnv(key, "");
  }
  for (const [key, value] of Object.entries(env)) vi.stubEnv(key, value);
  return import("./transporter");
}

describe("core/mail · sendMail (AC-15, AC-16, AC-20)", () => {
  beforeEach(() => {
    nodemailerMock.createTransport.mockClear();
    nodemailerMock.sendMail.mockClear();
  });

  it("crea un solo transporter para varios envíos, con la configuración CORREO_*", async () => {
    const { sendMail, sendCompanyMail } = await loadMail(mailEnv);

    await sendMail({ to: "cliente@example.com", subject: "A", html: "<p>a</p>" });
    await sendCompanyMail({ subject: "B", html: "<p>b</p>" });
    await sendMail({ to: "otro@example.com", subject: "C", html: "<p>c</p>" });

    expect(nodemailerMock.createTransport).toHaveBeenCalledTimes(1);
    expect(nodemailerMock.createTransport).toHaveBeenCalledWith(
      {
        host: "smtp.example.com",
        port: 465,
        secure: true,
        auth: { user: "info@example.com", pass: "secret" },
      },
      { from: "info@example.com" }
    );
    expect(nodemailerMock.sendMail).toHaveBeenCalledTimes(3);
  });

  it("sendMail envía al destinatario indicado y sendCompanyMail al buzón del concesionario", async () => {
    const { sendMail, sendCompanyMail } = await loadMail(mailEnv);

    await sendMail({ to: "cliente@example.com", subject: "Copia", html: "<p>copia</p>" });
    await sendCompanyMail({ subject: "Aviso", html: "<p>aviso</p>" });

    expect(nodemailerMock.sendMail).toHaveBeenNthCalledWith(1, {
      to: "cliente@example.com",
      subject: "Copia",
      html: "<p>copia</p>",
    });
    expect(nodemailerMock.sendMail).toHaveBeenNthCalledWith(2, {
      to: "info@example.com",
      subject: "Aviso",
      html: "<p>aviso</p>",
    });
  });

  it("si falta una variable de correo rechaza sin crear el transporter ni enviar nada", async () => {
    const { sendMail, sendCompanyMail } = await loadMail({ ...mailEnv, CORREO_PASS: "" });

    await expect(sendMail({ to: "a@example.com", subject: "s", html: "h" })).rejects.toThrow(
      /CORREO_PASS/
    );
    await expect(sendCompanyMail({ subject: "s", html: "h" })).rejects.toThrow(/CORREO_PASS/);
    expect(nodemailerMock.createTransport).not.toHaveBeenCalled();
    expect(nodemailerMock.sendMail).not.toHaveBeenCalled();
  });
});
