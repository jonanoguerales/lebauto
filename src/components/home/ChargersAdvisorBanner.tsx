"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "../ui/button";
import { ArrowRight, Zap } from "lucide-react";

export default function ChargersAdvisorBanner() {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto">
        <div className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-100">
          <div className="flex flex-col md:flex-row items-center">
            <div className="p-8 md:p-12 md:w-2/3">
              <div className="inline-flex items-center justify-center p-2 bg-blue-100 rounded-full mb-4">
                <Zap className="h-5 w-5 text-blue-600" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Asesoramiento personalizado en soluciones de carga
              </h3>
              <p className="text-gray-600 mb-6">
                Nuestros expertos te ayudarán a encontrar la solución de carga
                perfecta para tu vehículo eléctrico, adaptada a tus necesidades
                específicas.
              </p>
              <Button className="group" asChild>
                <Link href="/contacto">
                  Solicitar asesoramiento
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
            <div className="relative aspect-[3/2] w-full md:w-1/3">
              <Image
                src="/asesoramiento-cargadores.png"
                alt="Asesoramiento en cargadores eléctricos"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
