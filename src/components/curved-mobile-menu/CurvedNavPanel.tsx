"use client";
import React, { useState } from "react";
import { motion, Variants } from "framer-motion";
import { usePathname } from "next/navigation";
import { menuSlide } from "./anim";
import NavLink from "./NavLink";
import Curve from "./Curve";
import NavFooter from "./NavFooter";
import Image from "next/image";
import { X } from "lucide-react";

const navItems = [
  {
    title: "Inicio",
    href: "/",
  },
  {
    title: "Coches de ocasión",
    href: "/coches-segunda-mano",
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
      className="h-dvh bg-gray-900 fixed right-0 top-0 text-white z-40"
    >
      <div className="box-border h-full py-[100px] px-[60px] md:px-[100px] flex flex-col justify-between">
        <div
          onMouseLeave={() => {
            setSelectedIndicator(pathname);
          }}
          className="flex flex-col text-[40px] sm:text-[56px] gap-2.5 sm:gap-3"
        >
          <div className="flex items-center justify-between text-white">
            <Image
              src="/logo.webp"
              alt="Logo Lebauto"
              width={80}
              height={80}
              priority
              className="w-[50px] h-auto md:w-[70px]"
            />
            <button
              className=" flex items-center justify-center p-2 z-50 rounded-md"
              onClick={closeMenu}
              aria-label="Cerrar menú"
            >
              <X className="h-6 w-6" />
            </button>
          </div>
          <div className="text-gray-400 border-b border-gray-600 uppercase text-[11px] mt-8 mb-6 sm:mb-8">
            <p>Navegación</p>
          </div>
          {navItems.map((data, index) => {
            return (
              <NavLink
                key={index}
                data={{ ...data, index }}
                isActive={selectedIndicator === data.href}
                setSelectedIndicator={setSelectedIndicator}
                closeMenu={closeMenu}
              />
            );
          })}
        </div>
        <NavFooter />
      </div>
      <Curve />
    </motion.div>
  );
}
