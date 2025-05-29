"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
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

const imageChildVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut", delay: 0.4 } },
};

export default function DudasAdvisorBanner() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.section
      className="container mx-auto display flex items-center justify-center"
      ref={ref}
      variants={bannerVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
    >
      <div className="bg-[#e63946] rounded-xl overflow-hidden shadow-lg w-[400px] md:w-[990px]">
        <div className="relative flex flex-col md:flex-row items-center">
          <motion.div className="flex flex-col items-center justify-center w-full z-[1] px-4 py-8 md:pl-4 md:py-0 md:pr-0 lg:pl-12" variants={childVariants}>
            <motion.h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-4" variants={childVariants}>
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
          </motion.div>
          <motion.div className="w-full h-36 md:h-48" variants={imageChildVariants}>
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
      </div>
    </motion.section>
  );
}