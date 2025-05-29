"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";
import { useMediaQuery } from "@/hooks/useMediaQuery";

const benefits = [
  "Valoración gratuita de tu vehículo",
  "Gestión completa de la documentación",
  "Pago inmediato y seguro",
  "Sin complicaciones ni intermediarios",
  "Nos encargamos de todo el proceso",
];

const sectionOverallVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.1 } },
};

const titleVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut", delay: 0.2 } 
  }
};

const descriptionVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.4 } }, 
};

const listContainerVariants = {
  hidden: {}, 
  visible: {
    transition: {
      delayChildren: 0.6,
      staggerChildren: 0.1,
    },
  },
};

const listItemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.3, ease: "easeOut" } },
};

const buttonVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut", delay: 0.2 } },
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: "easeOut", delay: 0.1 } },
};

const infoCardVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut", delay: 0.4 } },
};

export default function SellYourCarSection() {
  const isDesktop = useMediaQuery("(min-width: 768px)");

  const mobileTopPadding = "pt-20";
  const viewportAmountGeneral = 0.15;
  const buttonViewportAmount = isDesktop ? 0.4 : 0.2;

  return (
    <motion.section
      className="pb-20 sm:pt-20 initially-hidden"
      role="region"
      aria-labelledby="sell-your-car-title"
      variants={sectionOverallVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.05 }}
    >
      <div className="container mx-auto grid md:grid-cols-2 gap-x-12 pt gap-y-8 md:gap-y-12 items-center">
        <div className={`order-2 md:order-1 ${!isDesktop ? mobileTopPadding : ""}`}>
          <motion.h2
            id="sell-your-car-title"
            className="text-3xl md:text-4xl font-bold mb-6" 
            variants={titleVariants} 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: viewportAmountGeneral }}
          >
            Gestionamos la venta de tu coche
          </motion.h2>

          <motion.p
            className="text-lg text-gray-700 mb-8"
            variants={descriptionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: viewportAmountGeneral }}
          >
            ¿Quieres vender tu coche sin complicaciones? Nosotros nos encargamos de todo el proceso, desde la
            valoración hasta la gestión de la documentación, para que tú solo tengas que preocuparte de recibir el dinero.
          </motion.p>

          <motion.ul
            className="space-y-3 mb-8"
            variants={listContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: viewportAmountGeneral }}
          >
            {benefits.map((benefit) => (
              <motion.li key={benefit} className="flex items-center gap-3" variants={listItemVariants}>
                <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                <span>{benefit}</span>
              </motion.li>
            ))}
          </motion.ul>

          <motion.div
            variants={buttonVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: buttonViewportAmount }}
          >
            <Button asChild size="lg" className="group" aria-label="Ir a la página de gestión de venta">
              <Link href="/gestion-de-venta">
                Vender mi coche
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </motion.div>
        </div>

        <div className="order-1 md:order-2 relative flex justify-center">
          <motion.div
            className="relative w-full max-w-xs md:max-w-lg h-[250px] md:h-[500px] rounded-lg overflow-hidden shadow-xl"
            variants={imageVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: viewportAmountGeneral }}
          >
            <Image
              src="/seccion-gestion-coche.webp"
              alt="Imagen de la gestión de venta de coches"
              fill
              className="object-cover"
              priority
            />
          </motion.div>
          <motion.div
            className="absolute -bottom-[5.5rem] md:-bottom-6 -right-2 md:left-auto md:right-6 bg-primary text-white p-4 rounded-lg shadow-lg text-center w-48 md:w-auto"
            variants={infoCardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }} 
          >
            <p className="text-xl font-bold">¡Valoración gratuita!</p>
            <p>Sin compromiso</p>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}