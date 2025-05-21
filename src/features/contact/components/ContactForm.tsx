"use client"

import { useEffect } from "react"
import { useActionState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/useToast"
import { Card, CardContent } from "@/components/ui/card"
import { ContactFormState } from "@/lib/definitions"
import { submitContactForm } from "@/app/actions/actions"

const initialState: ContactFormState = {
  success: null,
  message: "",
  errors: {},
  submitting: false,
}

export default function ContactForm() {
  const { toast } = useToast()
  const [state, formAction] = useActionState(submitContactForm, initialState)

  useEffect(() => {
    if (state?.message) {
      toast({
        title: state.success ? "✔️ Formulario enviado" : "❌ Error al enviar",
        description: state.message,
        variant: state.success ? "default" : "destructive",
      })
    }
  }, [state, toast])

  return (
    <Card className="shadow-lg border-0">
      <CardContent className="p-6 md:p-8">
        <form
          action={formAction}
          className="space-y-6"
          aria-labelledby="contact-form-title"
        >
          <h3 id="contact-form-title" className="text-lg font-semibold">
            Formulario de contacto
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <InputGroup id="name" label="Nombre" required />
            <InputGroup id="surnames" label="Apellidos" required />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <InputGroup id="email" label="Email" type="email" required />
            <InputGroup id="phone" label="Teléfono" type="tel" />
          </div>
          <TextareaGroup id="message" label="Mensaje" required />
          <Button type="submit" className="w-full h-12 text-base" disabled={state.submitting}>
            {state.submitting ? "Enviando..." : "Enviar mensaje"}
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}

function InputGroup({ id, label, type = "text", required = false }: any) {
  return (
    <div className="space-y-2">
      <Label htmlFor={id}>{label}</Label>
      <Input
        id={id}
        name={id}
        type={type}
        placeholder={`Introduce tu ${label.toLowerCase()}`}
        required={required}
      />
    </div>
  )
}

function TextareaGroup({ id, label, required = false }: any) {
  return (
    <div className="space-y-2">
      <Label htmlFor={id}>{label}</Label>
      <Textarea
        id={id}
        name={id}
        placeholder={`Escribe tu ${label.toLowerCase()} aquí...`}
        rows={6}
        required={required}
      />
    </div>
  )
}
