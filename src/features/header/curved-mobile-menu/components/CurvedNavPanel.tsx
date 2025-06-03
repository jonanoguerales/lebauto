"use client";
import React, { useState } from "react";
import { motion, Variants } from "framer-motion";
import { usePathname } from "next/navigation";
import Curve from "./Curve";
import Image from "next/image";
import { X } from "lucide-react";
import NavLink from "./NavLink";
import ContactButtons from "@/components/ContactButtons"; // Asegúrate que la ruta sea correcta
import { menuSlide } from "../animations/anim";

const navItems = [
  {
    title: "Inicio",
    href: "/",
  },
  {
    title: "Coches de ocasión",
    href: "/coches-segunda-mano",
  },
  { // Nuevo enlace para cargadores
    title: "Cargadores",
    href: "/cargadores",
  },
  {
    title: "Gestión de venta",
    href: "/gestion-de-venta",
  },
  {
    title: "Contacto",
    href: "/contacto",
  },
];

interface CurvedNavPanelProps {
  closeMenu: () => void;
}

export default function CurvedNavPanel({ closeMenu }: CurvedNavPanelProps) {
  const pathname = usePathname();
  const [selectedIndicator, setSelectedIndicator] = useState(pathname);

  return (
    <motion.div
      variants={menuSlide as Variants}
      initial="initial"
      animate="enter"
      exit="exit"
      className="h-dvh max500:w-full bg-white fixed right-0 top-0 text-white z-[99]" // z-index alto
    >
      <div className="box-border h-full px-10 pt-[30px] pb-16 flex flex-col justify-between">
        {/* Contenedor superior con logo, título y botón de cierre */}
        <div
          onMouseLeave={() => {
            setSelectedIndicator(pathname);
          }}
          className="flex flex-col px-3 text-[30px] sm:text-[38px] gap-2.5 sm:gap-3"
        >
          <div className="flex items-center justify-between text-black mb-6"> {/* mb-6 añadido */}
            <Image
              src="/logo.webp"
              alt="Logo Lebauto"
              width={80}
              height={80}
              priority
              className="w-[50px] h-auto md:w-[70px]"
            />
            <button
              className=" flex items-center justify-center p-2 z-[100] rounded-md" // z-index más alto para el botón
              onClick={closeMenu}
              aria-label="Cerrar menú"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          {/* Sección de navegación */}
          <div className="text-gray-400 border-b border-gray-300 uppercase text-[11px] mt-8 mb-2 sm:mb-4"> {/* border-gray-300 */}
            <p>Navegación</p>
          </div>
          {navItems.map((data, index) => {
            return (
              <NavLink
                key={index}
                data={{ ...data, index }}
                isActive={selectedIndicator === data.href}
                setSelectedIndicator={setSelectedIndicator}
                closeMenu={closeMenu} // Pasar closeMenu a NavLink
              />
            );
          })}
        </div>
        {/* Botones de contacto en la parte inferior */}
        <ContactButtons estado="menu" />
      </div>
      <Curve />
    </motion.div>
  );
}