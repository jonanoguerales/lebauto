import "server-only";
import nodemailer, { type Transporter } from "nodemailer";
import { getServerEnv, requireServerEnv } from "@/core/env";

/** Lo que devuelve cada plantilla de `core/mail/templates`. */
export interface MailContent {
  subject: string;
  html: string;
}

export interface MailMessage extends MailContent {
  to: string;
}

interface Mailer {
  transporter: Transporter;
  /** Buzón del concesionario: remitente de todos los emails y destinatario de los avisos internos. */
  inbox: string;
}

let mailer: Mailer | undefined;

// Un único transporter, creado en el primer envío (no al importar el módulo). Si falta alguna variable
// CORREO_*, `requireServerEnv` lanza y no se guarda nada: la Server Action lo captura y muestra su error genérico.
function getMailer(): Mailer {
  if (mailer) return mailer;
  const env = getServerEnv();
  const inbox = requireServerEnv("CORREO_USUARIO", env);
  const transporter = nodemailer.createTransport(
    {
      host: requireServerEnv("CORREO_HOST", env),
      port: requireServerEnv("CORREO_PORT", env),
      secure: true,
      auth: { user: inbox, pass: requireServerEnv("CORREO_PASS", env) },
    },
    { from: inbox }
  );
  mailer = { transporter, inbox };
  return mailer;
}

/** Envía un email a `to` desde el buzón del concesionario. */
export async function sendMail({ to, subject, html }: MailMessage): Promise<void> {
  await getMailer().transporter.sendMail({ to, subject, html });
}

/** Envía un aviso interno al buzón del concesionario (CORREO_USUARIO). */
export async function sendCompanyMail({ subject, html }: MailContent): Promise<void> {
  const { transporter, inbox } = getMailer();
  await transporter.sendMail({ to: inbox, subject, html });
}
