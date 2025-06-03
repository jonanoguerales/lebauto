"use client";

import { useState, useEffect } from "react";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, Home, Building2, Zap } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Charger } from "@/lib/definitions";

const chargers: Charger[] = [
  {
    id: "1",
    name: "Cargador Doméstico Básico",
    power_kw: 7.4 ,
    connector_type: "Tipo 2",
    price_eur: 899,
    installation_cost_eur: 350,
    features: [
      "Instalación en garaje privado",
      "Carga completa en 6-8 horas",
      "Compatible con todos los vehículos eléctricos",
      "Gestión inteligente de carga",
    ],
    image_url: "/cargadores/cargador2.png",
    category: "home",
  },
  {
    id: "2",
    name: "Cargador Doméstico Avanzado",
    power_kw: 11,
    connector_type: "Tipo 2",
    price_eur: 1299,
    installation_cost_eur: 450,
    features: [
      "Instalación en garaje privado",
      "Carga completa en 4-6 horas",
      "Compatible con todos los vehículos eléctricos",
      "Gestión inteligente de carga",
      "Conectividad WiFi y control por app",
    ],
    image_url: "/cargadores/cargador3.png",
    category: "home",
  },
  {
    id: "3",
    name: "Cargador Comunitario",
    power_kw: 22,
    connector_type: "Tipo 2",
    price_eur: 1899,
    installation_cost_eur: 750,
    features: [
      "Instalación en garajes comunitarios",
      "Carga completa en 2-4 horas",
      "Compatible con todos los vehículos eléctricos",
      "Sistema de identificación de usuarios",
      "Gestión de pagos y facturación",
    ],
    image_url: "/cargadores/cargador1.png",
    category: "community",
  },
  {
    id: "4",
    name: "Cargador Rápido Comercial",
    power_kw: 50,
    connector_type: "CCS / CHAdeMO",
    price_eur: 24999,
    installation_cost_eur: 3500,
    features: [
      "Instalación en negocios y comercios",
      "Carga del 10% al 80% en 30 minutos",
      "Compatible con la mayoría de vehículos eléctricos",
      "Sistema de pago integrado",
      "Monitorización remota y mantenimiento",
    ],
    image_url: "/cargadores/cargador4.png",
    category: "business",
  },
];

export default function ElectricChargersSection() {
  const [hasMounted, setHasMounted] = useState(false);
  const isDesktop = useMediaQuery("(min-width: 1024px)");

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) {
    return null;
  }

  return (
    <section className="py-20">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <Badge className="mb-4" variant="outline">
            <Zap className="h-3 w-3 mr-1" /> Soluciones de carga
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Cargadores para vehículos eléctricos</h2>
          <p className="text-lg text-muted-foreground">
            Ofrecemos soluciones de carga completas para tu vehículo eléctrico, desde la instalación hasta el mantenimiento.
          </p>
        </div>

        {isDesktop ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {chargers.map((charger) => (
              <ChargerCard key={charger.id} charger={charger} />
            ))}
          </div>
        ) : (
          <div className="relative overflow-hidden">
            <Carousel
              className="w-full"
              opts={{
                align: "start",
                loop: true,
                containScroll: false,
              }}
            >
              <CarouselContent>
                {chargers.map((charger) => (
                  <CarouselItem key={charger.id} className="md:basis-[48%] lg:basis-[32%] sm:basis-[65%] basis-[85%]">
                    <ChargerCard charger={charger} />
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="hidden md:flex left-2 z-10" />
              <CarouselNext className="hidden md:flex right-2 z-10" />
            </Carousel>
          </div>
        )}
      </div>
    </section>
  );
}

function ChargerCard({ charger }: { charger: Charger }) {
  return (
    <Card className="overflow-hidden h-full flex flex-col">
      <div className="relative h-48">
        <Image
          src={charger.image_url || "/placeholder.svg"}
          alt={charger.name}
          fill
          className="object-contain p-4"
        />
        {charger.category === "home" && (
          <div className="absolute top-2 left-2 bg-blue-100 text-blue-800 px-2 py-1 rounded-md text-xs font-medium flex items-center">
            <Home className="h-3 w-3 mr-1" /> Doméstico
          </div>
        )}
        {charger.category === "community" && (
          <div className="absolute top-2 left-2 bg-green-100 text-green-800 px-2 py-1 rounded-md text-xs font-medium flex items-center">
            <Building2 className="h-3 w-3 mr-1" /> Comunitario
          </div>
        )}
        {charger.category === "business" && (
          <div className="absolute top-2 left-2 bg-purple-100 text-purple-800 px-2 py-1 rounded-md text-xs font-medium flex items-center">
            <Building2 className="h-3 w-3 mr-1" /> Comercial
          </div>
        )}
      </div>
      <CardContent className="p-6 flex-grow flex flex-col">
        <div className="mb-4">
          <h3 className="text-lg font-semibold mb-1">{charger.name}</h3>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span>{charger.power_kw} kw</span>
            <span>•</span>
            <span>{charger.connector_type}</span>
          </div>
        </div>

        <ul className="space-y-2 mb-6 flex-grow">
          {charger.features?.map((feature, index) => (
            <li key={index} className="flex items-start gap-2 text-sm">
              <Check className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>

        <div className="mt-auto">
          <div className="flex justify-between items-end mb-4">
            <div>
              <p className="text-sm text-muted-foreground">Precio</p>
              <p className="text-[#e63946] text-xl font-bold">{charger.price_eur.toLocaleString()} €</p>
            </div>
            <div className="text-right">
              <p className="text-sm text-muted-foreground">Instalación desde</p>
              <p className="text-lg font-semibold">{charger.installation_cost_eur} €</p>
            </div>
          </div>
          <Button className="w-full" variant="outline" asChild>
            <Link href={`/cargadores/${charger.id}`}>Más información</Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
