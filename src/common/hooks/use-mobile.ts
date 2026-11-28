import { useMediaQuery } from "@/common/hooks/useMediaQuery"

const MOBILE_BREAKPOINT = 768

// Implementación de T-01b: suscripción a matchMedia con useSyncExternalStore (vía useMediaQuery), sin setState
// en un efecto. Sustituye a la versión que genera shadcn (`add sidebar`). Sin "use client": es un hook, no un
// punto de entrada que se renderice desde un Server Component; lo importa `sidebar.tsx`, que ya es de cliente.
export function useIsMobile() {
  return useMediaQuery(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`)
}
