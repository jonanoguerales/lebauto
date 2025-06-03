"use client";

import { useState, useEffect } from "react";
import { useMediaQuery } from "@/hooks/useMediaQuery";
// import Image from "next/image"; // Ya no es necesario aquí directamente
import Link from "next/link";
import { Button } from "@/components/ui/button";
// import { Card, CardContent } from "@/components/ui/card"; // Ya no es necesario aquí directamente
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Zap } from "lucide-react"; // Check, Home, Building2 eliminados si no se usan aquí
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi, // Importar CarouselApi
} from "@/components/ui/carousel";
import type { Charger } from "@/lib/definitions"; // Asegúrate que Charger esté bien definido
import { fetchChargers } from "@/app/supabase/supabase"; // Necesitaremos esta función
import ChargerCard from "@/features/chargers/components/ChargerCard"; // Importamos el nuevo ChargerCard
import { ChargerCardSkeleton } from "@/features/chargers/skeletons/ChargerSkeletons"; // Importamos el skeleton
import { useCarouselStore } from "@/lib/carouselStore"; // Para persistencia del slide activo

const CHARGERS_SECTION_CAROUSEL_ID = "homeChargersSectionCarousel";

export default function ElectricChargersSection() {
  const [chargers, setChargers] = useState<Charger[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [hasMounted, setHasMounted] = useState(false);
  const isDesktop = useMediaQuery("(min-width: 1024px)");

  const [carouselApi, setCarouselApi] = useState<CarouselApi | undefined>();
  const { setActiveSlide, getActiveSlide } = useCarouselStore();
  const initialCarouselIndex = getActiveSlide(CHARGERS_SECTION_CAROUSEL_ID) || 0;


  useEffect(() => {
    setHasMounted(true);
    const loadChargers = async () => {
      setIsLoading(true);
      try {
        // Podrías querer filtrar por categoría aquí o tomar solo algunos
        const fetchedChargers = await fetchChargers();
        setChargers(fetchedChargers.slice(0, 4)); // Tomar solo 4 para la home, por ejemplo
      } catch (error) {
        console.error("Error fetching chargers for home section:", error);
      } finally {
        setIsLoading(false);
      }
    };
    loadChargers();
  }, []);

  useEffect(() => {
    if (!isDesktop && carouselApi) {
      const currentStoredIndex = getActiveSlide(CHARGERS_SECTION_CAROUSEL_ID) || 0;
      if (currentStoredIndex !== carouselApi.selectedScrollSnap()) {
        carouselApi.scrollTo(currentStoredIndex, true);
      }
      const onSelect = () => {
        if (carouselApi) {
          setActiveSlide(CHARGERS_SECTION_CAROUSEL_ID, carouselApi.selectedScrollSnap());
        }
      };
      carouselApi.on("select", onSelect);
      return () => {
        if (carouselApi) {
          carouselApi.off("select", onSelect);
        }
      };
    }
  }, [isDesktop, carouselApi, setActiveSlide, getActiveSlide]);


  if (!hasMounted) {
    return null; // O un skeleton básico si prefieres para evitar FOUC
  }

  return (
    <section className="py-20">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-4">
          <div>
            <Badge className="mb-3" variant="outline">
              <Zap className="h-3 w-3 mr-1.5" /> Soluciones de Carga
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold">Cargadores para tu Vehículo Eléctrico</h2>
            <p className="text-lg text-muted-foreground mt-2 max-w-2xl">
              Instalamos el punto de carga que necesitas en tu vivienda, comunidad o empresa.
            </p>
          </div>
           <Button variant="outline" className="group shrink-0" asChild>
            <Link href="/cargadores">
              Ver todos los cargadores
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>

        {isLoading ? (
          // Skeleton mientras cargan los datos
          isDesktop ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {Array.from({ length: 4 }).map((_, i) => <ChargerCardSkeleton key={i} />)}
            </div>
          ) : (
            <div className="relative overflow-hidden">
               <Carousel className="w-full" opts={{ align: "start" }}>
                <CarouselContent>
                  {Array.from({ length: 2 }).map((_, i) => (
                    <CarouselItem key={i} className="md:basis-[48%] sm:basis-[65%] basis-[85%]">
                      <ChargerCardSkeleton />
                    </CarouselItem>
                  ))}
                </CarouselContent>
              </Carousel>
            </div>
          )
        ) : chargers.length === 0 ? (
            <p className="text-center text-muted-foreground">No hay cargadores destacados en este momento.</p>
        ) : (
          // Renderizar cargadores una vez cargados
          isDesktop ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {chargers.map((charger) => (
                <ChargerCard key={charger.id} charger={charger} />
              ))}
            </div>
          ) : (
            <div className="relative overflow-hidden">
              <Carousel
                className="w-full"
                setApi={setCarouselApi}
                opts={{
                  align: "start",
                  loop: chargers.length > 1, // Activar loop si hay más de un item
                  startIndex: initialCarouselIndex,
                }}
              >
                <CarouselContent>
                  {chargers.map((charger) => (
                    <CarouselItem key={charger.id} className="md:basis-[48%] sm:basis-[65%] basis-[85%]">
                      <ChargerCard charger={charger} />
                    </CarouselItem>
                  ))}
                </CarouselContent>
                {chargers.length > 1 && ( // Mostrar botones solo si hay más de un item
                  <>
                    <CarouselPrevious className="hidden md:flex left-2 z-10" />
                    <CarouselNext className="hidden md:flex right-2 z-10" />
                  </>
                )}
              </Carousel>
            </div>
          )
        )}
      </div>
    </section>
  );
}