"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";
import { motion } from "framer-motion"; 
import { useInView } from "react-intersection-observer";

const benefits = [
  "Valoración gratuita de tu vehículo",
  "Gestión completa de la documentación",
  "Pago inmediato y seguro",
  "Sin complicaciones ni intermediarios",
  "Nos encargamos de todo el proceso",
];

const sectionContainerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
      when: "beforeChildren", 
      staggerChildren: 0.1, 
    },
  },
};

const textRevealVariants = {
  hidden: { clipPath: 'inset(0 100% 0 0)' }, 
  visible: { clipPath: 'inset(0 0% 0 0)', transition: { duration: 0.8, ease: 'easeOut' } } 
};

const descriptionVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.3 } }, 
};

const listItemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

const buttonVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut", delay: 0.5 } }, 
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.7, ease: "easeOut" } },
};

const infoCardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut", delay: 0.8 } }, 
};

export default function SellYourCarSection() {
  const { ref, inView } = useInView({
    triggerOnce: true, 
    threshold: 0.1, 
  });

  return (
    <motion.section
      className="pb-20 sm:pt-20"
      role="region"
      aria-labelledby="sell-your-car-title"
      ref={ref}
      variants={sectionContainerVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"} 
    >
      <div className="container mx-auto grid md:grid-cols-2 gap-28 md:gap-12 items-center">
        <div className="order-2 md:order-1">
          <motion.h2
            id="sell-your-car-title"
            className="text-3xl md:text-4xl font-bold mb-6 overflow-hidden"
            variants={textRevealVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            style={{ whiteSpace: 'nowrap' }}
          >
            Gestionamos la venta de tu coche
          </motion.h2>
          <motion.p
            className="text-lg text-gray-700 mb-8"
            variants={descriptionVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            ¿Quieres vender tu coche sin complicaciones? Nosotros nos encargamos de todo el proceso, desde la
            valoración hasta la gestión de la documentación, para que tú solo tengas que preocuparte de recibir el dinero.
          </motion.p>

          <motion.ul
            className="space-y-3 mb-8"
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={sectionContainerVariants} 
          >
            {benefits.map((benefit, index) => (
              <motion.li key={index} className="flex items-center gap-3" variants={listItemVariants}>
                <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                <span>{benefit}</span>
              </motion.li>
            ))}
          </motion.ul>

          <motion.div variants={buttonVariants}>
            <Button asChild size="lg" className="group" aria-label="Ir a la página de gestión de venta">
              <Link href="/gestion-de-venta">
                Vender mi coche
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </motion.div>
        </div>

        <motion.div className="order-1 md:order-2 relative flex justify-center" variants={imageVariants}>
          <div className="relative w-full max-w-xs md:max-w-lg h-[250px] md:h-[500px] rounded-lg overflow-hidden shadow-xl">
            <Image
              src="/seccion-gestion-coche.webp"
              alt="Imagen de la gestión de venta de coches"
              fill
              className="object-cover"
              priority
            />
          </div>
          <motion.div
            className="absolute -bottom-[5.5rem] md:-bottom-6 -right-2 md:left-auto md:right-6 bg-primary text-white p-4 rounded-lg shadow-lg text-center w-48 md:w-auto"
            variants={infoCardVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            <p className="text-xl font-bold">¡Valoración gratuita!</p>
            <p>Sin compromiso</p>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}