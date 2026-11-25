import { describe, expect, it } from "vitest"
import { calculateSavings } from "./calculateSavings"

// T-01b.2 · AC-5: el cálculo del simulador de ahorro se hace en render con esta función pura
// y da los mismos resultados que el efecto al que sustituye.
describe("calculateSavings (T-01b.2 AC-5)", () => {
  // Valores iniciales del simulador.
  const defaults = { kmPerYear: 15000, fuelConsumption: 7, fuelPrice: 1.8, electricityPrice: 0.15, electricConsumption: 18, yearsOfUse: 5 }

  it("AC-5: calcula costes y ahorro con los valores iniciales del simulador", () => {
    const result = calculateSavings(defaults)
    expect(result.fuelCost).toBeCloseTo(9450)
    expect(result.electricityCost).toBeCloseTo(2025)
    expect(result.maintenanceSavings).toBeCloseTo(1125)
    expect(result.totalSavings).toBeCloseTo(8550)
  })

  it("AC-5: el ahorro total es combustible − electricidad + mantenimiento", () => {
    const result = calculateSavings({ ...defaults, kmPerYear: 30000, yearsOfUse: 2, fuelPrice: 1.5 })
    expect(result.totalSavings).toBeCloseTo(
      result.fuelCost - result.electricityCost + result.maintenanceSavings,
    )
  })

  it("AC-5: sin kilómetros no hay costes ni ahorro", () => {
    const zero = { fuelCost: 0, electricityCost: 0, maintenanceSavings: 0, totalSavings: 0 }
    expect(calculateSavings({ ...defaults, kmPerYear: 0 })).toEqual(zero)
  })
})
