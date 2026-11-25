import type { Metadata } from "next";
import { Suspense } from "react";
import { fetchCarDetailsBySlug } from "@/app/supabase/supabase";
import CarDetailsLoader from "./CarDetailsLoader";
import { CarDetailSkeleton } from "@/features/car/skeleton/CarSkeleton";

export const revalidate = 60;

export async function generateMetadata({
  params,
}: PageProps<"/coches-segunda-mano/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const car = await fetchCarDetailsBySlug(slug);

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
