import type { Metadata } from "next";
import { Suspense } from "react";
import ChargerDetailsLoader, { getChargerBySlug } from "./ChargerDetailsLoader";
import { ChargerDetailSkeleton } from "@/features/chargers/skeletons/ChargerSkeletons";

// Exclusión deliberada de Cache Components (Fase 4: generateStaticParams + 'use cache' + cacheTag): sin
// generateStaticParams la ruta no se conoce al prerenderizar y `usePathname()` del Navbar (layout compartido)
// bloquearía. Envolver el Navbar en <Suspense> lo sacaría del HTML de todas las páginas públicas (sin JS no se ve).
export const instant = false;

export async function generateMetadata({
  params,
}: PageProps<"/cargadores/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const charger = await getChargerBySlug(slug);

  if (!charger) {
    return {
      title: "Cargador no encontrado - Lebauto",
      description: "Este cargador no se encuentra disponible en nuestra base de datos.",
    };
  }

  return {
    title: `${charger.name}${charger.brand ? ` - ${charger.brand}` : ''} | Cargadores Lebauto`,
    description: charger.description || `Detalles del cargador ${charger.name}. Potencia: ${charger.power_kw}kW, Conector: ${charger.connector_type}. Disponible en Lebauto.`,
    openGraph: {
      title: `${charger.name} | Cargadores Lebauto`,
      description: charger.description || `Solución de carga ${charger.name} para tu vehículo eléctrico.`,
      images: charger.image_url ? [charger.image_url] : ["/cargadores/cargador-opengraph.png"],
    },
  };
}

export default async function ChargerDetailPage({
  params,
}: PageProps<"/cargadores/[slug]">) {
  const { slug } = await params;

  return (
    <main className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8 mt-16 md:mt-24">
        <Suspense fallback={<ChargerDetailSkeleton />}>
          <ChargerDetailsLoader slug={slug} />
        </Suspense>
      </div>
    </main>
  );
}