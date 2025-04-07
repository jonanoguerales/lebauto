"use client"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Phone, Clock } from "lucide-react"
import { useMediaQuery } from "@/hooks/useMediaQuery"
import { useEffect, useState } from "react"

type Location = {
  id: number
  city: string
  phone: string
  address: string
  addressLine2: string
  hours: string[]
  hoursWeekend: string[]
}

const locations: Location[] = [
  {
    id: 1,
    city: "Madrid",
    phone: "+34 919 49 48 25",
    address: "Calle Límite 16",
    addressLine2: "Torrejón de Ardoz",
    hours: ["Lunes a viernes de 9:00 a 20:00"],
    hoursWeekend: ["Sábados de 10:00 a 14:00 y 16:00 a 20:00"],
  },
  {
    id: 2,
    city: "Barcelona",
    phone: "+34 932 71 33 33",
    address: "Calle Binéfar número 21-25",
    addressLine2: "Barcelona",
    hours: ["Lunes a viernes de 9:00 a 21:00"],
    hoursWeekend: ["Sábados de 10:00 a 14:00 y 16:00 a 21:00"],
  },
  {
    id: 3,
    city: "Valencia",
    phone: "+34 963 22 44 55",
    address: "Avenida del Puerto 45",
    addressLine2: "Valencia",
    hours: ["Lunes a viernes de 9:00 a 20:00"],
    hoursWeekend: ["Sábados de 10:00 a 14:00"],
  },
  {
    id: 4,
    city: "Sevilla",
    phone: "+34 954 33 22 11",
    address: "Calle Luis Montoto 102",
    addressLine2: "Sevilla",
    hours: ["Lunes a viernes de 9:30 a 20:30"],
    hoursWeekend: ["Sábados de 10:00 a 14:00"],
  },
  {
    id: 5,
    city: "Bilbao",
    phone: "+34 944 27 88 99",
    address: "Gran Vía Don Diego López de Haro 33",
    addressLine2: "Bilbao",
    hours: ["Lunes a viernes de 9:00 a 20:00"],
    hoursWeekend: ["Sábados de 10:00 a 14:00"],
  },
]

export default function LocationsSection() {
  const [mounted, setMounted] = useState(false);
  const isDesktop = useMediaQuery("(min-width: 1024px)")

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Encuentra tu centro Lebauto</h2>

        {isDesktop ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {locations.map((location) => (
              <LocationCard key={location.id} location={location} />
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
                {locations.map((location) => (
                  <CarouselItem key={location.id} className="md:basis-[48%] lg:basis-[32%] sm:basis-[65%] basis-[85%]">
                    <LocationCard location={location} />
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-2 z-10" />
              <CarouselNext className="right-2 z-10" />
            </Carousel>
          </div>
        )}
      </div>
    </section>
  )
}

function LocationCard({ location }: { location: Location }) {
  return (
    <Card className="h-full">
      <CardContent className="p-6">
        <h3 className="text-2xl font-bold mb-4">{location.city}</h3>

        <div className="space-y-4">
          <div className="flex items-start gap-3">
            <Phone className="h-5 w-5 text-gray-500 mt-0.5" />
            <div>
              <p className="text-gray-500 font-medium mb-1">Teléfono comercial</p>
              <p>{location.phone}</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <MapPin className="h-5 w-5 text-gray-500 mt-0.5" />
            <div>
              <p className="text-gray-500 font-medium mb-1">Ver ubicación</p>
              <p>{location.address}</p>
              <p>{location.addressLine2}</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <Clock className="h-5 w-5 text-gray-500 mt-0.5" />
            <div>
              <p className="text-gray-500 font-medium mb-1">Horario</p>
              {location.hours.map((hour, i) => (
                <p key={i}>{hour}</p>
              ))}
              {location.hoursWeekend.map((hour, i) => (
                <p key={i}>{hour}</p>
              ))}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

