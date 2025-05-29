"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion"; 
import { useInView } from "react-intersection-observer"; 

const sectionContainerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
      when: "beforeChildren", 
      staggerChildren: 0.15, 
    },
  },
};

const contentVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function RentingBanner() {
  const { ref, inView } = useInView({
    triggerOnce: true, 
    threshold: 0.1, 
  });

  return (
    <motion.section
      className="sm:pt-16 container mx-auto flex items-center justify-center"
      ref={ref}
      variants={sectionContainerVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"} 
    >
      <div className="bg-gradient-to-r from-[#708ba0] to-[#193f58] rounded-xl overflow-hidden shadow-lg w-[400px] md:w-[1440px]">
        <div className="relative flex flex-col md:flex-row items-center">
          <motion.div className="p-8 lg:pr-16 md:px-12 md:w-1/2 lg:w-2/3" variants={contentVariants}>
            <motion.h3 className="text-2xl md:text-3xl font-bold text-white mb-4" variants={contentVariants}>
              ¡Renting a tu medida sin entrada inicial!
            </motion.h3>
            <motion.p className="text-blue-100 mb-6" variants={contentVariants}>
              Disfruta de tu vehículo con todo incluido: seguro, mantenimiento,
              asistencia y mucho más por una cuota mensual fija.
            </motion.p>
            <motion.div variants={contentVariants}>
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
            </motion.div>
          </motion.div>
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
    </motion.section>
  );
}