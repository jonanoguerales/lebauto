import { describe, expect, it } from "vitest"
import { formatCurrency, formatPrice } from "./utils"

// Intl usa espacio duro (U+00A0) entre la cifra y el símbolo del euro.
const NBSP = " "

// T-01c · AC-4: la calculadora formatea euros y km con locale es-ES fijo (mismo texto en servidor y cliente).
describe("formatCurrency (T-01c AC-4)", () => {
  it("AC-4: formatea en euros sin decimales con separador de miles es-ES", () => {
    expect(formatCurrency(12600)).toBe(`12.600${NBSP}€`)
    expect(formatCurrency(1234567)).toBe(`1.234.567${NBSP}€`)
  })

  it("AC-4: redondea al euro", () => {
    expect(formatCurrency(1124.6)).toBe(`1125${NBSP}€`)
    expect(formatCurrency(0)).toBe(`0${NBSP}€`)
  })
})

describe("formatPrice (T-01c AC-4)", () => {
  it("AC-4: formatea kilómetros con separador de miles es-ES", () => {
    expect(formatPrice(15000)).toBe("15.000")
    expect(formatPrice(50000)).toBe("50.000")
  })
})
