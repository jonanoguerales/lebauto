export interface Car {
  id: string;
  brand: string;
  model: string;
  variant?: string;
  condition: string;
  price: number;
  location?: string;
  year: number;
  mileage: number;
  bodyType: string;
  fuel: string;
  transmission: string;
  environmentalTag: string;
  drivetrain?: string;
  power?: number;
  engineDisplacement?: number;
  color: string;
  doors: number;
  seats: number;
  electricRange?: number;
  batteryCapacity?: number;
  chargingTime?: number;
  fastCharge?: boolean;
  chargingPort?: string;
  images: string[];
  ivaDeductible?: boolean;
  monthlyPrice?: number;
  financePrice?: number;
  features?: string[];
  description?: string;
  slug?: string;
  // dimensions?: { length?: string; width?: string; height?: string };
  // weight_kg?: number;
  // trunk_capacity_liters?: string | number; // Puede ser string como "-" o un número
  // fuel_tank_capacity_liters?: string | number;
  // max_speed_kmh?: string | number;
  // acceleration_0_100_sec?: string | number;
  // fuel_consumption_combined_l_100km?: string | number;
  // co2_emissions_g_km?: string | number;
  //location?: string; // Nombre general de la ciudad/zona
  dealership_name?: string; // Nombre específico del concesionario
  dealership_address?: string; // Dirección completa del concesionario
  latitude?: number;          // Para el mapa
  longitude?: number;         // Para el mapa
  dealership_hours_weekdays?: string;
  dealership_hours_saturday?: string;
  dealership_hours_sunday_status?: "Abierto" | "Cerrado" | string; // ej. "Cerrado" o "10:00 a 13:00"
  dealership_phone?: string;
}

export interface CatalogClientProps extends FiltersData {
  allCars: Car[];
  initialCars: Car[];
}

export interface FilterState {
  brand?: string[];
  model?: string[];
  fuel?: string[];
  location?: string[];
  color?: string[];
  bodyType?: string[];
  doorFrom?: number;
  doorTo?: number;
  seatFrom?: number;
  seatTo?: number;
  minPrice?: number;
  maxPrice?: number;
  minYear?: number;
  maxYear?: number;
  minKm?: number;
  maxKm?: number;
}

export interface CarImage {
  id: string;
  car_id: string;
  image_url: string;
  created_at?: string;
}

export interface Feature {
  id: string;
  name: string;
}

export interface CarFeature {
  car_id: string;
  feature_id: string;
}
export interface FiltersData {
  brand?: string[];
  model?: string[];
  fuel?: string[];
  location?: string[];
  color?: string[];
  bodyType?: string[];
  transmission?: string[];
  environmentalTag?: string[];
  drivetrain?: string[];
  minPower?: number;
  maxPower?: number;
  minEngineDisplacement?: number;
  maxEngineDisplacement?: number;
  doorFrom?: number;
  doorTo?: number;
  seatFrom?: number;
  seatTo?: number;
  minPrice?: number;
  maxPrice?: number;
  minYear?: number;
  maxYear?: number;
  minKm?: number;
  maxKm?: number;
}

// Claves que son array de string
export type ArrayFilterKey =
  | "brand"
  | "model"
  | "fuel"
  | "location"
  | "color"
  | "bodyType"
  | "transmission"
  | "environmentalTag"
  | "drivetrain";

// Claves que son numéricas
export type NumberFilterKey =
  | "minPrice"
  | "maxPrice"
  | "minYear"
  | "maxYear"
  | "minKm"
  | "maxKm"
  | "doorFrom"
  | "doorTo"
  | "seatFrom"
  | "seatTo"
  | "minPower"
  | "maxPower"
  | "minEngineDisplacement"
  | "maxEngineDisplacement";

// Union de todas las claves
export type FilterKey = ArrayFilterKey | NumberFilterKey;

export interface FilterStateStore {
  filters: FiltersData;
  filteredCars: Car[];
  allCars: Car[];
  isLoading: boolean;
  getActiveFiltersCount: () => number;
  // setFilter recibe la clave y el valor (string o number)
  setFilter: (key: FilterKey, value: string | number) => void;
  // removeFilter: clave y valor string (en caso de arrays). Si es numérico, se ignora el value.
  removeFilter: (key: FilterKey, value?: string) => void;
  clearFilters: () => void;
  setFilteredCars: (cars: Car[]) => void;
  setAllCars: (cars: Car[]) => void;
  setIsLoading: (isLoading: boolean) => void;
  applyFilters: () => void;
}

export type SellCarFormState = {
  success: boolean | null;
  message: string;
  errors: {
    email?: string[];
    name?: string[];
    phone?: string[];
    brand?: string[];
    model?: string[];
    year?: string[];
    kilometers?: string[];
    fuel?: string[];
    comments?: string[];
  };
  submitting: boolean;
};

export type ContactFormState = {
  success: boolean | null;
  message: string;
  errors: {
    name?: string[];
    surnames?: string[];
    email?: string[];
    phone?: string[];
    message?: string[];
  };
  submitting: boolean;
};

export interface Charger {
  id: string;
  name: string;
  brand?: string;
  power_kw: number;
  connector_type: string;
  price_eur: number;
  installation_cost_eur?: number;
  features?: string[];
  description?: string;
  image_url?: string;
  category: "home" | "community" | "business";
  slug?: string;
  efficiency?: number;
  dimensions?: string;
  weight_kg?: number;
  warranty_years?: number;
  compatibility_notes?: string;
  created_at?: string;
}

export type ChargerFormValues = {
  id?: string;
  name: string;
  brand?: string;
  power_kw: number;
  connector_type: string;
  price_eur: number;
  installation_cost_eur?: number;
  features?: string[];
  description?: string;
  image_url?: string;
  category: "home" | "community" | "business";
  efficiency?: number;
  dimensions?: string;
  weight_kg?: number;
  warranty_years?: number;
  compatibility_notes?: string;
};
