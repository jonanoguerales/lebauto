import type { MailContent } from "../transporter";

// Soporte desde el chatbot: petición de llamada y consulta por email. AC-19, AC-20.
// HTML movido tal cual desde app/actions/actions.ts. Pendiente de escapar los datos del usuario (T-25).

export interface SupportCallbackData {
  name: string;
  phone: string;
  email: string;
  userQuestion: string;
}

export interface SupportEmailData {
  name: string;
  email: string;
  phone?: string;
  userQuestion: string;
}

/** Aviso al concesionario: el usuario pide que le llamen. */
export function supportCallbackCompanyEmail(data: SupportCallbackData): MailContent {
  const html = `
          <h1>Solicitud de Llamada de Soporte (Chatbot)</h1>
          <p>Un cliente ha solicitado una llamada para recibir soporte:</p>
          <ul>
            <li><strong>Nombre:</strong> ${data.name}</li>
            <li><strong>Teléfono:</strong> ${data.phone}</li>
            <li><strong>Email:</strong> ${data.email}</li>
            <li><strong>Consulta inicial:</strong> ${data.userQuestion}</li>
          </ul>`;
  return { subject: `Soporte: Solicitud de LLAMADA de ${data.name}`, html };
}

/** Confirmación para el usuario de la petición de llamada. */
export function supportCallbackClientEmail(data: SupportCallbackData): MailContent {
  const html = `
          <h1>Confirmación de tu solicitud de llamada</h1>
          <p>Hola ${data.name},</p>
          <p>Hemos recibido tu solicitud para que te llamemos sobre: "${data.userQuestion}".</p>
          <p>Un miembro de nuestro equipo te contactará en el teléfono <strong>${data.phone}</strong> lo antes posible.</p>
          <p>Gracias por contactar con Lebauto.</p>`;
  return { subject: "Hemos recibido tu solicitud de llamada - Lebauto", html };
}

/** Aviso al concesionario: consulta de soporte por email. */
export function supportEmailCompanyEmail(data: SupportEmailData): MailContent {
  const html = `
          <h1>Nueva Consulta de Soporte por Email (Chatbot)</h1>
          <p>Un cliente ha enviado una consulta a través del chat:</p>
          <ul>
            <li><strong>Nombre:</strong> ${data.name}</li>
            <li><strong>Email:</strong> ${data.email}</li>
            <li><strong>Teléfono:</strong> ${data.phone || 'No proporcionado'}</li>
            <li><strong>Consulta:</strong><br/><p style="white-space: pre-wrap;">${data.userQuestion}</p></li>
          </ul>`;
  return { subject: `Soporte: Nueva consulta de ${data.name}`, html };
}

/** Confirmación para el usuario de su consulta. */
export function supportEmailClientEmail(data: SupportEmailData): MailContent {
  const html = `
          <h1>Confirmación de tu consulta</h1>
          <p>Hola ${data.name},</p>
          <p>Hemos recibido tu consulta y te responderemos al email <strong>${data.email}</strong> lo antes posible.</p>
          <p><strong>Tu pregunta fue:</strong> "${data.userQuestion}"</p>
          <p>Gracias por contactar con Lebauto.</p>`;
  return { subject: "Hemos recibido tu consulta - Lebauto", html };
}
