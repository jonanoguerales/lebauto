import type { MailContent } from "../transporter";

// Petición de llamada para tasar el coche (flujo del chatbot). AC-20.
// HTML movido tal cual desde app/actions/actions.ts. Pendiente de escapar los datos del usuario (T-25).

export interface PhoneValuationData {
  name: string;
  phone: string;
  brand: string;
  model: string;
}

/** Aviso al concesionario para que llame al usuario. */
export function phoneValuationCompanyEmail(data: PhoneValuationData): MailContent {
  const html = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="UTF-8">
          <title>Solicitud de Tasación Telefónica (Chatbot)</title>
          <style>
            body { font-family: Arial, sans-serif; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #ddd; border-radius: 8px; }
            .header { background-color: #f97316; color: #fff; padding: 10px; text-align: center; border-radius: 8px 8px 0 0; }
            h1 { margin: 0; }
            .content { padding: 20px; }
            table { width: 100%; border-collapse: collapse; }
            th, td { text-align: left; padding: 10px; border-bottom: 1px solid #eee; }
            th { width: 120px; background-color: #f9f9f9; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>Solicitud de Tasación Telefónica (Chatbot)</h1>
            </div>
            <div class="content">
              <p>Un usuario ha solicitado una llamada para tasar su vehículo:</p>
              <table>
                <tr><th>Nombre</th><td>${data.name}</td></tr>
                <tr><th>Teléfono</th><td><strong>${data.phone}</strong></td></tr>
                <tr><th>Marca</th><td>${data.brand}</td></tr>
                <tr><th>Modelo</th><td>${data.model}</td></tr>
              </table>
              <p><strong>Por favor, contactar con el cliente para completar la tasación.</strong></p>
            </div>
          </div>
        </body>
      </html>
    `;
  return { subject: `Solicitud de LLAMADA para tasación - ${data.name}`, html };
}
