import { FeaturedOffers } from '@/features/renting/components/FeaturedOffers';
import { FinalCta } from '@/features/renting/components/FinalCta';
import { IncludedServices } from '@/features/renting/components/IncludedServices';
import { RentingFaq } from '@/features/renting/components/RentingFaq';
import { RentingHero } from '@/features/renting/components/RentingHero';
import { RentingProcess } from '@/features/renting/components/RentingProcess';
import type { Metadata } from 'next';


export const metadata: Metadata = {
  title: 'Renting de Coches Flexibles | Sin Entrada y Todo Incluido - Lebauto',
  description: 'Descubre nuestras ofertas de renting para particulares y empresas. Estrena coche nuevo con una cuota mensual fija que lo incluye todo: seguro, mantenimiento, impuestos y más.',
  keywords: ['renting coches', 'renting particulares', 'renting empresas', 'coche por suscripción', 'renting sin entrada', 'ofertas renting', 'lebauto renting'],
};

export default function RentingPage() {
  return (
    <main className="bg-background">
      <RentingHero />
      <RentingProcess />
      <IncludedServices />
      <FeaturedOffers />
      <RentingFaq />
      <FinalCta />
    </main>
  );
}