"use server"

import { encodedRedirect } from "@/utils/utils";
import { createClient } from "@/supabase/server";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import nodemailer from "nodemailer";
import { contactFormSchema, sellCarSchema } from "@/lib/validations";
import path from "path";

export async function submitSellCarForm(_: any, formData: FormData) {
  const rawData = Object.fromEntries(formData.entries())
  const result = sellCarSchema.safeParse(rawData)

  if (!result.success) {
    return {
      success: false,
      message: "Por favor, revisa los campos del formulario.",
      errors: result.error.flatten().fieldErrors,
      submitting: false,
    }
  }

  const data = result.data

  const transporter = nodemailer.createTransport({
    host: process.env.CORREO_HOST,
    port: Number(process.env.CORREO_PORT),
    secure: true,
    auth: {
      user: process.env.CORREO_USUARIO,
      pass: process.env.CORREO_PASS,
    },
  })

  // ------------------------------
  // PLANTILLA HTML PARA EL CLIENTE
  // ------------------------------
  const clientEmailHtml = `
  <!DOCTYPE html>
  <html>
    <head>
      <meta charset="UTF-8">
      <title>Copia de tu Solicitud de Tasación</title>
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
          padding-top: 20px;
        }
        table { width: 100%; border-collapse: collapse; }
        th, td { text-align: left; padding: 8px; border-bottom: 1px solid #ddd; }
        .logo {
          width: 80px;
          margin-bottom: 5px;
        }
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
            <tr><th>Comentarios</th><td>${data.comments || '-'}</td></tr>
          </table>
          <p>En breves momentos nos pondremos en contacto contigo para ofrecerte una valoración personalizada.</p>
        </div>
        <div class="footer">
          <p>Por favor, no respondas a este mensaje. Si deseas contactar con nosotros, hazlo a través de <a href="mailto:info@lebauto.es">info@lebauto.es</a>.</p>
          <img src="cid:lebautoLogo" alt="Lebauto Logo" class="logo" />
          <div><strong>Lebauto</strong></div>
          <div>© 2025 Lebauto, S.L.</div>
        </div>
      </div>
    </body>
  </html>
  `

  // ------------------------------
  // PLANTILLA HTML PARA LA EMPRESA
  // ------------------------------
  const companyEmailHtml = `
  <!DOCTYPE html>
  <html>
    <head>
      <meta charset="UTF-8">
      <title>Nueva Solicitud de Tasación</title>
      <style>
        body { font-family: Arial, sans-serif; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background-color: #004080; color: #fff; padding: 10px; text-align: center; }
        .content { padding: 20px; }
        .footer { margin-top: 20px; font-size: 12px; text-align: center; color: #777; }
        table { width: 100%; border-collapse: collapse; }
        th, td { text-align: left; padding: 8px; border-bottom: 1px solid #ddd; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>Nueva Solicitud de Tasación</h1>
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
            <tr><th>Comentarios</th><td>${data.comments || '-'}</td></tr>
          </table>
        </div>
        <div class="footer">
          <p>Este correo es confidencial y para uso interno.</p>
        </div>
      </div>
    </body>
  </html>
  `

  try {
    await transporter.sendMail({
      from: process.env.CORREO_USUARIO,
      to: process.env.CORREO_USUARIO,
      subject: `Solicitud de tasación de coche - ${data.name}`,
      html: companyEmailHtml,
    })

    await transporter.sendMail({
      from: process.env.CORREO_USUARIO,
      to: data.email,
      subject: "Copia de tu solicitud de tasación",
      html: clientEmailHtml,
      attachments: [
        {
          filename: "logo.webp",
          path: path.join(process.cwd(), "public", "logo.webp"),
          cid: "lebautoLogo",
        },
      ],
    })

    return {
      success: true,
      message: "Solicitud enviada correctamente. Revisa tu correo para confirmar.",
      errors: {},
      submitting: false,
    }
  } catch (error: any) {
    return {
      success: false,
      message: "Error al enviar el formulario. Intenta más tarde.",
      errors: {},
      submitting: false,
    }
  }
}

