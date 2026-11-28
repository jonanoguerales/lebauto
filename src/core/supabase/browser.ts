import { createBrowserClient } from "@supabase/ssr";
import { getPublicEnv } from "@/core/env.public";

// Cliente de navegador: solo para islas de cliente. En el servidor se usa `@/core/supabase/server`.
export const createClient = () => {
  const env = getPublicEnv();
  return createBrowserClient(env.NEXT_PUBLIC_SUPABASE_URL, env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY);
};
