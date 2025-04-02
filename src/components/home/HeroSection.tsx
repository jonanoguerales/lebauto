import { ebGaramond, montserrat } from "@/utils/fonts";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section
      className="relative min-h-[73vh] md:min-h-[80vh] flex overflow-hidden bg-gradient-to-b from-gray-900 via-gray-800 to-gray-700 x"
      role="banner"
    >
      <div className="absolute inset-0">
        <picture>
          <source
            media="(max-width: 1279px)"
            srcSet="/imgHome-mobile.png"
            type="image/png"
          />
          <source
            media="(min-width: 1980px) and (max-width: 3440px)"
            srcSet="/imgHome-ultrawide.png"
            type="image/png"
          />
          <img
            src="/imgHome.png"
            alt="Luxury Car"
            className="object-cover w-full h-full"
            loading="eager"
          />
        </picture>
      </div>

      <div className="relative z-10 container mx-auto py-16 md:py-24 flex-1">
        <div className="max-w-2xl flex flex-col items-center gap-6 mt-2 md:mt-20 short:mt-4 ">
          <div className="flex flex-col items-center gap-1">
          <h1
            className={`${montserrat.className} text-4xl md:text-5xl lg:text-6xl text-center font-extrabold text-white`}
          >
            LEBAUTO
          </h1>
          <p className={`${ebGaramond.className} italic max-md:font-semibold text-2xl md:text-3xl lg:text-5xl text-gray-200`}>
          La referencia en coches eléctricos
          </p>
          </div>
          <Link
            href="/coches-segunda-mano"
            className="bg-white text-black font-semibold px-4 py-2 text-base md:text-lg rounded-[0.5rem] hover:opacity-80 w-max"
            aria-label="Ver catálogo de coches de segunda mano"
          >
            Explorar vehículos
          </Link>
        </div>
      </div>
    </section>
  );
}
