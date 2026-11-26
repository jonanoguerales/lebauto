import type { Route } from "next";

const BASE = "http://internal";

// Segmento «.» o «..», también codificado (%2e), entre barras o al final.
const DOT_SEGMENT = /\/(?:\.|%2e){1,2}(?=\/|\?|#|$)/i;
// Ruta que el navegador trataría como de otro host.
const HOST_RELATIVE = /^\/[\/\\]/;

// Devuelve la ruta interna normalizada (path + query) o null si `raw` podría salir del sitio (D-15).
// Rechaza caracteres de control, espacios y barras invertidas antes de parsear: el analizador WHATWG
// elimina tabuladores y saltos de línea, así que «/\t/evil.com» acabaría en otro host. También rechaza
// segmentos «.»/«..», porque al resolverlos el pathname puede quedar como «//evil.com».
export function toSafeInternalPath(raw: string | null | undefined): Route | null {
  if (!raw || !raw.startsWith("/") || /[\u0000- \u007f\\]/.test(raw)) return null;
  if (HOST_RELATIVE.test(raw) || DOT_SEGMENT.test(raw)) return null;
  let path: string;
  try {
    const target = new URL(raw, BASE);
    if (target.origin !== BASE) return null;
    path = `${target.pathname}${target.search}`;
    // Se valida también el valor que se devuelve, no solo la entrada.
    if (HOST_RELATIVE.test(path) || new URL(path, BASE).origin !== BASE) return null;
  } catch {
    return null;
  }
  // URL ya validada como interna pero no literal: la doc de typedRoutes pide `as Route`.
  return path as Route;
}
