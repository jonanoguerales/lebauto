"use client";

import { useState, useEffect } from "react";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Zap } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import type { Charger } from "@/lib/definitions";
import { fetchChargers } from "@/app/supabase/supabase";
import ChargerCard from "@/features/chargers/components/ChargerCard";
import { ChargerCardSkeleton } from "@/features/chargers/skeletons/ChargerSkeletons";
import { useCarouselStore } from "@/lib/carouselStore";

const CHARGERS_SECTION_CAROUSEL_ID = "homeChargersSectionCarousel";

export default function ElectricChargersSection() {
  const [chargers, setChargers] = useState<Charger[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [hasMounted, setHasMounted] = useState(false);
  const isDesktop = useMediaQuery("(min-width: 1024px)");

  const [carouselApi, setCarouselApi] = useState<CarouselApi | undefined>();
  const { setActiveSlide: setCarouselStoreActiveSlide, getActiveSlide: getCarouselStoreActiveSlide } = useCarouselStore();
  

  const [initialCarouselIndex, setInitialCarouselIndex] = useState(() => {
    return getCarouselStoreActiveSlide(CHARGERS_SECTION_CAROUSEL_ID) || 0;
  });

  useEffect(() => {
    setHasMounted(true);
    const loadChargers = async () => {
      setIsLoading(true);
      try {
        const fetchedChargers = await fetchChargers();
        const itemsToDisplay = fetchedChargers.slice(0, 8);
        setChargers(itemsToDisplay);

        const numItems = itemsToDisplay.length;
        let currentStoredIndex = getCarouselStoreActiveSlide(CHARGERS_SECTION_CAROUSEL_ID) || 0;

        if (numItems > 0) {
          if (currentStoredIndex >= numItems) {
            currentStoredIndex = numItems - 1;
            setCarouselStoreActiveSlide(CHARGERS_SECTION_CAROUSEL_ID, currentStoredIndex);
          }
        } else {
          currentStoredIndex = 0;
          setCarouselStoreActiveSlide(CHARGERS_SECTION_CAROUSEL_ID, currentStoredIndex);
        }
        setInitialCarouselIndex(currentStoredIndex);
      } catch (error) {
        console.error("Error fetching chargers for home section:", error);
      } finally {
        setIsLoading(false);
      }
    };
    loadChargers();
  }, []);

  useEffect(() => {
    if (isDesktop || !carouselApi) {
      return;
    }
    if (carouselApi.selectedScrollSnap() !== initialCarouselIndex) {
      carouselApi.scrollTo(initialCarouselIndex, true);
    }
    const onSelect = () => {
      if (carouselApi) {
        setCarouselStoreActiveSlide(
          CHARGERS_SECTION_CAROUSEL_ID,
          carouselApi.selectedScrollSnap()
        );
      }
    };
    carouselApi.on("select", onSelect);
    return () => {
      if (carouselApi) {
        carouselApi.off("select", onSelect);
      }
    };
  }, [isDesktop, carouselApi, setCarouselStoreActiveSlide, initialCarouselIndex]);



  if (!hasMounted) {
    return null;
  }

  return (
    <section
      className="py-20"
      role="region"
      aria-labelledby="electric-chargers-title"
    >
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-4">
          <div>
            <Badge className="mb-3" variant="outline">
              <Zap className="h-3 w-3 mr-1.5" /> Soluciones de Carga
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold">
              Cargadores para tu Vehículo Eléctrico
            </h2>
            <p className="text-lg text-muted-foreground mt-2 max-w-2xl">
              Instalamos el punto de carga que necesitas en tu vivienda,
              comunidad o empresa.
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
          isDesktop ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {Array.from({ length: 4 }).map((_, i) => (
                <ChargerCardSkeleton key={i} />
              ))}
            </div>
          ) : (
            <div className="relative overflow-hidden">
              <Carousel className="w-full" opts={{ align: "start" }}>
                <CarouselContent>
                  {Array.from({ length: 2 }).map((_, i) => (
                    <CarouselItem
                      key={i}
                      className="md:basis-[48%] sm:basis-[65%] basis-[85%]"
                    >
                      <ChargerCardSkeleton />
                    </CarouselItem>
                  ))}
                </CarouselContent>
              </Carousel>
            </div>
          )
        ) : chargers.length === 0 ? (
          <p className="text-center text-muted-foreground">
            No hay cargadores destacados en este momento.
          </p>
        ) : isDesktop ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {chargers.slice(0,4).map((charger) => (
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
                loop: chargers.length > 1,
                startIndex: initialCarouselIndex,
                duration: 25,
              }}
            >
              <CarouselContent>
                {chargers.map((charger) => (
                  <CarouselItem
                    key={charger.id}
                    className="md:basis-[48%] sm:basis-[65%] basis-[85%]"
                  >
                    <ChargerCard charger={charger} />
                  </CarouselItem>
                ))}
              </CarouselContent>
              {chargers.length > 1 && (
                <>
                  <CarouselPrevious className="hidden md:flex left-2 z-10" />
                  <CarouselNext className="hidden md:flex right-2 z-10" />
                </>
              )}
            </Carousel>
          </div>
        )}
      </div>
    </section>
  );
}