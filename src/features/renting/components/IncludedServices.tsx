import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ShieldCheck, Wrench, Landmark, LifeBuoy, Replace, FileText } from 'lucide-react';

const services = [
  { icon: Wrench, title: "Mantenimiento y Averías", description: "Todas las revisiones, mantenimientos y reparaciones están cubiertas." },
  { icon: ShieldCheck, title: "Seguro a Todo Riesgo", description: "Conduce con total tranquilidad con un seguro completo sin franquicia." },
  { icon: Landmark, title: "Impuestos Incluidos", description: "Nos encargamos del pago de impuestos como el de circulación." },
  { icon: LifeBuoy, title: "Asistencia en Carretera", description: "Servicio de asistencia 24/7, los 365 días del año, desde el km 0." },
  { icon: Replace, title: "Cambio de Neumáticos", description: "Sustitución de neumáticos por desgaste según el kilometraje contratado." },
  { icon: FileText, title: "Gestión de Multas", description: "Te ayudamos a gestionar cualquier multa de tráfico que puedas recibir." },
];

export function IncludedServices() {
  return (
    <section className="py-20">
      <div className="container mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-4">Una Cuota, Todo Incluido</h2>
          <p className="text-lg text-muted-foreground">
            Olvídate de los imprevistos. Tu cuota mensual de renting en Lebauto lo cubre todo para tu tranquilidad.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mx-auto bg-primary/10 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                  <service.icon className="h-7 w-7 text-primary" />
                </div>
                <CardTitle>{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}