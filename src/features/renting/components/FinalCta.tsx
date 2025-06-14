import { Button } from '@/components/ui/button';
import Link from 'next/link';

export function FinalCta() {
  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">¿Listo para estrenar coche?</h2>
        <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
          Contacta con nuestros asesores especializados en renting y encuentra el plan perfecto para ti o para tu empresa.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-white text-primary hover:bg-white/90 font-semibold text-base" asChild>
            <Link href="#ofertas-renting">Ver Ofertas de Renting</Link>
          </Button>
          <Button size="lg" variant="outline" className="bg-white text-primary hover:bg-white/90 font-semibold text-base" asChild>
            <Link href="/contacto">Contactar con un Asesor</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}