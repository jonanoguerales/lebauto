import { useEffect } from "react";
import { useMediaQuery } from "@/common/hooks/useMediaQuery";
import { useViewStore } from "@/lib/store";

const DESKTOP_QUERY = "(min-width: 1024px)";

// Vista por defecto según el ancho: lista desde 1024 px y cuadrícula por debajo, también al redimensionar.
// El usuario puede cambiarla con el conmutador, así que la vista sigue en el store y aquí solo se sincroniza
// cuando cambia el breakpoint (sistema externo → store), igual que hacía el efecto con matchMedia de antes.
export function useResponsiveView() {
  const setView = useViewStore((state) => state.setView);
  const isDesktop = useMediaQuery(DESKTOP_QUERY);

  useEffect(() => {
    setView(isDesktop ? "list" : "grid");
  }, [isDesktop, setView]);
}
