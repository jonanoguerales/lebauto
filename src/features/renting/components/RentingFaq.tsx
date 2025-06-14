"use client";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqItems = [
  {
    question: "¿Qué es exactamente el renting?",
    answer: "El renting es un alquiler a largo plazo (normalmente de 1 a 5 años) por el que pagas una cuota mensual fija. Esta cuota incluye el uso del vehículo y todos los servicios asociados como seguro, mantenimiento, impuestos y asistencia, para que no tengas que preocuparte de nada.",
  },
  {
    question: "¿Qué necesito para contratar un renting?",
    answer: "Para particulares, generalmente se solicita DNI, las últimas nóminas y la declaración de la renta. Para empresas y autónomos, se requiere documentación fiscal y financiera. En todos los casos, se realiza un estudio de viabilidad económica.",
  },
  {
    question: "¿Qué ocurre si supero los kilómetros contratados?",
    answer: "Si superas el kilometraje anual contratado, se aplica un pequeño coste por cada kilómetro extra, que se especifica en tu contrato. De la misma forma, si haces menos kilómetros de los contratados, se te abonará una cantidad.",
  },
  {
    question: "Al finalizar el contrato, ¿puedo comprar el coche?",
    answer: "El renting es un contrato de alquiler, por lo que al finalizar, la opción estándar es devolver el vehículo. Sin embargo, puedes optar por renovar el contrato con un coche nuevo, extender el actual o, en algunos casos, solicitar una oferta para comprar el vehículo.",
  },
];

export function RentingFaq() {
  return (
    <section className="py-20">
      <div className="container mx-auto max-w-3xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Preguntas Frecuentes sobre Renting</h2>
          <p className="text-lg text-muted-foreground">Resolvemos tus dudas más habituales.</p>
        </div>
        <Accordion type="single" collapsible className="w-full">
          {faqItems.map((item, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger>{item.question}</AccordionTrigger>
              <AccordionContent className="text-base">{item.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}