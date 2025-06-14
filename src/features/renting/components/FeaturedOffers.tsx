import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const mockOffers = [
  { id: 1, brand: "Tesla", model: "Model 3", image: "/coches/tesla-model-3.jpg", fee: 450, term: 48, tag: "CERO" },
  { id: 2, brand: "BMW", model: "i4", image: "/coches/bmw-i4.jpg", fee: 520, term: 48, tag: "CERO" },
  { id: 3, brand: "Audi", model: "A4", image: "/coches/audi-a4.jpg", fee: 480, term: 36, tag: "ECO" },
  { id: 4, brand: "Porsche", model: "Taycan", image: "/coches/porsche-taycan.jpg", fee: 1250, term: 48, tag: "CERO" },
];

export function FeaturedOffers() {
  return (
    <section id="ofertas-renting" className="py-20 bg-muted/30">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-4">
          <div>
            <h2 className="text-3xl font-bold">Ofertas Destacadas de Renting</h2>
            <p className="text-muted-foreground mt-2">Encuentra la oferta perfecta para ti y empieza a disfrutar.</p>
          </div>
          <Button variant="outline" className="group" asChild>
            <Link href="/coches-segunda-mano?tipo=renting">
              Ver Todas las Ofertas
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {mockOffers.map((offer) => (
            <Card key={offer.id} className="overflow-hidden group">
              <div className="relative h-48">
                <Image src={offer.image} alt={`${offer.brand} ${offer.model}`} fill className="object-cover group-hover:scale-105 transition-transform duration-300" />
                <Badge className="absolute top-2 right-2">{offer.tag}</Badge>
              </div>
              <CardContent className="p-4">
                <h3 className="font-bold text-lg">{offer.brand} {offer.model}</h3>
                <p className="text-sm text-muted-foreground mb-4">{`Contrato de ${offer.term} meses`}</p>
                <div className="text-right">
                  <p className="text-sm">Desde</p>
                  <p className="text-2xl font-bold text-primary">{offer.fee}€<span className="text-base font-normal text-muted-foreground">/mes</span></p>
                  <p className="text-xs text-muted-foreground">IVA Incluido</p>
                </div>
                <Button className="w-full mt-4" asChild>
                  <Link href={`/renting/oferta/${offer.id}`}>Me interesa</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}