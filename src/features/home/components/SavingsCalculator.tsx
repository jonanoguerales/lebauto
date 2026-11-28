"use client"

import Link from "next/link"

import { useState, type ReactNode } from "react"
import { Button } from "@/common/components/ui/button"
import { Slider } from "@/common/components/ui/slider"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/common/components/ui/tabs"
import { Card, CardContent } from "@/common/components/ui/card"
import { Calculator, Fuel, Wrench, Euro } from "lucide-react"
import { calculateSavings } from "@/features/home/utils/calculateSavings"
import { SavingsNumberField } from "@/features/home/components/SavingsNumberField"
import { cn } from "@/common/helpers/cn"
import { formatCurrency, formatPrice } from "@/common/helpers/format-price"

const DEFAULTS = {
  kmPerYear: 15000,
  fuelConsumption: 7,
  fuelPrice: 1.8,
  electricityPrice: 0.15,
  electricConsumption: 18,
  yearsOfUse: 5,
}

const TAB_TRIGGER_CLASS = "min-h-11 whitespace-normal text-center"
// forceMount deja los dos paneles en el HTML del servidor (y conserva lo escrito al cambiar de
// pestaña); Radix no los oculta por sí solo, así que el inactivo se esconde con su data-state.
const TAB_CONTENT_CLASS = "space-y-4 pt-4 data-[state=inactive]:hidden"

