"use client"

import { useState } from "react"
import { Input } from "@/common/components/ui/input"
import { Label } from "@/common/components/ui/label"
import { parseNonNegativeNumber } from "@/features/home/utils/calculateSavings"

type SavingsNumberFieldProps = {
  id: string
  label: string
  defaultValue: number
  min: number
  step: number
  /** Recibe el valor válido, o `defaultValue` si el campo está vacío o es negativo. */
  onValueChange: (value: number) => void
}

/**
 * Campo numérico de la calculadora de ahorro. Guarda lo que escribe el usuario tal cual (para que
 * pueda borrar y reescribir) y solo pasa al cálculo números ≥ 0. El error se muestra al salir del campo.
 */
export function SavingsNumberField({ id, label, defaultValue, min, step, onValueChange }: SavingsNumberFieldProps) {
  const [raw, setRaw] = useState(String(defaultValue))
  const [showError, setShowError] = useState(false)
  const isValid = parseNonNegativeNumber(raw) !== null
  const errorId = `${id}-error`

  return (
    <div className="space-y-2">
      <Label htmlFor={id}>{label}</Label>
      <Input
        id={id}
        name={id}
        type="number"
        inputMode="decimal"
        enterKeyHint="done"
        min={min}
        step={step}
        value={raw}
        required
        className="h-11 text-base"
        aria-invalid={showError && !isValid}
        aria-describedby={showError && !isValid ? errorId : undefined}
        onChange={(e) => {
          const parsed = parseNonNegativeNumber(e.target.value)
          setRaw(e.target.value)
          if (parsed !== null) setShowError(false)
          onValueChange(parsed ?? defaultValue)
        }}
        onBlur={() => setShowError(!isValid)}
      />
      {showError && !isValid ? (
        <p id={errorId} className="text-sm text-red-700 dark:text-red-400">
          Escribe un número igual o mayor que 0. Mientras tanto calculamos con {String(defaultValue).replace(".", ",")}.
        </p>
      ) : null}
    </div>
  )
}
