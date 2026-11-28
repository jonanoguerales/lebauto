"use server";

import { encodedRedirect } from "@/utils/utils";
import { createClient } from "@/core/supabase/server";
import { getPublicEnv } from "@/core/env.public";
import { cookies, headers } from "next/headers";
import { redirect } from "next/navigation";
import { toSafeInternalPath } from "@/utils/safeInternalPath";
import {
  contactFormSchema,
  type ContactFormData,
  sellCarSchema,
} from "@/lib/validations";
import { createServerClient } from "@supabase/ssr";
import {
  sendMail,
  sendCompanyMail,
  valuationCompanyEmail,
  valuationClientEmail,
  phoneValuationCompanyEmail,
  contactCompanyEmail,
  contactClientEmail,
  supportCallbackCompanyEmail,
  supportCallbackClientEmail,
  supportEmailCompanyEmail,
  supportEmailClientEmail,
  type ValuationData,
  type ValuationSource,
} from "@/core/mail";
import type { UserData } from "@/lib/chatFlowTypes";
import type { SellCarFormState } from "@/lib/definitions";

// Los emails se construyen y envían dentro del `try` de cada acción: si falta la configuración de correo
// (CORREO_*), `core/mail` lanza y el usuario ve el mismo mensaje genérico que cuando falla el envío.
async function sendValuationEmail(
  data: ValuationData,
  source: ValuationSource = "Formulario Web"
) {
  await sendCompanyMail(valuationCompanyEmail(data, source));
  await sendMail({ to: data.email, ...valuationClientEmail(data) });
}

export async function submitSellCarForm(
  _prevState: SellCarFormState,
  formData: FormData
): Promise<SellCarFormState> {
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

  try {
    await sendCompanyMail(
      phoneValuationCompanyEmail({
        name: userData.name,
        phone: userData.phone,
        brand: userData.brand,
        model: userData.model,
      })
    );
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

  try {
    await sendCompanyMail(contactCompanyEmail(validatedData));
    await sendMail({ to: validatedData.email, ...contactClientEmail() });
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
        const data = {
            name: userData.name,
            phone: userData.phone,
            email: userData.email,
            userQuestion: userData.userQuestion,
        };
        await Promise.all([
            sendCompanyMail(supportCallbackCompanyEmail(data)),
            sendMail({ to: data.email, ...supportCallbackClientEmail(data) }),
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
        const data = {
            name: userData.name,
            email: userData.email,
            phone: userData.phone,
            userQuestion: userData.userQuestion,
        };
        await Promise.all([
            sendCompanyMail(supportEmailCompanyEmail(data)),
            sendMail({ to: data.email, ...supportEmailClientEmail(data) }),
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

  const env = getPublicEnv();
  // Cliente propio del login: guarda las cookies con sus opciones completas (el de core/supabase/server
  // las convierte en cookies de sesión). Pasa al pod sign-in en su tarea.
  const supabase = createServerClient(
    env.NEXT_PUBLIC_SUPABASE_URL,
    env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY,
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

  // Solo rutas internas (D-15); la validación completa de redirects es T-17.
  const safeCallback = toSafeInternalPath(callbackUrl);
  if (safeCallback) {
    return redirect(safeCallback);
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
