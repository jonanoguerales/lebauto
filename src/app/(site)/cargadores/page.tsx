import type { Metadata } from "next";
import { Suspense } from "react";
import ChargersListLoader from "./ChargersListLoader";
import { ChargerCardSkeleton } from "@/features/chargers/skeletons/ChargerSkeletons";

export const revalidate = 60; 

export const metadata: Metadata = {
  title: "Cargadores para Vehículos Eléctricos - Lebauto",
  description:
    "Descubre nuestra gama de cargadores para vehículos eléctricos: domésticos, comunitarios y para empresas. Soluciones de carga eficientes y fiables.",
  keywords: [
    "cargadores eléctricos",
    "puntos de carga",
    "wallbox",
    "carga vehículo eléctrico",
    "Lebauto cargadores",
    "cargador coche eléctrico",
  ],
  openGraph: {
    title: "Cargadores para Vehículos Eléctricos - Lebauto",
    description: "Encuentra la solución de carga perfecta para tu coche eléctrico en Lebauto.",
    images: "/cargadores/cargador-opengraph.png", 
  },
};

export default async function ChargersCatalogPage() {
  return (
    <main className="min-h-screen bg-background">
      <header className="bg-gradient-to-r from-slate-900 to-slate-700 text-primary-foreground py-16 mt-[50px] md:mt-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Nuestros Cargadores Eléctricos</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Encuentra la solución de carga perfecta para tu vehículo eléctrico,
            ya sea para tu hogar, comunidad o negocio.
          </p>
        </div>
      </header>

      <div className="container mx-auto px-4 py-12">
        <Suspense fallback={
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array.from({ length: 3 }).map((_, i) => <ChargerCardSkeleton key={i} />)}
          </div>
        }>
          <ChargersListLoader />
        </Suspense>
      </div>

      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">¿Necesitas Ayuda para Elegir?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
            Nuestro equipo de expertos está listo para asesorarte y encontrar el cargador que mejor se adapte a tus necesidades y a tu vehículo.
          </p>
          <a
            href="/contacto"
            className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primary/90"
          >
            Contacta con nosotros
          </a>
        </div>
      </section>
    </main>
  );
}