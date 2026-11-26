import { updateSession } from "@/lib/supabase/proxy";
import type { NextRequest } from "next/server";

export async function proxy(request: NextRequest) {
  return await updateSession(request);
}

// Solo las rutas que necesitan sesión: el dashboard (privado) y el login (redirige si ya hay sesión).
// Las páginas públicas no pasan por aquí y no esperan a la llamada a Supabase Auth.
export const config = {
  matcher: ["/dashboard/:path*", "/sign-in"],
};
