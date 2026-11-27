"use client"

import { useMediaQuery } from "@/hooks/useMediaQuery"

const MOBILE_BREAKPOINT = 768

// Implementación de T-01b: suscripción a matchMedia con useSyncExternalStore (vía useMediaQuery), sin setState
// en un efecto. Sustituye a la versión que genera shadcn (`add sidebar`).
export function useIsMobile() {
  return useMediaQuery(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`)
}
