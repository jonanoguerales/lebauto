import type { Metadata, ResolvingMetadata } from "next";
import { Suspense } from "react";
import { fetchChargerDetailsBySlug } from "@/app/supabase/supabase";
import ChargerDetailsLoader from "./ChargerDetailsLoader";
import { ChargerDetailSkeleton } from "@/features/chargers/skeletons/ChargerSkeletons";

export const revalidate = 60;

interface RouteParams {
  slug: string;
}

interface ResolvedSearchParams {
  [key: string]: string | string[] | undefined;
}

interface PageFunctionProps {
  params: Promise<RouteParams>;
  searchParams?: Promise<ResolvedSearchParams>; 
}

export async function generateMetadata(
  { params: paramsPromise, searchParams: searchParamsPromise }: PageFunctionProps,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const params = await paramsPromise;

  const charger = await fetchChargerDetailsBySlug(params.slug);

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

export default async function ChargerDetailPage(
  { params: paramsPromise, searchParams: searchParamsPromise }: PageFunctionProps
) {
  const params = await paramsPromise;

  return (
    <main className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8 mt-16 md:mt-24">
        <Suspense fallback={<ChargerDetailSkeleton />}>
          <ChargerDetailsLoader slug={params.slug} />
        </Suspense>
      </div>
    </main>
  );
}