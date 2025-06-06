"use client";

import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import type { Car } from "@/lib/definitions";

interface CarLocationInfoProps {
  car: Car; 
}

export default function CarLocationInfo({ car }: CarLocationInfoProps) {
  const dealershipName = car.dealership_name || "Nuestro Concesionario Principal";
  const address = car.dealership_address || "Avenida de los Coches, 123, 28001 Madrid"; 
  const phone = car.dealership_phone || "+34912345678"; 
  const hoursWeekdays = car.dealership_hours_weekdays || "09:30 a 20:30";
  const hoursSaturday = car.dealership_hours_saturday || "10:00 a 14:00 y 17:00 a 20:30";
  const hoursSunday = car.dealership_hours_sunday_status || "Cerrado";

  const mapQuery = car.latitude && car.longitude 
    ? `${car.latitude},${car.longitude}` 
    : address;
  
  const handleCall = () => {
    window.location.href = `tel:${phone.replace(/\s/g, '')}`;
  };

  const handleGetDirections = () => {
    window.open(`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(mapQuery)}`, "_blank");
  };

  return (
    <div className="flex flex-col items-center h-[300px] bg-white p-6 rounded-lg border shadow-md">
      <h3 className="text-xl font-semibold mb-1">{dealershipName}</h3>
      <p className="text-sm text-muted-foreground mb-4">{address}</p>

      <div className="space-y-1 text-sm mb-4">
        <p><strong>Lunes a Viernes:</strong> {hoursWeekdays}</p>
        <p><strong>Sábado:</strong> {hoursSaturday}</p>
        <p><strong>Domingo:</strong> {hoursSunday}</p>
      </div>

      <div className="flex flex-col sm:flex-row gap-2">
        <Button variant="outline" className="flex-1" onClick={handleCall} aria-label={`Llamar a ${dealershipName}`}>
          <Phone className="mr-2 h-4 w-4" /> Llamar
        </Button>
        <Button className="flex-1" onClick={handleGetDirections} aria-label={`Obtener cómo llegar a ${dealershipName}`}>
          Cómo llegar
        </Button>
      </div>
    </div>
  );
}