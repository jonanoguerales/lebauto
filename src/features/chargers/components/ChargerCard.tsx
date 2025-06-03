import Image from "next/image";
import Link from "next/link";
import type { Charger } from "@/lib/definitions";
import { Badge } from "@/components/ui/badge";
import { Zap, Settings, Home, Building2 } from "lucide-react";
import { formatPrice } from "@/utils/utils";

interface ChargerCardProps {
  charger: Charger;
}

const categoryIcons = {
  home: <Home className="h-4 w-4 mr-1.5" />,
  community: <Building2 className="h-4 w-4 mr-1.5" />,
  business: <Zap className="h-4 w-4 mr-1.5" />,
};

const categoryLabels = {
  home: "Doméstico",
  community: "Comunitario",
  business: "Empresarial",
};

export default function ChargerCard({ charger }: ChargerCardProps) {
  const imageUrl = charger.image_url || "/placeholder.svg";

  return (
    <Link
      href={`/cargadores/${charger.slug || charger.id}`} 
      className=" bg-card rounded-lg border shadow-sm hover:shadow-md transition-all duration-300 group overflow-hidden h-full flex flex-col"
      aria-label={`Ver detalles del cargador ${charger.name}`}
    >
      <div className="relative w-full h-56">
        <Image
          src={imageUrl}
          alt={`Imagen de ${charger.name}`}
          fill
          className="object-contain p-4 group-hover:scale-105 transition-transform duration-300"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        <Badge 
          variant="secondary" 
          className="absolute top-3 right-3 flex items-center"
        >
          {categoryIcons[charger.category]}
          {categoryLabels[charger.category]}
        </Badge>
      </div>

      <div className="p-5 flex flex-col flex-grow">
        <h3 className="text-lg font-semibold mb-1 group-hover:text-primary transition-colors">
          {charger.name}
        </h3>
        {charger.brand && <p className="text-sm text-muted-foreground mb-3">{charger.brand}</p>}
        
        <div className="flex items-center text-sm text-muted-foreground mb-3">
          <Zap className="h-4 w-4 mr-1.5 text-primary" />
          <span>{charger.power_kw} kW</span>
          <span className="mx-1.5">|</span>
          <Settings className="h-4 w-4 mr-1.5 text-primary" />
          <span>{charger.connector_type}</span>
        </div>

        <p className="text-sm text-muted-foreground mb-4 line-clamp-3 flex-grow">
          {charger.description || "Solución de carga eficiente y fiable para tu vehículo eléctrico."}
        </p>

        {charger.features && charger.features.length > 0 && (
          <div className="mb-4">
            <p className="text-xs font-medium text-muted-foreground mb-1">Características destacadas:</p>
            <div className="flex flex-wrap gap-1.5">
              {charger.features.slice(0, 2).map((feature, index) => (
                <Badge key={index} variant="outline" className="text-xs">{feature}</Badge>
              ))}
              {charger.features.length > 2 && <Badge variant="outline" className="text-xs">+{charger.features.length - 2} más</Badge>}
            </div>
          </div>
        )}
        
        <div className="mt-auto pt-4 border-t">
          <div className="flex justify-between items-center">
            <span className="text-sm text-muted-foreground">Precio</span>
            <span className="text-xl font-bold text-primary">
              {formatPrice(charger.price_eur)} €
            </span>
          </div>
          {charger.installation_cost_eur !== undefined && charger.installation_cost_eur > 0 && (
             <p className="text-xs text-muted-foreground text-right mt-0.5">
              Instalación desde {formatPrice(charger.installation_cost_eur)} €
            </p>
          )}
        </div>
      </div>
    </Link>
  );
}