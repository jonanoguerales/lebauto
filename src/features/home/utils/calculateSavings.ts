export type SavingsInput = {
  kmPerYear: number
  /** Consumo del coche de combustión en litros cada 100 km. */
  fuelConsumption: number
  /** Precio del combustible en €/litro. */
  fuelPrice: number
  /** Precio de la electricidad en €/kWh. */
  electricityPrice: number
  /** Consumo del eléctrico en kWh cada 100 km. */
  electricConsumption: number
  yearsOfUse: number
}

export type SavingsResult = {
  fuelCost: number
  electricityCost: number
  maintenanceSavings: number
  totalSavings: number
}

/** Mantenimiento de un coche de combustión: 3 céntimos por km. */
const COMBUSTION_MAINTENANCE_PER_KM = 0.03
/** El eléctrico cuesta aproximadamente la mitad de mantener. */
const ELECTRIC_MAINTENANCE_RATIO = 0.5

export function calculateSavings(input: SavingsInput): SavingsResult {
  const { kmPerYear, fuelConsumption, fuelPrice, electricityPrice, electricConsumption, yearsOfUse } = input
  const totalKm = kmPerYear * yearsOfUse

  const fuelCost = (fuelConsumption / 100) * fuelPrice * totalKm
  const electricityCost = (electricConsumption / 100) * electricityPrice * totalKm

  const maintenanceCost = totalKm * COMBUSTION_MAINTENANCE_PER_KM
  const maintenanceSavings = maintenanceCost - maintenanceCost * ELECTRIC_MAINTENANCE_RATIO

  return {
    fuelCost,
    electricityCost,
    maintenanceSavings,
    totalSavings: fuelCost - electricityCost + maintenanceSavings,
  }
}
