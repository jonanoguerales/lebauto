"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { fetchElectricVehicles } from "@/app/supabase/supabase";
import type { Car } from "@/lib/definitions";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import CarCardGrid from "@/features/catalog-cars/components/CarCardGrid";
import { CarCardSkeleton } from "@/features/car/skeleton/CarSkeleton";
import { motion } from "framer-motion"; 
import { useInView } from "react-intersection-observer"; 

const sectionContainerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
      when: "beforeChildren", 
      staggerChildren: 0.05,
    },
  },
};

const headerItemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const carCardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function ElectricVehiclesSection() {
  const [electricVehicles, setElectricVehicles] = useState<Car[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const isDesktop = useMediaQuery("(min-width: 1024px)");
  const [mounted, setMounted] = useState(false);

  const { ref, inView } = useInView({
    triggerOnce: true, 
    threshold: 0.1, 
  });

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const loadElectricVehicles = async () => {
      setIsLoading(true);
      try {
        const vehicles = await fetchElectricVehicles(4);
        setElectricVehicles(vehicles);
      } catch (error) {
        console.error("Error:", error);
      } finally {
        setIsLoading(false);
      }
    };

    loadElectricVehicles();
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <motion.section
      className="py-20"
      id="electric-vehicles-section"
      ref={ref}
      variants={sectionContainerVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
    >
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
          <motion.div variants={headerItemVariants}>
            <h2 className="text-3xl font-bold">¿Buscas un vehículo eléctrico?</h2>
            <p className="text-muted-foreground mt-2">
              Descubre nuestra selección de vehículos 100% eléctricos
            </p>
          </motion.div>
          <motion.div variants={headerItemVariants}>
            <Button variant="outline" className="group" asChild>
              <Link href="/coches-segunda-mano?fuel=Eléctrico">
                Ver todos los vehículos eléctricos
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </motion.div>
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
              <Carousel
                className="w-full"
                opts={{
                  align: "start",
                  loop: true,
                  containScroll: false,
                }}
              >
                <CarouselContent>
                  {Array.from({ length: 4 }).map((_, i) => (
                    <CarouselItem key={i} className="md:basis-[48%] lg:basis-[32%] sm:basis-[65%] basis-[85%]">
                      <CarCardSkeleton />
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="hidden md:block left-2 z-10" />
                <CarouselNext className="hidden md:block right-2 z-10" />
              </Carousel>
            </div>
          )
        ) : (
          <>
            {isDesktop && (
              <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {electricVehicles.map((vehicle) => (
                  <motion.div key={vehicle.id} variants={carCardVariants}>
                    <CarCardGrid car={vehicle} />
                  </motion.div>
                ))}
              </motion.div>
            )}

            {!isDesktop && (
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
                    {electricVehicles.map((vehicle) => (
                      <CarouselItem key={vehicle.id} className="md:basis-[48%] lg:basis-[32%] sm:basis-[65%] basis-[85%]">
                        <motion.div variants={carCardVariants}>
                          <CarCardGrid car={vehicle} />
                        </motion.div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious className="hidden md:block left-2 z-10" />
                  <CarouselNext className="hidden md:block right-2 z-10" />
                </Carousel>
              </div>
            )}
          </>
        )}
      </div>
    </motion.section>
  );
}