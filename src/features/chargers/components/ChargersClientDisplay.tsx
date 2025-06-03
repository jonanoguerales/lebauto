"use client";

import { useState } from "react";
import type { Charger } from "@/lib/definitions";
import ChargerCard from "./ChargerCard";

interface ChargersClientDisplayProps {
  initialChargers: Charger[];
}

export default function ChargersClientDisplay({ initialChargers }: ChargersClientDisplayProps) {
  const [chargers, setChargers] = useState<Charger[]>(initialChargers);

  return (
    <div className="flex flex-col lg:flex-row gap-8">
      <section className="flex-1">
        {chargers.length === 0 ? (
          <div className="text-center py-12">
            <h3 className="text-xl font-medium mb-2">No se encontraron cargadores</h3>
            <p className="text-muted-foreground">
              Intenta ajustar los filtros o revisa más tarde.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {chargers.map((charger) => (
              <ChargerCard key={charger.id} charger={charger} />
            ))}
          </div>
        )}
      </section>
    </div>
  );
}