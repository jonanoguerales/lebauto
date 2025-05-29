"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const bannerContentVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
      staggerChildren: 0.15, 
      delayChildren: 0.2,
    },
  },
};

const childVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function DudasAdvisorBanner() {
  return (
    <section className="container mx-auto display flex items-center justify-center">
      <motion.div
        className="bg-[#e63946] rounded-xl overflow-hidden shadow-lg w-[400px] md:w-[990px]"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }} 
        variants={bannerContentVariants}
      >
        <div className="relative flex flex-col md:flex-row items-center">
          <div className="flex flex-col items-center justify-center w-full z-[1] px-4 py-8 md:pl-4 md:py-0 md:pr-0 lg:pl-12">
            <motion.h3
              className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-4"
              variants={childVariants}
            >
              ¿Dudas entre tantos coches?
            </motion.h3>
            <motion.div variants={childVariants}>
              <Button
                className="bg-white text-[#193f58] hover:bg-blue-50"
                size="lg"
                asChild
              >
                <Link href="/renting">Te llamamos</Link>
              </Button>
            </motion.div>
          </div>
          <motion.div className="w-full h-36 md:h-48" variants={childVariants}> 
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
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}