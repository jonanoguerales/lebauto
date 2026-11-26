"use client"

import { useCallback, useSyncExternalStore } from "react"

// En el servidor (y durante la hidratación) no hay viewport: se asume que la consulta no coincide.
const getServerSnapshot = () => false

export function useMediaQuery(query: string): boolean {
  // `subscribe` estable por consulta: si cambiara en cada render, React volvería a suscribirse cada vez.
  // Con el React Compiler activo se mantiene el useCallback: react.dev recomienda dejar la memoización
  // existente como escape hatch cuando la estabilidad importa (aquí, la suscripción de useSyncExternalStore).
  const subscribe = useCallback(
    (onChange: () => void) => {
      const media = window.matchMedia(query)
      media.addEventListener("change", onChange)
      return () => media.removeEventListener("change", onChange)
    },
    [query],
  )

  return useSyncExternalStore(
    subscribe,
    () => window.matchMedia(query).matches,
    getServerSnapshot,
  )
}
