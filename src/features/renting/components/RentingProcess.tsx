import { Car, FileText, CalendarDays } from 'lucide-react';

const processSteps = [
  {
    icon: Car,
    title: "Elige tu Coche",
    description: "Explora nuestro catálogo y elige el vehículo que mejor se adapta a ti, desde eléctricos hasta SUVs.",
  },
  {
    icon: CalendarDays,
    title: "Personaliza tu Plan",
    description: "Selecciona el plazo de tu contrato (de 12 a 60 meses) y el kilometraje anual que necesitas.",
  },
  {
    icon: FileText,
    title: "Envía la Documentación",
    description: "Completa un sencillo formulario online y adjunta la documentación necesaria para el estudio de viabilidad.",
  },
];

export function RentingProcess() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-4">Tu Coche de Renting en 3 Sencillos Pasos</h2>
          <p className="text-lg text-muted-foreground">
            Hemos simplificado el proceso para que puedas disfrutar de tu nuevo coche lo antes posible.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 text-center">
          {processSteps.map((step, index) => (
            <div key={index} className="p-6">
              <div className="flex justify-center mb-6">
                <div className="bg-primary/10 p-4 rounded-full">
                  <step.icon className="h-8 w-8 text-primary" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3">{`Paso ${index + 1}: ${step.title}`}</h3>
              <p className="text-muted-foreground">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}