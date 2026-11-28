import type { MailContent } from "../transporter";

// Solicitud de tasación (vender tu coche): formulario web y flujo del chatbot. AC-15, AC-20.
// HTML movido tal cual desde app/actions/actions.ts. Pendiente de escapar los datos del usuario (T-25).

export interface ValuationData {
  name: string;
  email: string;
  phone: string;
  brand: string;
  model: string;
  year: string;
  kilometers: string;
  fuel: string;
  comments?: string;
}

export type ValuationSource = "Formulario Web" | "Chatbot";

/** Aviso al concesionario con los datos de la tasación. */
export function valuationCompanyEmail(data: ValuationData, source: ValuationSource): MailContent {
  const html = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="UTF-8">
          <title>Nueva Solicitud de Tasación (${source})</title>
          <style>
            body { font-family: Arial, sans-serif; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #ddd; border-radius: 8px; }
            .header { background-color: #1d4ed8; color: #fff; padding: 10px; text-align: center; border-radius: 8px 8px 0 0; }
            h1 { margin: 0; }
            .content { padding: 20px; }
            .footer { margin-top: 20px; font-size: 12px; text-align: center; color: #777; }
            table { width: 100%; border-collapse: collapse; }
            th, td { text-align: left; padding: 10px; border-bottom: 1px solid #eee; }
            th { width: 120px; background-color: #f9f9f9; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>Nueva Solicitud de Tasación (desde ${source})</h1>
            </div>
            <div class="content">
              <p>Se ha recibido la siguiente solicitud:</p>
              <table>
                <tr><th>Nombre</th><td>${data.name}</td></tr>
                <tr><th>Email</th><td>${data.email}</td></tr>
                <tr><th>Teléfono</th><td>${data.phone}</td></tr>
                <tr><th>Marca</th><td>${data.brand}</td></tr>
                <tr><th>Modelo</th><td>${data.model}</td></tr>
                <tr><th>Año</th><td>${data.year}</td></tr>
                <tr><th>Kilómetros</th><td>${data.kilometers}</td></tr>
                <tr><th>Combustible</th><td>${data.fuel}</td></tr>
                <tr><th>Comentarios</th><td>${data.comments || "-"}</td></tr>
              </table>
            </div>
            <div class="footer"><p>Este correo es confidencial y para uso interno.</p></div>
          </div>
        </body>
      </html>
      `;
  return { subject: `Solicitud de tasación (${source}) - ${data.name}`, html };
}

/** Copia de la solicitud para el usuario. `now` solo fija el año del pie (para los tests). */
export function valuationClientEmail(data: ValuationData, now: Date = new Date()): MailContent {
  const html = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="UTF-8">
          <title>Copia de tu Solicitud de Tasación</title>
          <style>
            body { font-family: Arial, sans-serif; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #ddd; border-radius: 8px; }
            .header { background-color: #111827; color: #fff; padding: 20px; text-align: center; border-radius: 8px 8px 0 0; }
            .content { padding: 20px; }
            .footer { margin-top: 20px; font-size: 12px; text-align: center; color: #777; }
            table { width: 100%; border-collapse: collapse; }
            th, td { text-align: left; padding: 10px; border-bottom: 1px solid #eee; }
            th { width: 120px; color: #555; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>Confirmación de Solicitud de Tasación</h1>
            </div>
            <div class="content">
              <p>Hola ${data.name},</p>
              <p>Gracias por contactarnos. Hemos recibido tu solicitud de tasación de vehículo. Aquí tienes una copia de los datos que enviaste:</p>
              <table>
                <tr><th>Nombre</th><td>${data.name}</td></tr>
                <tr><th>Email</th><td>${data.email}</td></tr>
                <tr><th>Teléfono</th><td>${data.phone}</td></tr>
                <tr><th>Marca</th><td>${data.brand}</td></tr>
                <tr><th>Modelo</th><td>${data.model}</td></tr>
                <tr><th>Año</th><td>${data.year}</td></tr>
                <tr><th>Kilómetros</th><td>${data.kilometers}</td></tr>
                <tr><th>Combustible</th><td>${data.fuel}</td></tr>
                <tr><th>Comentarios</th><td>${data.comments || "-"}</td></tr>
              </table>
              <p>En breves momentos nos pondremos en contacto contigo para ofrecerte una valoración personalizada.</p>
            </div>
            <div class="footer">
              <p>Por favor, no respondas a este mensaje. Si deseas contactar con nosotros, hazlo a través de <a href="mailto:info@lebauto.es">info@lebauto.es</a>.</p>
              <div><strong>Lebauto</strong> © ${now.getFullYear()}</div>
            </div>
          </div>
        </body>
      </html>
      `;
  return { subject: "Copia de tu solicitud de tasación", html };
}
