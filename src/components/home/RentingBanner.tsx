"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";

export default function RentingBanner() {
  return (
    <section className="py-16 bg-white max-w-[462px] md:max-w-full">
      <div className="container mx-auto">
        <div className="bg-gradient-to-r from-[#708ba0] to-[#193f58] rounded-xl overflow-hidden shadow-lg">
          <div className="relative flex flex-col md:flex-row items-center">
            <div className="p-8 md:pr-40 lg:pr-16 md:px-12 md:w-1/2 lg:w-2/3">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                ¡Renting a tu medida sin entrada inicial!
              </h3>
              <p className="text-blue-100 mb-6">
                Disfruta de tu vehículo con todo incluido: seguro,
                mantenimiento, asistencia y mucho más por una cuota mensual
                fija.
              </p>
              <Button
                className="bg-white text-[#193f58] hover:bg-blue-50"
                size="lg"
                asChild
              >
                <Link href="/renting">
                  Más información
                  <ArrowRight className="ml-2 h-4 w-4 text-[#193f58]" />
                </Link>
              </Button>
            </div>
            <div className="md:w-1/2 lg:w-1/3 w-full h-64 md:h-auto">
              <div className="absolute bottom-0 left-0 w-full flex justify-end">
                <Image
                  src="/imagen-renting.png"
                  alt="Renting de vehículos"
                  width={400}
                  height={300}
                  className="object-contain"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
