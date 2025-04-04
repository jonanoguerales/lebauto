import { ebGaramond, montserrat } from "@/utils/fonts";
import { Battery, ShieldCheck, Zap } from "lucide-react";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section
      className="relative min-h-[73vh] md:min-h-[80vh] flex overflow-hidden"
      role="banner"
    >
      <div className="absolute inset-0 z-0">
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
        <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-black/30 to-black/70" />
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
{/*         <div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 max-w-5xl mx-auto"
        >
          <div className="bg-black/40 backdrop-blur-sm p-6 rounded-xl flex items-center gap-4 text-white">
            <div className="bg-white/10 p-3 rounded-full">
              <Zap className="h-8 w-8 text-white" />
            </div>
            <div>
              <h3 className="font-bold text-lg mb-1">Carga inteligente</h3>
              <p className="text-gray-300 text-sm">Soluciones de carga para tu hogar o negocio</p>
            </div>
          </div>

          <div className="bg-black/40 backdrop-blur-sm p-6 rounded-xl flex items-center gap-4 text-white">
            <div className="bg-white/10 p-3 rounded-full">
              <Battery className="h-8 w-8 text-white" />
            </div>
            <div>
              <h3 className="font-bold text-lg mb-1">Autonomía extendida</h3>
              <p className="text-gray-300 text-sm">Vehículos con hasta 600km de autonomía</p>
            </div>
          </div>

          <div className="bg-black/40 backdrop-blur-sm p-6 rounded-xl flex items-center gap-4 text-white">
            <div className="bg-white/10 p-3 rounded-full">
              <ShieldCheck className="h-8 w-8 text-white" />
            </div>
            <div>
              <h3 className="font-bold text-lg mb-1">Garantía completa</h3>
              <p className="text-gray-300 text-sm">Todos nuestros vehículos con garantía extendida</p>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
}
