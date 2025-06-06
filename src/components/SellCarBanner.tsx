"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function SellCarBanner() {
  return (
    <section className="py-8 md:py-12">
      <div className="container mx-auto px-0">
        <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
          <div className="grid md:grid-cols-[1fr_auto_1fr] items-center p-6 md:p-8 gap-6 md:gap-8">
            <div className="flex justify-center md:justify-end">
              <div className="relative w-20 h-20 md:w-24 md:h-24 text-primary">
                <Image 
                  src="/icons/sell-car-exchange.svg"
                  alt="Icono de venta e intercambio de coches"
                  layout="fill"
                  className="object-contain"
                />
              </div>
            </div>

            <div className="text-center md:text-left">
              <h3 className="text-lg sm:text-xl font-semibold text-slate-800 mb-1">
                ¿Necesitas vender tu coche o entregarlo como parte de pago?
              </h3>
              <p className="text-2xl sm:text-[1.7rem] font-bold text-sky-600">
                ¡Nosotros te lo compramos!
              </p>
            </div>

            <div className="flex justify-center md:justify-start">
              <Button
                size="lg"
                className="bg-sky-500 hover:bg-sky-600 text-white font-semibold px-6 md:px-8 py-3 text-base md:text-lg rounded-lg w-full sm:w-auto"
                asChild
              >
                <Link href="/gestion-de-venta">
                  TASAR VEHÍCULO GRATIS
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}