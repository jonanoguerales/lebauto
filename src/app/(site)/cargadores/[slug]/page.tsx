import type { Metadata } from "next";
import { Suspense } from "react";
import { fetchChargerDetailsBySlug } from "@/app/supabase/supabase";
import ChargerDetailsLoader from "./ChargerDetailsLoader";
import { ChargerDetailSkeleton } from "@/features/chargers/skeletons/ChargerSkeletons";

export const revalidate = 60;

export async function generateMetadata({
  params,
}: {
  params: { slug: string }; 
}): Promise<Metadata> {
  const paramsResolved = await Promise.resolve(params);
  const { slug } = paramsResolved;

  const charger = await fetchChargerDetailsBySlug(slug); 

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
      images: charger.image_url || "/cargadores/cargador-opengraph.png",
    },
  };
}

export default async function ChargerDetailPage({
  params,
}: {
  params: { slug: string }; 
}) {
 const paramsResolved = await Promise.resolve(params);
  const { slug } = paramsResolved;

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