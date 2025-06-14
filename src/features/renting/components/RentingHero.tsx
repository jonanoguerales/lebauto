import { Button } from '@/components/ui/button';
import { CheckCircle, ShieldCheck, Wrench } from 'lucide-react';
import Link from 'next/link';

export function RentingHero() {
  return (
    <section className="relative mt-[50px] md:mt-20 py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-gray-900 text-white overflow-hidden">
      <div className="absolute inset-0 bg-grid-white/[0.05] bg-[length:20px_20px]"></div>
      <div className="container mx-auto relative z-10 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Estrena Coche con Renting Flexible
          </h1>
          <p className="text-xl mb-8 text-white/80">
            Disfruta de un vehículo nuevo con todo incluido en una sola cuota mensual. Sin entradas, sin sorpresas y con la flexibilidad que necesitas.
          </p>
          <Button size="lg" className="bg-white text-primary hover:bg-white/90 font-semibold text-base" asChild>
            <Link href="#ofertas-renting">Ver Ofertas Disponibles</Link>
          </Button>
        </div>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="flex items-center gap-4 p-4 bg-white/10 rounded-lg">
            <ShieldCheck className="h-8 w-8 text-green-400" />
            <div>
              <h3 className="font-semibold">Todo Incluido</h3>
              <p className="text-sm text-white/70">Seguro, mantenimiento y más.</p>
            </div>
          </div>
          <div className="flex items-center gap-4 p-4 bg-white/10 rounded-lg">
            <CheckCircle className="h-8 w-8 text-blue-400" />
            <div>
              <h3 className="font-semibold">Sin Entrada</h3>
              <p className="text-sm text-white/70">Empieza a conducir sin grandes pagos.</p>
            </div>
          </div>
          <div className="flex items-center gap-4 p-4 bg-white/10 rounded-lg">
            <Wrench className="h-8 w-8 text-orange-400" />
            <div>
              <h3 className="font-semibold">Mantenimiento Cubierto</h3>
              <p className="text-sm text-white/70">Nos encargamos de todo por ti.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}