export default function SavingsCalculator() {
  const [kmPerYear, setKmPerYear] = useState(DEFAULTS.kmPerYear)
  const [fuelConsumption, setFuelConsumption] = useState(DEFAULTS.fuelConsumption)
  const [fuelPrice, setFuelPrice] = useState(DEFAULTS.fuelPrice)
  const [electricityPrice, setElectricityPrice] = useState(DEFAULTS.electricityPrice)
  const [electricConsumption, setElectricConsumption] = useState(DEFAULTS.electricConsumption)
  const [yearsOfUse, setYearsOfUse] = useState(DEFAULTS.yearsOfUse)

  const { fuelCost, electricityCost, maintenanceSavings, totalSavings } = calculateSavings({
    kmPerYear,
    fuelConsumption,
    fuelPrice,
    electricityPrice,
    electricConsumption,
    yearsOfUse,
  })

  const kmText = `${formatPrice(kmPerYear)} km`
  const yearsText = `${yearsOfUse} ${yearsOfUse === 1 ? "año" : "años"}`

  return (
    <section aria-labelledby="savings-calculator-title" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center p-3 bg-primary/10 rounded-full mb-4">
              <Calculator aria-hidden="true" className="h-6 w-6 text-primary" />
            </div>
            <h2 id="savings-calculator-title" className="text-3xl font-bold mb-4">
              Calculadora de ahorro
            </h2>
            <p className="text-lg text-muted-foreground">
              Descubre cuánto puedes ahorrar al cambiar a un vehículo eléctrico
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6 min-w-0">
              <div className="space-y-2">
                <p className="flex justify-between gap-2 text-sm font-medium">
                  <span id="km-per-year-label">Kilómetros anuales</span>
                  <span>{kmText}</span>
                </p>
                <Slider
                  className="h-11"
                  min={5000}
                  max={50000}
                  step={1000}
                  value={[kmPerYear]}
                  onValueChange={(value) => setKmPerYear(value[0])}
                  thumbProps={{ "aria-labelledby": "km-per-year-label", "aria-valuetext": kmText }}
                />
              </div>

              <div className="space-y-2">
                <p className="flex justify-between gap-2 text-sm font-medium">
                  <span id="years-of-use-label">Años de uso</span>
                  <span>{yearsText}</span>
                </p>
                <Slider
                  className="h-11"
                  min={1}
                  max={10}
                  step={1}
                  value={[yearsOfUse]}
                  onValueChange={(value) => setYearsOfUse(value[0])}
                  thumbProps={{ "aria-labelledby": "years-of-use-label", "aria-valuetext": yearsText }}
                />
              </div>

              <Tabs defaultValue="combustion" className="w-full">
                <TabsList className="grid h-auto w-full grid-cols-2">
                  <TabsTrigger value="combustion" className={TAB_TRIGGER_CLASS}>
                    Vehículo combustión
                  </TabsTrigger>
                  <TabsTrigger value="electric" className={TAB_TRIGGER_CLASS}>
                    Vehículo eléctrico
                  </TabsTrigger>
                </TabsList>
                <TabsContent value="combustion" forceMount className={TAB_CONTENT_CLASS}>
                  <SavingsNumberField
                    id="fuel-consumption"
                    label="Consumo (l/100 km)"
                    defaultValue={DEFAULTS.fuelConsumption}
                    min={0}
                    step={0.1}
                    onValueChange={setFuelConsumption}
                  />
                  <SavingsNumberField
                    id="fuel-price"
                    label="Precio del combustible (€/l)"
                    defaultValue={DEFAULTS.fuelPrice}
                    min={0}
                    step={0.01}
                    onValueChange={setFuelPrice}
                  />
                </TabsContent>
                <TabsContent value="electric" forceMount className={TAB_CONTENT_CLASS}>
                  <SavingsNumberField
                    id="electric-consumption"
                    label="Consumo (kWh/100 km)"
                    defaultValue={DEFAULTS.electricConsumption}
                    min={0}
                    step={0.1}
                    onValueChange={setElectricConsumption}
                  />
                  <SavingsNumberField
                    id="electricity-price"
                    label="Precio de la electricidad (€/kWh)"
                    defaultValue={DEFAULTS.electricityPrice}
                    min={0}
                    step={0.01}
                    onValueChange={setElectricityPrice}
                  />
                </TabsContent>
              </Tabs>
            </div>

            <div className="min-w-0">
              <Card className="bg-card">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-6 text-center">Tu ahorro estimado</h3>

                  <ul className="space-y-6">
                    <SavingsRow
                      icon={<Fuel aria-hidden="true" className="h-5 w-5 text-amber-700" />}
                      iconClassName="bg-amber-100"
                      title="Ahorro en combustible"
                      period={yearsText}
                      amount={formatCurrency(fuelCost - electricityCost)}
                    />
                    <SavingsRow
                      icon={<Wrench aria-hidden="true" className="h-5 w-5 text-blue-700" />}
                      iconClassName="bg-blue-100"
                      title="Ahorro en mantenimiento"
                      period={yearsText}
                      amount={formatCurrency(maintenanceSavings)}
                    />
                    <SavingsRow
                      icon={<Euro aria-hidden="true" className="h-5 w-5 text-green-700" />}
                      iconClassName="bg-green-100"
                      title="Ahorro total"
                      period={yearsText}
                      amount={formatCurrency(totalSavings)}
                      isTotal
                    />
                  </ul>

                  <div className="mt-8 pt-6 border-t">
                    <p className="text-center text-sm text-muted-foreground mb-4">
                      Estos cálculos son estimaciones basadas en los datos proporcionados. El ahorro real puede variar.
                    </p>
                    <Button className="w-full h-auto min-h-11 whitespace-normal" asChild>
                      <Link href="/contacto">Solicitar asesoramiento personalizado</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

type SavingsRowProps = {
  icon: ReactNode
  iconClassName: string
  title: string
  period: string
  amount: string
  isTotal?: boolean
}

function SavingsRow({ icon, iconClassName, title, period, amount, isTotal = false }: SavingsRowProps) {
  return (
    <li className={cn("flex justify-between items-center gap-3", isTotal ? "pt-2" : "pb-4 border-b")}>
      <div className="flex items-center gap-3 min-w-0">
        <div className={cn("p-2 rounded-full shrink-0", iconClassName)}>{icon}</div>
        <div>
          <p className="font-medium">{title}</p>
          <p className="text-sm text-muted-foreground">En {period}</p>
        </div>
      </div>
      <p className={cn("font-bold whitespace-nowrap text-green-700 dark:text-green-400", isTotal ? "text-2xl" : "text-xl")}>
        {amount}
      </p>
    </li>
  )
}
