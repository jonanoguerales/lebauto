/**
 * Cuota mensual de un préstamo con cuota constante (sistema francés).
 * Devuelve 0 si no hay importe que financiar o el plazo no es válido.
 */
export function calculateMonthlyPayment(principal: number, annualRate: number, months: number): number {
  if (principal <= 0 || months <= 0) {
    return 0
  }

  const monthlyRate = annualRate / 12
  if (monthlyRate <= 0) {
    return principal / months
  }

  const growth = Math.pow(1 + monthlyRate, months)
  return (principal * (monthlyRate * growth)) / (growth - 1)
}
