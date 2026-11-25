import { describe, expect, it } from "vitest"
import { calculateSavings, parseNonNegativeNumber } from "./calculateSavings"

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

// T-01c · AC-3: los campos numéricos rechazan vacíos y negativos sin que el cálculo dé NaN.
describe("parseNonNegativeNumber (T-01c AC-3)", () => {
  it("AC-3: acepta números con punto o coma decimal y el cero", () => {
    expect(parseNonNegativeNumber("7")).toBe(7)
    expect(parseNonNegativeNumber("1.85")).toBe(1.85)
    expect(parseNonNegativeNumber("0,15")).toBe(0.15)
    expect(parseNonNegativeNumber(" 18 ")).toBe(18)
    expect(parseNonNegativeNumber("0")).toBe(0)
  })

  it("AC-3: rechaza vacío, negativos y texto no numérico", () => {
    for (const raw of ["", "   ", "-1", "-0.5", "abc", "1e400", "NaN"]) {
      expect(parseNonNegativeNumber(raw)).toBeNull()
    }
  })

  it("AC-3: con un campo vacío se usa el valor por defecto y el cálculo no da NaN", () => {
    const defaults = { kmPerYear: 15000, fuelConsumption: 7, fuelPrice: 1.8, electricityPrice: 0.15, electricConsumption: 18, yearsOfUse: 5 }
    const fuelConsumption = parseNonNegativeNumber("") ?? defaults.fuelConsumption
    const result = calculateSavings({ ...defaults, fuelConsumption })
    expect(Number.isNaN(result.totalSavings)).toBe(false)
    expect(result.totalSavings).toBeCloseTo(8550)
  })
})
