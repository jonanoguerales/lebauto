"use client"

import {
  InfoIcon,
  Loader2Icon,
  TriangleAlertIcon,
} from "lucide-react"
import { Toaster as Sonner, type ToasterProps } from "sonner"

// Personalizaciones respecto al componente generado (sustituye a los antiguos toast/toaster de Radix):
// - Sin `next-themes`: la web no tiene modo oscuro, así que el tema es siempre `light` (no sigue al sistema).
// - Mismo aspecto que el toast anterior: éxito con el fondo normal y error en rojo (`richColors` con los tokens
//   `destructive`), sin icono en éxito/error (los mensajes ya llevan ✔️/❌ donde los tenían), uno visible cada
//   vez y 5 s en pantalla, abajo a la derecha.
// - Textos accesibles en español.
const Toaster = ({ ...props }: ToasterProps) => {
  return (
    <Sonner
      theme="light"
      className="toaster group"
      position="bottom-right"
      richColors
      closeButton
      visibleToasts={1}
      duration={5000}
      customAriaLabel="Notificaciones"
      toastOptions={{ closeButtonAriaLabel: "Cerrar aviso" }}
      icons={{
        success: null,
        info: <InfoIcon className="size-4" />,
        warning: <TriangleAlertIcon className="size-4" />,
        error: null,
        loading: <Loader2Icon className="size-4 animate-spin" />,
      }}
      style={
        {
          "--normal-bg": "var(--background)",
          "--normal-text": "var(--foreground)",
          "--normal-border": "var(--border)",
          "--success-bg": "var(--background)",
          "--success-text": "var(--foreground)",
          "--success-border": "var(--border)",
          "--error-bg": "var(--destructive)",
          "--error-text": "var(--destructive-foreground)",
          "--error-border": "var(--destructive)",
          "--border-radius": "var(--radius)",
        } as React.CSSProperties
      }
      {...props}
    />
  )
}

export { Toaster }
