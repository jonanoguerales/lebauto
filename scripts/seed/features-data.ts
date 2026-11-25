/** Equipamiento de demostración (tabla `features`, spec 002 AC-6). */
export const FEATURE_NAMES = [
  "Navegador GPS",
  "Apple CarPlay y Android Auto",
  "Cámara de visión trasera",
  "Cámara 360°",
  "Sensores de aparcamiento delanteros y traseros",
  "Control de crucero adaptativo",
  "Asistente de mantenimiento de carril",
  "Faros LED matriciales",
  "Techo panorámico de cristal",
  "Asientos delanteros calefactables",
  "Asientos eléctricos con memoria",
  "Tapicería de cuero",
  "Climatizador bizona",
  "Acceso y arranque sin llave",
  "Portón trasero eléctrico",
  "Sistema de sonido premium",
  "Head-up display",
  "Cargador inalámbrico para el móvil",
  "Bomba de calor",
  "Suspensión neumática",
  "Enganche de remolque",
  "Llantas de aleación",
] as const;

export type FeatureName = (typeof FEATURE_NAMES)[number];
