"use server";

import { encodedRedirect } from "@/utils/utils";
import { createClient } from "@/lib/supabase/server";
import { cookies, headers } from "next/headers";
import { redirect } from "next/navigation";
import nodemailer from "nodemailer";
import {
  contactFormSchema,
  type ContactFormData,
  sellCarSchema,
} from "@/lib/validations";
import { createServerClient } from "@supabase/ssr";
import type { UserData } from "@/lib/chatFlowTypes";

async function sendValuationEmail(
  data: {
    name: string;
    email: string;
    phone: string;
    brand: string;
    model: string;
    year: string;
    kilometers: string;
    fuel: string;
    comments?: string;
  },
  source: "Formulario Web" | "Chatbot" = "Formulario Web"
) {
  const transporter = nodemailer.createTransport({
    host: process.env.CORREO_HOST,
    port: Number(process.env.CORREO_PORT),
    secure: true,
    auth: {
      user: process.env.CORREO_USUARIO,
      pass: process.env.CORREO_PASS,
    },
  });

  const clientEmailHtml = `
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
              <div><strong>Lebauto</strong> © ${new Date().getFullYear()}</div>
            </div>
          </div>
        </body>
      </html>
      `;

  const companyEmailHtml = `
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

  await transporter.sendMail({
    from: process.env.CORREO_USUARIO,
    to: process.env.CORREO_USUARIO,
    subject: `Solicitud de tasación (${source}) - ${data.name}`,
    html: companyEmailHtml,
  });

  await transporter.sendMail({
    from: process.env.CORREO_USUARIO,
    to: data.email,
    subject: "Copia de tu solicitud de tasación",
    html: clientEmailHtml,
  });
}

export async function submitSellCarForm(_: any, formData: FormData) {
  const rawData = Object.fromEntries(formData.entries());
  const result = sellCarSchema.safeParse(rawData);

  if (!result.success) {
    return {
      success: false,
      message: "Por favor, revisa los campos del formulario.",
      errors: result.error.flatten().fieldErrors,
      submitting: false,
    };
  }

  try {
    await sendValuationEmail(result.data, "Formulario Web");
    return {
      success: true,
      message:
        "Solicitud enviada correctamente. Revisa tu correo para confirmar.",
      errors: {},
      submitting: false,
    };
  } catch (error) {
    console.error("Error al enviar email de tasación desde formulario:", error);
    return {
      success: false,
      message: "Error al enviar el formulario. Intenta más tarde.",
      errors: {},
      submitting: false,
    };
  }
}

export async function submitSellCarChatLead(userData: UserData) {
  if (
    !userData.name ||
    !userData.email ||
    !userData.phone ||
    !userData.brand ||
    !userData.model ||
    !userData.year ||
    !userData.kilometers ||
    !userData.fuel
  ) {
    console.error(
      "Faltan datos en el lead del chatbot para la tasación:",
      userData
    );
    return { success: false, message: "Faltan datos del lead." };
  }

  const valuationData = {
    name: userData.name,
    email: userData.email,
    phone: userData.phone,
    brand: userData.brand,
    model: userData.model,
    year: userData.year,
    kilometers: userData.kilometers,
    fuel: userData.fuel,
    comments: userData.comments || "Sin comentarios adicionales.",
  };

  try {
    await sendValuationEmail(valuationData, "Chatbot");
    return { success: true, message: "Email de tasación desde chat enviado." };
  } catch (error) {
    console.error("Error al enviar email de tasación desde chatbot:", error);
    return { success: false, message: "Error al enviar el email." };
  }
}

export async function submitPhoneValuationLead(userData: UserData) {
  if (!userData.name || !userData.phone || !userData.brand || !userData.model) {
    console.error("Faltan datos en el lead de tasación telefónica:", userData);
    return { success: false, message: "Faltan datos del lead." };
  }

  const transporter = nodemailer.createTransport({
    host: process.env.CORREO_HOST,
    port: Number(process.env.CORREO_PORT),
    secure: true,
    auth: {
      user: process.env.CORREO_USUARIO,
      pass: process.env.CORREO_PASS,
    },
  });

  const companyEmailHtml = `
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
                <tr><th>Nombre</th><td>${userData.name}</td></tr>
                <tr><th>Teléfono</th><td><strong>${userData.phone}</strong></td></tr>
                <tr><th>Marca</th><td>${userData.brand}</td></tr>
                <tr><th>Modelo</th><td>${userData.model}</td></tr>
              </table>
              <p><strong>Por favor, contactar con el cliente para completar la tasación.</strong></p>
            </div>
          </div>
        </body>
      </html>
    `;

  try {
    await transporter.sendMail({
      from: process.env.CORREO_USUARIO,
      to: process.env.CORREO_USUARIO,
      subject: `Solicitud de LLAMADA para tasación - ${userData.name}`,
      html: companyEmailHtml,
    });
    return {
      success: true,
      message: "Notificación de llamada para tasación enviada.",
    };
  } catch (error) {
    console.error("Error al enviar email de tasación telefónica:", error);
    return {
      success: false,
      message: "Error al enviar el email de notificación.",
    };
  }
}

export async function submitContactForm(data: ContactFormData) {
  const result = contactFormSchema.safeParse(data);

  if (!result.success) {
    return {
      success: false,
      message: "Los datos enviados no son válidos.",
      errors: result.error.flatten().fieldErrors,
      submitting: false,
    };
  }

  const validatedData = result.data;

  const transporter = nodemailer.createTransport({
    host: process.env.CORREO_HOST,
    port: Number(process.env.CORREO_PORT),
    secure: true,
    auth: {
      user: process.env.CORREO_USUARIO,
      pass: process.env.CORREO_PASS,
    },
  });
  // ------------------------------
  // PLANTILLA HTML PARA EL CLIENTE
  // ------------------------------
  const clientEmailHtml = `
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

  // ------------------------------
  // PLANTILLA HTML PARA LA EMPRESA
  // ------------------------------
  const companyEmailHtml = `
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

  try {
    await transporter.sendMail({
      from: process.env.CORREO_USUARIO,
      to: process.env.CORREO_USUARIO,
      subject: `Nueva Solicitud de Contacto - ${validatedData.name}`,
      html: companyEmailHtml,
    });
    await transporter.sendMail({
      from: process.env.CORREO_USUARIO,
      to: data.email,
      subject: "Confirmación de Contacto",
      html: clientEmailHtml,
    });
    return {
      success: true,
      message:
        "Gracias por contactarnos. Nos pondremos en contacto contigo lo antes posible.",
    };
  } catch (error) {
    console.error("Error al enviar el correo:", error);
    return {
      success: false,
      message: "Error al enviar el formulario. Intenta más tarde.",
    };
  }
}

// --- ACCIÓN PARA SOPORTE - SOLICITUD DE LLAMADA (LISTA PARA PRODUCCIÓN) ---
export async function submitSupportCallbackLead(userData: UserData) {
    if (!userData.name || !userData.phone || !userData.email || !userData.userQuestion) {
        console.error("Error en Server Action: Faltan datos en el lead de soporte por llamada.", { userName: userData.name });
        return { success: false, message: "Faltan datos para procesar la solicitud." };
    }

    try {
        const transporter = nodemailer.createTransport({
            host: process.env.CORREO_HOST,
            port: Number(process.env.CORREO_PORT),
            secure: true,
            auth: {
                user: process.env.CORREO_USUARIO,
                pass: process.env.CORREO_PASS,
            },
        });

        const companyEmailHtml = `
          <h1>Solicitud de Llamada de Soporte (Chatbot)</h1>
          <p>Un cliente ha solicitado una llamada para recibir soporte:</p>
          <ul>
            <li><strong>Nombre:</strong> ${userData.name}</li>
            <li><strong>Teléfono:</strong> ${userData.phone}</li>
            <li><strong>Email:</strong> ${userData.email}</li>
            <li><strong>Consulta inicial:</strong> ${userData.userQuestion}</li>
          </ul>`;

        const clientEmailHtml = `
          <h1>Confirmación de tu solicitud de llamada</h1>
          <p>Hola ${userData.name},</p>
          <p>Hemos recibido tu solicitud para que te llamemos sobre: "${userData.userQuestion}".</p>
          <p>Un miembro de nuestro equipo te contactará en el teléfono <strong>${userData.phone}</strong> lo antes posible.</p>
          <p>Gracias por contactar con Lebauto.</p>`;

        await Promise.all([
            transporter.sendMail({
                from: process.env.CORREO_USUARIO,
                to: process.env.CORREO_USUARIO,
                subject: `Soporte: Solicitud de LLAMADA de ${userData.name}`,
                html: companyEmailHtml,
            }),
            transporter.sendMail({
                from: process.env.CORREO_USUARIO,
                to: userData.email,
                subject: `Hemos recibido tu solicitud de llamada - Lebauto`,
                html: clientEmailHtml,
            })
        ]);

        return { success: true };

    } catch (error) {
        console.error("Error al enviar email de soporte (llamada):", error);
        return { success: false, message: "No se pudo enviar la notificación." };
    }
}

// --- ACCIÓN PARA SOPORTE - CONSULTA POR EMAIL (LISTA PARA PRODUCCIÓN) ---
export async function submitSupportEmailLead(userData: UserData) {
    if (!userData.name || !userData.email || !userData.userQuestion) {
        console.error("Error en Server Action: Faltan datos en el lead de soporte por email.", { userName: userData.name });
        return { success: false, message: "Faltan datos para procesar la solicitud." };
    }

    try {
        const transporter = nodemailer.createTransport({
            host: process.env.CORREO_HOST,
            port: Number(process.env.CORREO_PORT),
            secure: true,
            auth: {
                user: process.env.CORREO_USUARIO,
                pass: process.env.CORREO_PASS,
            },
        });

        const companyEmailHtml = `
          <h1>Nueva Consulta de Soporte por Email (Chatbot)</h1>
          <p>Un cliente ha enviado una consulta a través del chat:</p>
          <ul>
            <li><strong>Nombre:</strong> ${userData.name}</li>
            <li><strong>Email:</strong> ${userData.email}</li>
            <li><strong>Teléfono:</strong> ${userData.phone || 'No proporcionado'}</li>
            <li><strong>Consulta:</strong><br/><p style="white-space: pre-wrap;">${userData.userQuestion}</p></li>
          </ul>`;

        const clientEmailHtml = `
          <h1>Confirmación de tu consulta</h1>
          <p>Hola ${userData.name},</p>
          <p>Hemos recibido tu consulta y te responderemos al email <strong>${userData.email}</strong> lo antes posible.</p>
          <p><strong>Tu pregunta fue:</strong> "${userData.userQuestion}"</p>
          <p>Gracias por contactar con Lebauto.</p>`;

        await Promise.all([
            transporter.sendMail({
                from: process.env.CORREO_USUARIO,
                to: process.env.CORREO_USUARIO,
                subject: `Soporte: Nueva consulta de ${userData.name}`,
                html: companyEmailHtml,
            }),
            transporter.sendMail({
                from: process.env.CORREO_USUARIO,
                to: userData.email,
                subject: `Hemos recibido tu consulta - Lebauto`,
                html: clientEmailHtml,
            })
        ]);

        return { success: true };
        
    } catch (error) {
        console.error("Error al enviar email de soporte (email):", error);
        return { success: false, message: "No se pudo enviar la notificación." };
    }
}

export const signUpAction = async (formData: FormData) => {
  const email = formData.get("email")?.toString();
  const password = formData.get("password")?.toString();
  const supabase = await createClient();
  const origin = (await headers()).get("origin");

  if (!email || !password) {
    return encodedRedirect(
      "error",
      "/sign-up",
      "Email y contraseña son requeridos"
    );
  }

  const { error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      emailRedirectTo: `${origin}/auth/callback`,
    },
  });

  if (error) {
    console.error(error.code + " " + error.message);
    return encodedRedirect("error", "/sign-up", error.message);
  } else {
    return encodedRedirect(
      "success",
      "/sign-up",
      "Gracias por registrarte, te hemos enviado un email de confirmación"
    );
  }
};

export const signInAction = async (formData: FormData) => {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  const cookieStore = await cookies();

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll: () => cookieStore.getAll(),
        setAll: (cookiesToSet) => {
          cookiesToSet.forEach(({ name, value, options }) => {
            cookieStore.set(name, value, options);
          });
        },
      },
    }
  );

  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error || !data.session) {
    return encodedRedirect(
      "error",
      "/sign-in",
      error?.message || "Error en la autenticación"
    );
  }

  return redirect("/dashboard");
};

export const forgotPasswordAction = async (formData: FormData) => {
  const email = formData.get("email")?.toString();
  const supabase = await createClient();
  const origin = (await headers()).get("origin");
  const callbackUrl = formData.get("callbackUrl")?.toString();

  if (!email) {
    return encodedRedirect("error", "/forgot-password", "Email es requerido");
  }

  const { error } = await supabase.auth.resetPasswordForEmail(email, {
    redirectTo: `${origin}/auth/callback?redirect_to=/protected/reset-password`,
  });

  if (error) {
    console.error(error.message);
    return encodedRedirect(
      "error",
      "/forgot-password",
      "Fallo al restablecer la contraseña"
    );
  }

  if (callbackUrl) {
    return redirect(callbackUrl);
  }

  return encodedRedirect(
    "success",
    "/forgot-password",
    "Cheque su correo para restablecer la contraseña"
  );
};

export const resetPasswordAction = async (formData: FormData) => {
  const supabase = await createClient();

  const password = formData.get("password") as string;
  const confirmPassword = formData.get("confirmPassword") as string;

  if (!password || !confirmPassword) {
    encodedRedirect(
      "error",
      "/protected/reset-password",
      "Contraseña y confirmar contraseña son requeridos"
    );
  }

  if (password !== confirmPassword) {
    encodedRedirect(
      "error",
      "/protected/reset-password",
      "Las contraseñas no coinciden"
    );
  }

  const { error } = await supabase.auth.updateUser({
    password: password,
  });

  if (error) {
    encodedRedirect(
      "error",
      "/protected/reset-password",
      "Fallo al actualizar la contraseña"
    );
  }

  encodedRedirect("success", "/protected/reset-password", "Password updated");
};

export const signOutAction = async () => {
  const supabase = await createClient();
  await supabase.auth.signOut();
  return redirect("/sign-in");
};
