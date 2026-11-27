import type { Route } from "next";
import { redirect } from "next/navigation";

export function formatPrice(price: number) {
  return new Intl.NumberFormat("es-ES").format(price)
}

/**
 * Redirects to a specified path with an encoded message as a query parameter.
 * @param {('error' | 'success')} type - The type of message, either 'error' or 'success'.
 * @param {string} path - The path to redirect to.
 * @param {string} message - The message to be encoded and added as a query parameter.
 * @returns {never} This function doesn't return as it triggers a redirect.
 */
export function encodedRedirect(
  type: "error" | "success",
  path: string,
  message: string,
) {
  // URL no literal: la doc de typedRoutes pide `as Route`. Varias rutas de quien llama aún no existen (ver T-17).
  return redirect(`${path}?${type}=${encodeURIComponent(message)}` as Route);
}

export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat("es-ES", {
    style: "currency",
    currency: "EUR",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount)
}