import type { MailContent } from "../transporter";

// Formulario de contacto (/contacto). AC-16.
// HTML movido tal cual desde app/actions/actions.ts. Pendiente de escapar los datos del usuario (T-25).

export interface ContactData {
  name: string;
  surnames: string;
  email: string;
  phone: string;
  message: string;
}

/** Aviso al concesionario con los datos del contacto. */
export function contactCompanyEmail(data: ContactData): MailContent {
  const html = `
  <!DOCTYPE html>
  <html>
    <head>
      <meta charset="UTF-8">
      <title>Nueva Solicitud de Contacto</title>
      <style>
        body { font-family: Arial, sans-serif; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #ddd; border-radius: 8px; }
        .header { background-color: #1d4ed8; color: #fff; padding: 20px; text-align: center; border-radius: 8px 8px 0 0; }
        .content { padding: 20px; }
        table { width: 100%; border-collapse: collapse; }
        th, td { text-align: left; padding: 10px; border-bottom: 1px solid #eee; }
        th { width: 120px; font-weight: bold; background-color: #f9f9f9; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header"><h1>Nueva Solicitud de Contacto</h1></div>
        <div class="content">
          <p>Se ha recibido la siguiente solicitud:</p>
          <table>
            <tr><th>Nombre</th><td>${data.name}</td></tr>
            <tr><th>Apellidos</th><td>${data.surnames}</td></tr>
            <tr><th>Email</th><td>${data.email}</td></tr>
            <tr><th>Teléfono</th><td>${data.phone}</td></tr>
            <tr><th>Mensaje</th><td><p style="white-space: pre-wrap;">${data.message}</p></td></tr>
          </table>
        </div>
      </div>
    </body>
  </html>
  `;
  return { subject: `Nueva Solicitud de Contacto - ${data.name}`, html };
}

/** Confirmación para el usuario (no incluye sus datos). */
export function contactClientEmail(): MailContent {
  const html = `
  <!DOCTYPE html>
  <html>
    <head>
      <meta charset="UTF-8">
      <title>Confirmación de Contacto</title>
      <style>
        body { font-family: Arial, sans-serif; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background-color: #008060; color: #fff; padding: 10px; text-align: center; }
        .content { padding: 20px; }
        .footer {
          margin-top: 20px;
          font-size: 12px;
          text-align: center;
          color: #777;
          border-top: 1px solid #ddd;          
        }
      </style>    
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>Confirmación de Contacto</h1>
        </div>
        <div class="content">
          <p>Gracias por contactarnos. Nos pondremos en contacto contigo lo antes posible.</p>
        </div>
        <div class="footer">
          <p>Por favor, no respondas a este mensaje. Si deseas contactar con nosotros, hazlo a través de <a href="mailto:info@lebauto.es">info@lebauto.es</a>.</p>
          <div><strong>Lebauto</strong></div>
          <div>© 2025 Lebauto, S.L.</div>
        </div>
      </div>
    </body>
  </html>
  `;
  return { subject: "Confirmación de Contacto", html };
}
