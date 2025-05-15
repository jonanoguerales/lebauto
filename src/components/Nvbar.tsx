"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react"; 
import Image from "next/image";
import { Link as ViewTransitionsLink } from "next-view-transitions";
import { AnimatePresence } from "framer-motion";
import CurvedNavPanel from "../features/curved-mobile-menu/CurvedNavPanel"; 

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false); 
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    if (menuOpen) {
      setMenuOpen(false);
    }
  }, [pathname]);

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  const isHome = pathname === "/";

  const navbarClasses = `fixed top-0 w-screen z-30 transition-all duration-300 ${
    menuOpen ? "hidden" : 
    isHome
      ? scrolled
        ? "bg-white shadow-md transition-shadow text-black"
        : "bg-transparent text-white"
      : scrolled
      ? "bg-white shadow-md transition-shadow text-black"
      : "bg-white text-black"
  }`;

  return (
    <>
      <nav className={navbarClasses}>
        <div
          className={`container mx-auto flex items-center h-[50px] md:h-20 ${
            menuOpen
              ? "justify-between"
              : scrolled
              ? "justify-between"
              : "justify-end"
          }`}
        >
          <ViewTransitionsLink
            href="/"
            className={`text-2xl font-bold ${
              menuOpen ? "block" : scrolled ? "block" : "hidden"
            }`}
          >
            <Image
              src="/logo.webp"
              alt="Logo Lebauto"
              width={80}
              height={80}
              priority
              className="w-[50px] h-auto md:w-[70px]"
            />
          </ViewTransitionsLink>

          <div className="hidden md:flex items-center gap-x-4 lg:gap-x-6 text-sm">
            <ViewTransitionsLink href="/" className="hover:opacity-70 py-2">
              Inicio
            </ViewTransitionsLink>
            <ViewTransitionsLink
              href="/coches-segunda-mano"
              className={`py-2 hover:opacity-70 border-b-2 ${
                pathname.startsWith("/coches-segunda-mano")
                  ? `${
                      isHome && !scrolled && !menuOpen
                        ? "border-white"
                        : "border-primary"
                    } font-semibold`
                  : "border-transparent"
              }`}
            >
              Coches de ocasión
            </ViewTransitionsLink>
            <ViewTransitionsLink
              href="/gestion-de-venta"
              className={`py-2 hover:opacity-70 border-b-2 ${
                pathname === "/gestion-de-venta"
                  ? `${
                      isHome && !scrolled && !menuOpen
                        ? "border-white"
                        : "border-primary"
                    } font-semibold`
                  : "border-transparent"
              }`}
            >
              Gestión de venta
            </ViewTransitionsLink>
            <ViewTransitionsLink
              href="/contacto"
              className={`py-2 hover:opacity-70 border-b-2 ${
                pathname === "/contacto"
                  ? `${
                      isHome && !scrolled && !menuOpen
                        ? "border-white"
                        : "border-primary"
                    } font-semibold`
                  : "border-transparent"
              }`}
            >
              Contacto
            </ViewTransitionsLink>
          </div>

          <button
            className={`md:hidden flex items-center justify-center p-2 z-50 rounded-md
                        ${
                          isHome && !scrolled && !menuOpen
                            ? "hover:bg-white/10"
                            : "hover:bg-gray-200"
                        } 
                        ${
                          menuOpen ? "fixed right-4 top-2.5" : ""
                        }transition-colors`}
            onClick={toggleMenu}
            aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={menuOpen}
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </nav>

      <AnimatePresence mode="wait">
        {menuOpen && <CurvedNavPanel closeMenu={() => setMenuOpen(false)} />}
      </AnimatePresence>
    </>
  );
}
