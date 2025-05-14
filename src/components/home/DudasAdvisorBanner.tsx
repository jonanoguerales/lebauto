"use client";

import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";

export default function DudasAdvisorBanner() {
  return (
    <section className="container mx-auto display flex items-center justify-center">
      <div className="bg-[#e63946] rounded-xl overflow-hidden shadow-lg w-[400px] md:w-[990px]">
        <div className="relative flex flex-col md:flex-row items-center">
          <div className="flex flex-col items-center justify-center w-full z-[1] px-4 py-8 md:pl-4 md:py-0 md:pr-0 lg:pl-12">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-4">
              ¿Dudas entre tantos coches?
            </h3>
            <Button
              className="bg-white text-[#193f58] hover:bg-blue-50"
              size="lg"
              asChild
            >
              <Link href="/renting">Te llamamos</Link>
            </Button>
          </div>
          <div className="w-full h-36 md:h-48">
            <div className="absolute bottom-0 left-0 w-full flex justify-end">
              <Image
                src="/dudas-rojo.png"
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
    </section>
  );
}
