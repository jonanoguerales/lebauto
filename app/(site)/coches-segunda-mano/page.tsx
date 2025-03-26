import type { Metadata } from "next";
import { Suspense } from "react";
import CatalogPageSkeleton from "@/components/cars/skeleton/CatalogPageSkeleton";
import LoadingContent from "./LoadingContent";

export const revalidate = 60;

export const metadata: Metadata = {
  title: "Coches de segunda mano - Concesionario",
  description:
    "Explora nuestra amplia selección de vehículos de segunda mano, de ocasión y km 0.",
};

export default async function CatalogPage({
  searchParams,
}: {
  searchParams: any;
}) {

  return (
    <div>
      {/* Otros elementos de la página que quieras mostrar inmediatamente */}
      <Suspense fallback={<CatalogPageSkeleton />}>
        <LoadingContent searchParams={searchParams} />
      </Suspense>
    </div>
  );
}
