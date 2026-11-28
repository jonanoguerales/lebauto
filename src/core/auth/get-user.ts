import "server-only";
import { cache } from "react";
import type { User } from "@supabase/supabase-js";
import { createClient } from "@/core/supabase/server";

/**
 * Usuario autenticado de la petición actual, o `null` si no hay sesión válida.
 * Usa `auth.getUser()`, que valida el token contra Supabase Auth (detecta sesiones cerradas o revocadas),
 * como pide la skill supabase-best-practices §4. `cache` evita repetir la llamada en la misma petición.
 * Lee cookies: solo se usa en rutas dinámicas o Server Actions, nunca en páginas estáticas.
 */
export const getUser = cache(async (): Promise<User | null> => {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  return user;
});
