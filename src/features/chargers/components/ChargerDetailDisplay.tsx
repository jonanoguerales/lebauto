"use client";

import Image from "next/image";
import type { Charger } from "@/lib/definitions";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Zap, Settings, ShieldCheck, Package, Home, Building2, Tag, CalendarDays, Palette } from "lucide-react";
import { formatPrice } from "@/utils/utils";

interface ChargerDetailDisplayProps {
  charger: Charger;
}

const categoryIcons = {
  home: <Home className="h-5 w-5 mr-2" />,
  community: <Building2 className="h-5 w-5 mr-2" />,
  business: <Zap className="h-5 w-5 mr-2" />,
};

const categoryLabels = {
  home: "Uso Doméstico",
  community: "Comunidades y Parkings",
  business: "Empresas y Comercios",
};

export default function ChargerDetailDisplay({ charger }: ChargerDetailDisplayProps) {
  const imageUrl = charger.image_url || "/placeholder.svg";

  return (
    <section className="animate-fadeInAfterLoad">
      <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
        <div className="lg:sticky lg:top-24">
          <Card className="overflow-hidden shadow-lg">
            <div className="relative aspect-[4/3] bg-muted">
              <Image
                src={imageUrl}
                alt={`Imagen de ${charger.name}`}
                fill
                className="object-contain p-6"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            </div>
          </Card>
        </div>

        <div>
          <Badge variant="outline" className="mb-3 text-sm py-1 px-3 bg-primary/5 border-primary/20 text-primary">
            {categoryIcons[charger.category]}
            {categoryLabels[charger.category]}
          </Badge>
          <h1 className="text-3xl lg:text-4xl font-bold mb-2">{charger.name}</h1>
          {charger.brand && <p className="text-xl text-muted-foreground mb-6">{charger.brand}</p>}

          <Card className="mb-6 bg-slate-50">
            <CardContent className="p-6">
              <div className="flex flex-col sm:flex-row justify-between items-baseline mb-2">
                <div>
                  <p className="text-sm text-muted-foreground">Precio del equipo</p>
                  <p className="text-4xl font-bold text-primary">{formatPrice(charger.price_eur)} €</p>
                </div>
                {charger.installation_cost_eur !== undefined && charger.installation_cost_eur > 0 && (
                  <div className="text-right mt-2 sm:mt-0">
                    <p className="text-sm text-muted-foreground">Instalación desde</p>
                    <p className="text-xl font-semibold">{formatPrice(charger.installation_cost_eur)} €</p>
                  </div>
                )}
              </div>
              <Button size="lg" className="w-full mt-4">
                Solicitar Presupuesto
              </Button>
               <p className="text-xs text-muted-foreground text-center mt-3">
                Te contactaremos para ofrecerte una solución a medida.
              </p>
            </CardContent>
          </Card>
          
          <div className="space-y-6">
            <div>
              <h2 className="text-xl font-semibold mb-3 border-b pb-2">Especificaciones Técnicas</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3 text-sm">
                <SpecItem icon={<Zap className="text-primary"/>} label="Potencia" value={`${charger.power_kw} kW`} />
                <SpecItem icon={<Settings className="text-primary"/>} label="Tipo de Conector" value={charger.connector_type} />
                {charger.efficiency && <SpecItem icon={<ShieldCheck className="text-primary"/>} label="Eficiencia" value={`${charger.efficiency}%`} />}
                {charger.dimensions && <SpecItem icon={<Package className="text-primary"/>} label="Dimensiones" value={charger.dimensions} />}
                {charger.weight_kg && <SpecItem icon={<Palette className="text-primary"/>} label="Peso" value={`${charger.weight_kg} kg`} />}
                {charger.warranty_years && <SpecItem icon={<CalendarDays className="text-primary"/>} label="Garantía" value={`${charger.warranty_years} años`} />}
              </div>
            </div>

            {charger.description && (
              <div>
                <h2 className="text-xl font-semibold mb-3 border-b pb-2">Descripción</h2>
                <p className="text-muted-foreground whitespace-pre-line leading-relaxed">{charger.description}</p>
              </div>
            )}

            {charger.features && charger.features.length > 0 && (
              <div>
                <h2 className="text-xl font-semibold mb-3 border-b pb-2">Características Destacadas</h2>
                <ul className="space-y-2">
                  {charger.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-muted-foreground">
                      <Tag className="h-4 w-4 mr-2 text-primary flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            )}
            
            {charger.compatibility_notes && (
               <div>
                <h2 className="text-xl font-semibold mb-3 border-b pb-2">Notas de Compatibilidad</h2>
                <p className="text-muted-foreground whitespace-pre-line leading-relaxed">{charger.compatibility_notes}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

interface SpecItemProps {
  icon: React.ReactNode;
  label: string;
  value: string | number;
}

function SpecItem({ icon, label, value }: SpecItemProps) {
  return (
    <div className="flex items-center">
      <span className="mr-2">{icon}</span>
      <span className="font-medium text-foreground">{label}:</span>
      <span className="ml-1.5 text-muted-foreground">{value}</span>
    </div>
  );
}