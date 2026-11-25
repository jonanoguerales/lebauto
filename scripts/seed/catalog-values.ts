/**
 * Valores de texto que usa la app en los filtros y formularios (spec 002, AC-6).
 * Copiados de:
 * - combustibles, cambios, etiquetas, tracción: src/features/catalog-cars/components/filters/MotorFilter.tsx
 * - colores: src/features/catalog-cars/components/filters/ColorFilter.tsx
 * - carrocerías: src/features/catalog-cars/components/CarFilters.tsx (imágenes de public/tipo-carroceria/)
 * - estados: src/features/dashboard/vehicles/VehicleFormDialog.tsx
 * - concesionarios: src/features/home/components/LocationsSection.tsx
 * El seed tiene que usar exactamente estos valores para que los filtros encuentren los coches.
 */

export const FUELS = [
  "Diésel",
  "Gasolina",
  "Eléctrico",
  "Híbrido",
  "Híbrido enchufable",
  "Gas licuado (GLP)",
  "Gas natural (GNC)",
  "Otros",
] as const;

export const TRANSMISSIONS = ["Manual", "Automático", "CVT", "DSG / Doble embrague"] as const;

export const ENVIRONMENTAL_TAGS = ["CERO", "ECO", "C", "B"] as const;

export const DRIVETRAINS = ["4x4", "Delantera", "Trasera"] as const;

export const COLORS = [
  "Amarillo",
  "Azul",
  "Beige",
  "Blanco",
  "Granate",
  "Gris / Plata",
  "Marrón",
  "Naranja",
  "Negro",
  "Rojo",
  "Rosa",
  "Verde",
  "Violeta / Lila",
] as const;

export const BODY_TYPES = [
  "SUV",
  "Berlina",
  "Compacto",
  "Cabrio",
  "Coupe",
  "Familiar",
  "Monovolumen",
  "Pickup",
] as const;

export const CONDITIONS = ["Seminuevo", "Ocasión", "KM0", "Vendido", "Reservado"] as const;

export const CHARGER_CATEGORIES = ["home", "community", "business"] as const;

export type Fuel = (typeof FUELS)[number];
export type Transmission = (typeof TRANSMISSIONS)[number];
export type EnvironmentalTag = (typeof ENVIRONMENTAL_TAGS)[number];
export type Drivetrain = (typeof DRIVETRAINS)[number];
export type Color = (typeof COLORS)[number];
export type BodyType = (typeof BODY_TYPES)[number];
export type Condition = (typeof CONDITIONS)[number];
export type ChargerCategory = (typeof CHARGER_CATEGORIES)[number];

export interface Dealership {
  dealership_name: string;
  dealership_address: string;
  dealership_phone: string;
  dealership_hours_weekdays: string;
  dealership_hours_saturday: string;
  dealership_hours_sunday_status: string;
  latitude: number;
  longitude: number;
}

/** Concesionarios de LocationsSection; la clave es el valor de `cars.location` (filtro de ubicación). */
export const DEALERSHIPS = {
  Madrid: {
    dealership_name: "Lebauto Madrid",
    dealership_address: "Calle Límite 16, 28850 Torrejón de Ardoz, Madrid",
    dealership_phone: "+34919494825",
    dealership_hours_weekdays: "09:00 a 20:00",
    dealership_hours_saturday: "10:00 a 14:00 y 16:00 a 20:00",
    dealership_hours_sunday_status: "Cerrado",
    latitude: 40.4609,
    longitude: -3.4697,
  },
  Barcelona: {
    dealership_name: "Lebauto Barcelona",
    dealership_address: "Calle Binéfar 21-25, 08020 Barcelona",
    dealership_phone: "+34932713333",
    dealership_hours_weekdays: "09:00 a 21:00",
    dealership_hours_saturday: "10:00 a 14:00 y 16:00 a 21:00",
    dealership_hours_sunday_status: "Cerrado",
    latitude: 41.4229,
    longitude: 2.2004,
  },
  Valencia: {
    dealership_name: "Lebauto Valencia",
    dealership_address: "Avenida del Puerto 45, 46021 Valencia",
    dealership_phone: "+34963224455",
    dealership_hours_weekdays: "09:00 a 20:00",
    dealership_hours_saturday: "10:00 a 14:00",
    dealership_hours_sunday_status: "Cerrado",
    latitude: 39.4646,
    longitude: -0.3559,
  },
  Sevilla: {
    dealership_name: "Lebauto Sevilla",
    dealership_address: "Calle Luis Montoto 102, 41018 Sevilla",
    dealership_phone: "+34954332211",
    dealership_hours_weekdays: "09:30 a 20:30",
    dealership_hours_saturday: "10:00 a 14:00",
    dealership_hours_sunday_status: "Cerrado",
    latitude: 37.3874,
    longitude: -5.9763,
  },
  Bilbao: {
    dealership_name: "Lebauto Bilbao",
    dealership_address: "Gran Vía Don Diego López de Haro 33, 48009 Bilbao",
    dealership_phone: "+34944278899",
    dealership_hours_weekdays: "09:00 a 20:00",
    dealership_hours_saturday: "10:00 a 14:00",
    dealership_hours_sunday_status: "Cerrado",
    latitude: 43.2627,
    longitude: -2.9356,
  },
} as const satisfies Record<string, Dealership>;

export type Location = keyof typeof DEALERSHIPS;
