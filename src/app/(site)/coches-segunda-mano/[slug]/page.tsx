import type { Metadata } from "next";
import { Suspense } from "react";
import CarDetailsLoader, { getCarBySlug } from "./CarDetailsLoader";
import { CarDetailSkeleton } from "@/features/car/skeleton/CarSkeleton";

// Exclusión deliberada de Cache Components (Fase 4: generateStaticParams + 'use cache' + cacheTag): sin
// generateStaticParams la ruta no se conoce al prerenderizar y `usePathname()` del Navbar (layout compartido)
// bloquearía. Envolver el Navbar en <Suspense> lo sacaría del HTML de todas las páginas públicas (sin JS no se ve).
export const instant = false;

export async function generateMetadata({
  params,
}: PageProps<"/coches-segunda-mano/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const car = await getCarBySlug(slug);

  if (!car) {
    return {
      title: "Vehículo no encontrado",
      description:
        "Este vehículo no se encuentra disponible en nuestra base de datos.",
    };
  }
  return {
    title: `${car.brand} ${car.model} - Lebauto`,
    description: `Descubre el ${car.brand} ${car.model} del año ${
      car.year
    } con ${car.mileage.toLocaleString()} km, disponible por ${car.price.toLocaleString()}€.`,
    openGraph: {
      images: car.images?.[0] || "/placeholder.svg",
    },
  };
}

export default async function CarPage({
  params,
}: PageProps<"/coches-segunda-mano/[slug]">) {
  const { slug } = await params;

  return (
    <main className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8 mt-16">
        <Suspense fallback={<CarDetailSkeleton />}>
          <CarDetailsLoader slug={slug} />
        </Suspense>
      </div>
    </main>
  );
}
