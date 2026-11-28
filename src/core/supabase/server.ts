import "server-only";
import { createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";
import { getPublicEnv } from "@/core/env.public";

// Cliente de servidor (Server Components, Server Actions y route handlers): lee la sesión de las cookies.

export const createClient = async () => {
  const cookieStore = await cookies();
  const env = getPublicEnv();

  return createServerClient(
    env.NEXT_PUBLIC_SUPABASE_URL,
    env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY,
    {
      cookies: {
        getAll() {
          return cookieStore.getAll();
        },
        setAll(cookiesToSet) {
          try {
            cookiesToSet.forEach(({ name, value, options }) => {
              const { expires, maxAge, ...sessionOptions } = options || {};
              cookieStore.set(name, value, sessionOptions);
            });
          } catch (error) {
            console.error(error);
          }
        },
      },
    }
  );
};
