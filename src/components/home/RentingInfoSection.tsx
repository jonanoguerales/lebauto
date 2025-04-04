"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, Calendar, CreditCard, FileCheck, ShieldCheck, Car, Wrench } from "lucide-react"

export default function RentingInfoSection() {
  const benefits = [
    {
      icon: <Calendar className="h-10 w-10 text-blue-500" />,
      title: "Flexibilidad total",
      description: "Elige el plazo que mejor se adapte a tus necesidades, desde 24 hasta 60 meses.",
    },
    {
      icon: <CreditCard className="h-10 w-10 text-blue-500" />,
      title: "Cuota mensual fija",
      description: "Sin sorpresas ni gastos inesperados. Paga lo mismo cada mes durante todo el contrato.",
    },
    {
      icon: <FileCheck className="h-10 w-10 text-blue-500" />,
      title: "Todo incluido",
      description: "Seguro a todo riesgo, mantenimiento, asistencia en carretera y gestión de multas.",
    },
    {
      icon: <ShieldCheck className="h-10 w-10 text-blue-500" />,
      title: "Sin entrada inicial",
      description: "Comienza a disfrutar de tu vehículo sin necesidad de grandes desembolsos iniciales.",
    },
    {
      icon: <Car className="h-10 w-10 text-blue-500" />,
      title: "Vehículo siempre nuevo",
      description: "Al finalizar el contrato, puedes renovarlo y estrenar un nuevo vehículo.",
    },
    {
      icon: <Wrench className="h-10 w-10 text-blue-500" />,
      title: "Mantenimiento incluido",
      description: "Olvídate de las revisiones y reparaciones, nosotros nos encargamos de todo.",
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Renting de vehículos para particulares y empresas</h2>
          <p className="text-lg text-muted-foreground">
            Disfruta de la libertad de conducir sin preocupaciones. Nuestro servicio de renting incluye todo lo que
            necesitas en una cuota mensual fija.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {benefits.map((benefit, index) => (
            <Card key={index} className="border-0 shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" className="group" asChild>
            <Link href="/renting">
              Descubre nuestras ofertas de renting
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