export async function submitContactForm(_: any, formData: FormData) {
  const rawData = Object.fromEntries(formData.entries())
  const result = contactFormSchema.safeParse(rawData)

  if (!result.success) {
    return {
      success: false,
      message: "Por favor, revisa los campos del formulario.",
      errors: result.error.flatten().fieldErrors,
      submitting: false,
    }
  }

  const data = result.data

  const transporter = nodemailer.createTransport({
    host: process.env.CORREO_HOST,
    port: Number(process.env.CORREO_PORT),
    secure: true,
    auth: {
      user: process.env.CORREO_USUARIO,
      pass: process.env.CORREO_PASS,
    },
  })

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
          <img src="cid:lebautoLogo" alt="Lebauto Logo" class="logo" />
          <div><strong>Lebauto</strong></div>
          <div>© 2025 Lebauto, S.L.</div>
        </div>
      </div>
    </body>
  </html>
  `
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
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background-color: #004080; color: #fff; padding: 10px; text-align: center; }
        .content { padding: 20px; }        
        .footer {
          margin-top: 20px;
          font-size: 12px;
          text-align: center;
          color: #777;
          border-top: 1px solid #ddd;
          padding-top: 20px;
        }
        table { width: 100%; border-collapse: collapse; }
        th, td { text-align: left; padding: 8px; border-bottom: 1px solid #ddd; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>Nueva Solicitud de Contacto</h1>
        </div>
        <div class="content">
          <p>Se ha recibido la siguiente solicitud:</p>
          <table>
            <tr><th>Nombre</th><td>${data.name}</td></tr>
            <tr><th>Apellidos</th><td>${data.surnames}</td></tr>
            <tr><th>Email</th><td>${data.email}</td></tr>
            <tr><th>Teléfono</th><td>${data.phone || '-'}</td></tr>            
            <tr><th>Mensaje</th><td>${data.message}</td></tr>
          </table>
        </div>        
        <div class="footer">
          <p>Este correo es confidencial y para uso interno.</p>
        </div>
      </div>
    </body>
  </html>
  `

  try {
    await transporter.sendMail({
      from: process.env.CORREO_USUARIO,
      to: process.env.CORREO_USUARIO,
      subject: "Nueva Solicitud de Contacto",
      html: companyEmailHtml,
    })
    await transporter.sendMail({
      from: process.env.CORREO_USUARIO,
      to: data.email,
      subject: "Confirmación de Contacto",
      html: clientEmailHtml,
      attachments: [
        {
          filename: "logo.webp",
          path: path.join(process.cwd(), "public", "logo.webp"),
          cid: "lebautoLogo",
        },
      ],
    })
    return {
      success: true,
      message: "Gracias por contactarnos. Nos pondremos en contacto contigo lo antes posible.",
      errors: {},
      submitting: false,
    }
  } catch (error) {
    console.error("Error al enviar el correo:", error)
    return {
      success: false,
      message: "Error al enviar el formulario. Intenta más tarde.",
      errors: {},
      submitting: false,
    }
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
      "Email y contraseña son requeridos",
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
      "Gracias por registrarte, te hemos enviado un email de confirmación",
    );
  }
};

export const signInAction = async (formData: FormData) => {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;
  const supabase = await createClient();

  const { error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    return encodedRedirect("error", "/sign-in", error.message);
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
      "Fallo al restablecer la contraseña",
    );
  }

  if (callbackUrl) {
    return redirect(callbackUrl);
  }

  return encodedRedirect(
    "success",
    "/forgot-password",
    "Cheque su correo para restablecer la contraseña",
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
      "Contraseña y confirmar contraseña son requeridos",
    );
  }

  if (password !== confirmPassword) {
    encodedRedirect(
      "error",
      "/protected/reset-password",
      "Las contraseñas no coinciden",
    );
  }

  const { error } = await supabase.auth.updateUser({
    password: password,
  });

  if (error) {
    encodedRedirect(
      "error",
      "/protected/reset-password",
      "Fallo al actualizar la contraseña",
    );
  }

  encodedRedirect("success", "/protected/reset-password", "Password updated");
};

export const signOutAction = async () => {
  const supabase = await createClient();
  await supabase.auth.signOut();
  return redirect("/sign-in");
};

