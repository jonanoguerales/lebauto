"use client";

import { ebGaramond, montserrat } from "@/utils/fonts";
import { Battery, ShieldCheck, Zap } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import React from "react"; 

const btnLink = [
  {
    href: "/coches-segunda-mano",
    label: "Comprar",
    ariaLabel: "Ver catálogo de coches de segunda mano",
  },
  {
    href: "/gestion-de-venta",
    label: "Vender",
    ariaLabel: "Vender tu coche",
  },
  {
    href: "/renting",
    label: "Renting",
    ariaLabel: "Ver opciones de renting",
  },
];

const cardsData = [
  {
    title: "Carga inteligente",
    description: "Soluciones de carga para tu hogar o negocio",
    icon: <Zap className="size-4 md:size-8 text-white" />,
  },
  {
    title: "Autonomía extendida",
    description: "Vehículos con hasta 600km de autonomía",
    icon: <Battery className="size-4 md:size-8 text-white" />,
  },
  {
    title: "Garantía completa",
    description: "Todos nuestros vehículos con garantía extendida",
    icon: <ShieldCheck className="size-4 md:size-8 text-white" />,
  },
];

const textRevealVariants = {
  hidden: { clipPath: 'inset(0 100% 0 0)' }, 
  visible: { clipPath: 'inset(0 0% 0 0)', transition: { duration: 0.8, ease: 'easeOut' } } 
};

const buttonContainerVariants = {
  hidden: { opacity: 0 }, 
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1, 
      delayChildren: 1.5 
    }
  }
};

const individualButtonVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } }
};

const cardVariants = {
  initial: { opacity: 0, x: -50 },
  animate: (index: number) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, delay: 1 + index * 0.2 },
  }),
};

export default function HeroSection() {
  return (
    <section className="relative h-svh flex overflow-hidden" role="banner">
      <div className="absolute inset-0 z-0">
        <picture>
          <source
            media="(max-width: 1024px)"
            srcSet="/imgHome-mobile2.png"
            type="image/png"
          />
          <source
            media="(min-width: 1980px) and (max-width: 3440px)"
            srcSet="/imgHome-ultrawide2.png"
            type="image/png"
          />
          <img
            src="/imgHome2.png"
            alt="Luxury Car"
            className="object-cover w-full h-full"
            loading="eager"
          />
        </picture>
        <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-black/10 to-black/50" />
      </div>

      <div className="relative flex flex-col justify-between z-10 container mx-auto px-0 pb-0 pt-16 md:px-8 md:pb-12 md:pt-24 flex-1">
        <div className="max-w-2xl flex flex-col items-center gap-6 mt-2 md:mt-20 short:mt-4 ">
          <div className="flex flex-col items-center gap-1">
            <motion.h1
              className={`${montserrat.className} text-4xl md:text-5xl lg:text-6xl text-center font-extrabold text-white overflow-hidden`}
              variants={textRevealVariants}
              initial="hidden"
              animate="visible"
              style={{ whiteSpace: 'nowrap' }}
            >
              LEBAUTO
            </motion.h1>
            <motion.p
              className={`${ebGaramond.className} italic max-md:font-semibold text-2xl md:text-3xl lg:text-5xl text-gray-200 overflow-hidden`}
              variants={textRevealVariants}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.3, ...textRevealVariants.visible.transition }}
              style={{ whiteSpace: 'nowrap' }}
            >
              La referencia en coches eléctricos
            </motion.p>
          </div>
          <motion.div
            className="flex items-center gap-2"
            variants={buttonContainerVariants}
            initial="hidden"
            animate="visible"
          >
            {btnLink.map((btn, index) => (
              <motion.div key={index} variants={individualButtonVariants}>
                <Link
                  href={btn.href}
                  className="bg-white text-black font-semibold px-4 py-2 text-base md:text-lg rounded-[0.5rem] hover:opacity-80 w-[100px] text-center"
                  aria-label={btn.ariaLabel}
                >
                  {btn.label}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 w-full gap-2 md:gap-6 mt-8 max-w-5xl mx-auto pb-6 px-4 md:p-0">
          {cardsData.map((card, index) => (
            <motion.div
              key={index}
              className="md:bg-black/40 backdrop-blur-sm p-2 md:p-6 rounded-xl flex items-center gap-4 text-white"
              variants={cardVariants}
              initial="initial"
              animate="animate"
              custom={index}
            >
              <div className="bg-white/10 p-3 rounded-full">{card.icon}</div>
              <div>
                <h3 className="font-bold text-sm md:text-lg mb-1">
                  {card.title}
                </h3>
                <p className="text-gray-300 text-xs md:text-sm">
                  {card.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}