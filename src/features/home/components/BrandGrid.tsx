"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion"; 
import { useInView } from "react-intersection-observer"; 

const brands = [
  { name: "Tesla", logo: "/logos-coches/tesla-logo.png" },
  { name: "Volkswagen", logo: "/logos-coches/vw-logo.png" },
  { name: "BMW", logo: "/logos-coches/bmw-logo.png" },
  { name: "Audi", logo: "/logos-coches/audi-logo.png" },
  { name: "Jaguar", logo: "/logos-coches/jaguar-logo.png" },
  { name: "Porsche", logo: "/logos-coches/porsche-logo.png" },
  { name: "Renault", logo: "/logos-coches/renault-logo.png" },
  { name: "Peugeot", logo: "/logos-coches/peugeot-logo.png" },
  { name: "Mercedes Benz", logo: "/logos-coches/mercedes-logo.png" },
  { name: "Ford", logo: "/logos-coches/ford-logo.png" },
  { name: "Land Rover", logo: "/logos-coches/land-rover-logo.png" },
  { name: "Toyota", logo: "/logos-coches/toyota-logo.png" },
];

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
      when: "beforeChildren", 
      staggerChildren: 0.08, 
    },
  },
};

const titleVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const cardItemVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.4, ease: "easeOut" } },
};

const buttonVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.3 } }, 
};

export default function BrandGrid() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.section
      className="py-20"
      ref={ref}
      variants={sectionVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"} 
    >
      <div className="container mx-auto flex flex-col items-center gap-8">
        <motion.h2
          className="text-2xl md:text-3xl font-bold text-center"
          variants={titleVariants}
        >
          Encuentra tu marca favorita
        </motion.h2>
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-6 xl:p-4"
          role="region"
          aria-labelledby="brand-grid-title"
          initial="hidden"
          animate={inView ? "visible" : "hidden"} 
          variants={sectionVariants} 
        >
          <h2 id="brand-grid-title" className="sr-only">
            Marcas de coches disponibles
          </h2>
          {brands.map((brand, index) => (
            <motion.div key={brand.name} variants={cardItemVariants}>
              <BrandCard brand={brand} hidden={index >= 6} />
            </motion.div>
          ))}
        </motion.div>
        <motion.div variants={buttonVariants}>
          <Link
            href="/coches-segunda-mano"
            className="bg-black text-white font-semibold px-8 py-3 text-base md:text-lg rounded-lg hover:bg-gray-300 transition-colors hover:text-black w-max"
          >
            Ver todas las marcas
          </Link>
        </motion.div>
      </div>
    </motion.section>
  );
}

function BrandCard({
  brand,
  hidden,
}: {
  brand: { name: string; logo: string };
  hidden: boolean;
}) {
  return (
    <Link
      href={`/coches-segunda-mano?brand=${brand.name}`}
      className={`bg-gray-300 rounded-lg p-4 flex flex-col items-center gap-3 hover:shadow-md hover:border-gray-600 hover:border-4 border-4 border-transparent transition-shadow 
      ${hidden ? "hidden md:flex" : ""}`}
      aria-label={`Explorar coches de la marca ${brand.name}`}
    >
      <div className="w-20 h-14 xl:w-24 xl:h-16 relative">
        <Image
          src={brand.logo || "/placeholder.svg"}
          alt={`Logo de ${brand.name}`}
          fill
          className="object-contain"
          loading="lazy"
        />
      </div>
      <span className="font-medium">{brand.name}</span>
    </Link>
  );
}