"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { fetchElectricVehicles } from "@/app/supabase/supabase";
import type { Car } from "@/lib/definitions";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import CarCardGrid from "@/features/catalog-cars/components/CarCardGrid";
import { CarCardSkeleton } from "@/features/car/skeleton/CarSkeleton";
import { useCarouselStore } from "@/lib/carouselStore";

const ELECTRIC_VEHICLES_CAROUSEL_ID = "electricVehiclesSectionCarousel";


export default function ElectricVehiclesSection() {
  const [electricVehicles, setElectricVehicles] = useState<Car[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const isDesktop = useMediaQuery("(min-width: 1024px)");
  const [mounted, setMounted] = useState(false);

  const [carouselApi, setCarouselApi] = useState<CarouselApi | undefined>();
  const { setActiveSlide, getActiveSlide } = useCarouselStore();

  const [initialCarouselIndex, setInitialCarouselIndex] = useState(() => {
    return getActiveSlide(ELECTRIC_VEHICLES_CAROUSEL_ID) || 0;
  });

  useEffect(() => {
    setMounted(true);
    const loadElectricVehicles = async () => {
      setIsLoading(true);
      try {
        const vehicles = await fetchElectricVehicles(8);
        setElectricVehicles(vehicles);

        const numItems = vehicles.length;
        let currentStoredIndex = getActiveSlide(ELECTRIC_VEHICLES_CAROUSEL_ID) || 0;
        
        if (numItems > 0) {
            if (currentStoredIndex >= numItems) {
                currentStoredIndex = numItems - 1;
                setActiveSlide(ELECTRIC_VEHICLES_CAROUSEL_ID, currentStoredIndex);
            }
        } else {
            currentStoredIndex = 0;
            setActiveSlide(ELECTRIC_VEHICLES_CAROUSEL_ID, currentStoredIndex);
        }
        setInitialCarouselIndex(currentStoredIndex);

      } catch (error) {
        console.error("Error fetching electric vehicles:", error);
      } finally {
        setIsLoading(false);
      }
    };
    loadElectricVehicles();
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
        setActiveSlide(
          ELECTRIC_VEHICLES_CAROUSEL_ID,
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
  }, [isDesktop, carouselApi, setActiveSlide, initialCarouselIndex]);


  if (!mounted) {
    return null;
  }

  return (
    <section className="py-20">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
          <div>
            <h2 className="text-3xl font-bold">¿Buscas un vehículo eléctrico?</h2>
            <p className="text-muted-foreground mt-2">
              Descubre nuestra selección de vehículos 100% eléctricos
            </p>
          </div>
          <Button variant="outline" className="group shrink-0" asChild>
            <Link href="/coches-segunda-mano?fuel=Eléctrico">
              Ver todos los vehículos eléctricos
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>

        {isLoading ? (
          isDesktop ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {Array.from({ length: 4 }).map((_, i) => (
                <CarCardSkeleton key={i} />
              ))}
            </div>
          ) : (
            <div className="relative overflow-hidden">
              <Carousel className="w-full" opts={{align: "start"}}>
                <CarouselContent>
                  {Array.from({ length: 2 }).map((_, i) => (
                    <CarouselItem key={i} className="md:basis-[48%] sm:basis-[65%] basis-[85%]">
                      <CarCardSkeleton />
                    </CarouselItem>
                  ))}
                </CarouselContent>
              </Carousel>
            </div>
          )
        ) : electricVehicles.length === 0 ? (
            <p className="text-center text-muted-foreground">No hay vehículos eléctricos destacados en este momento.</p>
        ) :(
          <>
            {isDesktop && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {electricVehicles.slice(0, 4).map((vehicle) => (
                  <CarCardGrid key={vehicle.id} car={vehicle} />
                ))}
              </div>
            )}

            {!isDesktop && (
              <div className="relative overflow-hidden">
                <Carousel
                  className="w-full"
                  setApi={setCarouselApi}
                  opts={{
                    align: "start",
                    loop: electricVehicles.length > 1,
                    startIndex: initialCarouselIndex,
                    duration: 25,
                  }}
                >
                  <CarouselContent>
                    {electricVehicles.map((vehicle) => (
                      <CarouselItem key={vehicle.id} className="md:basis-[48%] sm:basis-[65%] basis-[85%]">
                        <CarCardGrid car={vehicle} />
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  {electricVehicles.length > 1 && (
                    <>
                      <CarouselPrevious className="hidden sm:flex left-2 z-10" />
                      <CarouselNext className="hidden sm:flex right-2 z-10" />
                    </>
                  )}
                </Carousel>
              </div>
            )}
          </>
        )}
      </div>
    </section>
  );
}