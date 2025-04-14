"use client"

import { useEffect, useRef, useState } from "react"
import { useActionState } from "react"
import { submitSellCarForm } from "@/actions/actions"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useToast } from "@/hooks/useToast"
import { Card, CardContent } from "@/components/ui/card"
import { Loader2 } from "lucide-react"
import { SellCarFormState } from "@/lib/definitions"

const CURRENT_YEAR = new Date().getFullYear()
const YEARS = Array.from({ length: 30 }, (_, i) => (CURRENT_YEAR - i).toString())
const FUEL_TYPES = ["Gasolina", "Diésel", "Híbrido", "Eléctrico", "GLP", "Otro"]

const initialState: SellCarFormState = {
  success: null,
  message: "",
  errors: {},
  submitting: false,
}

export default function SellCarForm() {
  const { toast } = useToast()
  const [state, formAction] = useActionState(submitSellCarForm, initialState)
  const [selectKey, setSelectKey] = useState(0)
  const formRef = useRef<HTMLFormElement>(null)

  useEffect(() => {
    if (state?.message) {
      toast({
        title: state.success ? "✔️ Enviado correctamente" : "❌ Error al enviar",
        description: state.message,
        variant: state.success ? "default" : "destructive",
      })
    }
    if (state?.success) {
      formRef.current?.reset()
      setSelectKey((prev) => prev + 1)
    }
  }, [state, toast])

  return (
    <Card className="shadow-lg border-0">
      <CardContent className="p-6 md:p-8">
        <form key={selectKey} ref={formRef} action={formAction} className="space-y-6" aria-labelledby="sell-car-form-title">
          <div className="space-y-4">
            <h3 id="sell-car-form-title" className="text-lg font-semibold">Datos personales</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name">Nombre completo</Label>
                <Input id="name" name="name" placeholder="Tu nombre" required />
                {state.errors?.name && <p className="text-sm text-red-500">{state.errors.name[0]}</p>}
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" name="email" type="email" placeholder="tu@email.com" required />
                {state.errors?.email && <p className="text-sm text-red-500">{state.errors.email[0]}</p>}
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone">Teléfono</Label>
              <Input id="phone" name="phone" type="tel" placeholder="123 456 789" required />
              {state.errors?.phone && <p className="text-sm text-red-500">{state.errors.phone[0]}</p>}
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Datos del vehículo</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="brand">Marca</Label>
                <Input id="brand" name="brand" placeholder="Ej: Audi, BMW..." required />
                {state.errors?.brand && <p className="text-sm text-red-500">{state.errors.brand[0]}</p>}
              </div>

              <div className="space-y-2">
                <Label htmlFor="model">Modelo</Label>
                <Input id="model" name="model" placeholder="Ej: A4, Serie 3..." required />
                {state.errors?.model && <p className="text-sm text-red-500">{state.errors.model[0]}</p>}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="space-y-2">
                <Label htmlFor="year">Año</Label>
                <Select name="year" required>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecciona año" />
                  </SelectTrigger>
                  <SelectContent>
                    {YEARS.map((year) => (
                      <SelectItem key={year} value={year}>{year}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {state.errors?.year && <p className="text-sm text-red-500">{state.errors.year[0]}</p>}
              </div>

              <div className="space-y-2">
                <Label htmlFor="kilometers">Kilómetros</Label>
                <Input id="kilometers" name="kilometers" type="number" placeholder="Ej: 120000" required />
                {state.errors?.kilometers && <p className="text-sm text-red-500">{state.errors.kilometers[0]}</p>}
              </div>

              <div className="space-y-2">
                <Label htmlFor="fuel">Combustible</Label>
                <Select name="fuel" required>
                  <SelectTrigger>
                    <SelectValue placeholder="Tipo de combustible" />
                  </SelectTrigger>
                  <SelectContent>
                    {FUEL_TYPES.map((fuel) => (
                      <SelectItem key={fuel} value={fuel}>{fuel}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {state.errors?.fuel && <p className="text-sm text-red-500">{state.errors.fuel[0]}</p>}
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="comments">Comentarios adicionales</Label>
              <Textarea
                id="comments"
                name="comments"
                placeholder="Cuéntanos más sobre tu vehículo (estado, equipamiento, etc.)"
                rows={4}
              />
              {state.errors?.comments && <p className="text-sm text-red-500">{state.errors.comments[0]}</p>}
            </div>
          </div>

          <Button type="submit" className="w-full h-12 text-base" disabled={state.submitting}>
            {state.submitting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Enviando...
              </>
            ) : (
              "Solicitar valoración gratuita"
            )}
          </Button>

          <p className="text-sm text-center text-gray-500">
            Al enviar este formulario, aceptas nuestra política de privacidad y el tratamiento de tus datos.
          </p>
        </form>
      </CardContent>
    </Card>
  )
}
