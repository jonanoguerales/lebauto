import { describe, expect, it } from "vitest"
import { calculateMonthlyPayment } from "./calculateMonthlyPayment"

// T-01b.3 · AC-3 y AC-6: el simulador de financiación calcula la cuota en render con esta función pura
// y muestra las mismas cifras que el efecto al que sustituye.
describe("calculateMonthlyPayment (T-01b.3 AC-3, AC-6)", () => {
  it("AC-6: 20.000 € a 120 meses al 9,49 % dan unos 259 € al mes", () => {
    expect(Math.round(calculateMonthlyPayment(20000, 0.0949, 120))).toBe(259)
  })

  it("AC-6: la suma de las cuotas supera el importe financiado cuando hay interés", () => {
    const payment = calculateMonthlyPayment(15000, 0.0849, 72)
    expect(payment * 72).toBeGreaterThan(15000)
  })

  it("AC-6: sin interés la cuota es el importe dividido entre los meses", () => {
    expect(calculateMonthlyPayment(12000, 0, 120)).toBe(100)
  })

  it("AC-6: sin importe que financiar la cuota es 0 (el simulador muestra «---»)", () => {
    expect(calculateMonthlyPayment(0, 0.0949, 120)).toBe(0)
  })
})
