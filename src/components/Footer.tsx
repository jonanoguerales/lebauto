import type { Route } from "next";
import Link from "next/link";
import { FacebookIcon, InstagramIcon, TwitterIcon } from "./SocialIcons";
import { JSX } from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white" role="contentinfo">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:justify-items-start">
          <FooterSection title="Concesionario">
            <p className="text-gray-400 mb-4">
              Tu concesionario de confianza para vehículos nuevos y de segunda mano.
            </p>
            <SocialLinks />
          </FooterSection>
          <FooterSection title="Servicios">
            <ul className="space-y-2 flex flex-col">
              {/* Páginas pendientes (aún no existen): sin ruta tipada, se usa `as Route` como indica la doc de typedRoutes. */}
              <FooterLink href={"/tasacion" as Route} label="Tasación" />
              <FooterLink href={"/financiacion" as Route} label="Financiación" />
              <FooterLink href={"/garantia" as Route} label="Garantía" />
              <FooterLink href={"/faq" as Route} label="FAQ" />
            </ul>
          </FooterSection>
          <FooterSection title="Legal">
            <ul className="space-y-2 flex flex-col">
              {/* Páginas pendientes (aún no existen): sin ruta tipada, se usa `as Route` como indica la doc de typedRoutes. */}
              <FooterLink href={"/politica-privacidad" as Route} label="Política de privacidad" />
              <FooterLink href={"/aviso-legal" as Route} label="Aviso legal" />
              <FooterLink href={"/terminos-condiciones" as Route} label="Términos y condiciones" />
              <FooterLink href={"/cookies" as Route} label="Cookies" />
            </ul>
          </FooterSection>
          <FooterSection title="Contacto">
            <address className="not-italic text-gray-400 flex flex-col space-y-2">
              <p>Avenida de los Coches, 123</p>
              <p>28001 Madrid, España</p>
              <p>
                <a href="tel:+34912345678" className="hover:text-white">
                  +34 91 234 56 78
                </a>
              </p>
              <p>
                <a href="mailto:info@concesionario.com" className="hover:text-white">
                  info@concesionario.com
                </a>
              </p>
            </address>
          </FooterSection>
        </div>
        <FooterBottom />
      </div>
    </footer>
  );
}

function FooterSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h3 className="text-xl font-bold mb-4">{title}</h3>
      {children}
    </div>
  );
}

function FooterLink({ href, label }: { href: Route; label: string }) {
  return (
    <li>
      <Link href={href} className="text-gray-400 hover:text-white">
        {label}
      </Link>
    </li>
  );
}

function SocialLinks() {
  return (
    <div className="flex gap-4">
      <SocialButton href="#" icon={<FacebookIcon />} label="Facebook" />
      <SocialButton href="#" icon={<InstagramIcon />} label="Instagram" />
      <SocialButton href="#" icon={<TwitterIcon />} label="Twitter" />
    </div>
  );
}

function SocialButton({ href, icon, label }: { href: string; icon: JSX.Element; label: string }) {
  return (
    <a href={href} className="text-gray-400 hover:text-white" aria-label={label}>
      {icon}
    </a>
  );
}

function FooterBottom() {
  return (
    <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
      <p>© {new Date().getFullYear()} Concesionario Lebauto. Todos los derechos reservados.</p>
      <div className="mt-2 flex flex-wrap justify-center gap-4">
        {/* Páginas pendientes (aún no existen): sin ruta tipada, se usa `as Route` como indica la doc de typedRoutes. */}
        <FooterLink href={"/privacidad" as Route} label="Política de privacidad" />
        <FooterLink href={"/cookies" as Route} label="Política de cookies" />
        <FooterLink href={"/legal" as Route} label="Aviso legal" />
      </div>
    </div>
  );
}
