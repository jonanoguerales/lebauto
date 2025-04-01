import Link from "next/link";

export default function HeroSection() {
  return (
    <section
      className="relative min-h-[80vh] sm:min-h-[60vh] flex items-center overflow-hidden bg-gradient-to-b from-gray-900 via-gray-800 to-gray-700"
      role="banner"
    >
      <div className="absolute inset-0">
        <picture>
          {/* Versión WebP para móviles (mejor compresión) */}
          <source
            media="(max-width: 639px)"
            srcSet="/imgHome-mobile.webp"
            type="image/webp"
          />
          <source
            media="(max-width: 639px)"
            srcSet="/imgHome-mobile.avif"
            type="image/avif"
          />

          {/* Versiones para tablet */}
          <source
            media="(min-width: 640px) and (max-width: 767px)"
            srcSet="/imgHome-tablet.webp"
            type="image/webp"
          />
          <source
            media="(min-width: 640px) and (max-width: 767px)"
            srcSet="/imgHome-tablet.avif"
            type="image/avif"
          />

          {/* Versiones para escritorio */}
          <source
            media="(min-width: 768px)"
            srcSet="/imgHome.webp"
            type="image/webp"
          />
          <source
            media="(min-width: 768px)"
            srcSet="/imgHome.avif"
            type="image/avif"
          />

          {/* Fallback */}
          <img
            src="/imgHome.jpg"
            alt="Luxury Car"
            className="object-cover w-full h-full"
            loading="eager"
          />
        </picture>
      </div>

      <div className="relative z-10 container mx-auto py-16 md:py-24 flex-1">
        <div className="max-w-2xl flex flex-col space-y-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
            Concesionario de vehículos de ocasión
          </h1>
          <p className="text-lg md:text-xl text-gray-300">
            Los mejores coches de segunda mano con garantía y al mejor precio
          </p>
          <Link
            href="/coches-segunda-mano"
            className="bg-white text-black font-semibold px-8 py-2 text-base md:text-lg rounded-[0.5rem] hover:opacity-80 w-max"
            aria-label="Ver catálogo de coches de segunda mano"
          >
            Ver catálogo
          </Link>
        </div>
      </div>
    </section>
  );
}
