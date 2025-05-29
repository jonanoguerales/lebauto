"use client";

import Link from "next/link";
import { ArrowRight, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion"; 
import { useInView } from "react-intersection-observer";

const bannerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
      when: "beforeChildren",
      staggerChildren: 0.1, 
    },
  },
};

const childVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function ChargersAdvisorBanner() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1, 
  });

  return (
    <motion.section
      className="container mx-auto"
      ref={ref}
      variants={bannerVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"} 
    >
      <div className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-100">
        <div className="flex flex-col md:flex-row items-center">
          <div className="p-8 md:px-12 w-full">
            <motion.div className="flex items-center gap-4 mb-4" variants={childVariants}>
              <div className="inline-flex items-center justify-center p-2 bg-blue-100 rounded-full">
                <Zap className="h-5 w-5 text-blue-600" />
              </div>
              <motion.h3 className="text-2xl md:text-3xl font-bold" variants={childVariants}>
                Asesoramiento personalizado en soluciones de carga
              </motion.h3>
            </motion.div>
            <motion.p className="text-gray-600 mb-6" variants={childVariants}>
              Nuestros expertos te ayudarán a encontrar la solución de carga
              perfecta para tu vehículo eléctrico, adaptada a tus necesidades
              específicas.
            </motion.p>
            <motion.div variants={childVariants}>
              <Button className="group" asChild>
                <Link href="/contacto">
                  Solicitar asesoramiento
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}