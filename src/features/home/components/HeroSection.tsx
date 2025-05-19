import { ebGaramond, montserrat } from "@/utils/fonts";
import { Battery, ShieldCheck, Zap } from "lucide-react";
import Link from "next/link";

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

export default function HeroSection() {
  return (
    <section className="relative min-h-dvh flex flex-col" role="banner">
      <div className="fixed inset-0 h-dvh w-screen z-[-1]">
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
            alt="Coche de lujo Lebauto"
            className="object-cover w-full h-full"
            loading="eager"
            aria-hidden="true"
          />
        </picture>
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-black/10 to-black/60" />
      </div>

      <div className="relative flex flex-col justify-between z-10 container mx-auto px-4 md:px-8 pb-8 pt-16 md:pb-12 md:pt-24 flex-1">
        <div className="max-w-2xl flex flex-col items-center text-center mx-auto gap-6 mt-2 md:mt-10 lg:mt-20 short:mt-4">
          <div className="flex flex-col items-center gap-1">
            <h1
              className={`${montserrat.className} text-4xl md:text-5xl lg:text-6xl font-extrabold text-white`}
            >
              LEBAUTO
            </h1>
            <p
              className={`${ebGaramond.className} italic text-2xl md:text-3xl lg:text-5xl text-gray-200`}
            >
              La referencia en coches eléctricos
            </p>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-3 md:gap-4">
            {btnLink.map((btn, index) => (
              <Link
                key={index}
                href={btn.href}
                className="bg-white text-black font-semibold px-6 py-2.5 text-base md:text-lg rounded-lg hover:bg-opacity-90 transition-opacity min-w-[120px] text-center"
                aria-label={btn.ariaLabel}
              >
                {btn.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 w-full gap-2 md:gap-4 lg:gap-6 mt-12 md:mt-16 max-w-5xl mx-auto">
          {cardsData.map((card, index) => (
            <div
              key={index}
              className="bg-black/50 backdrop-blur-md p-4 md:p-5 rounded-xl flex items-center gap-3 text-white"
            >
              <div className="bg-white/10 p-3 rounded-full flex-shrink-0">
                {card.icon}
              </div>
              <div>
                <h3 className="font-bold text-sm md:text-base lg:text-lg mb-0.5 md:mb-1">
                  {card.title}
                </h3>
                <p className="text-gray-300 text-xs md:text-sm">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
