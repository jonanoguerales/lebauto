import BrandGrid from "@/components/home/BrandGrid";
import ContactButtons from "@/components/ContactButtons";
import HeroSection from "@/components/home/HeroSection";
import SearchSection from "@/components/home/SearchSection";
import SellYourCarSection from "@/components/home/SellYourCarSection";
import Link from "next/link";
import type { Metadata } from "next";
import ElectricVehiclesSection from "@/components/home/ElectricVehiclesSection";
import ElectricChargersSection from "@/components/home/ElectricShargersSection";
import LocationsSection from "@/components/home/LocationsSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import ChargersAdvisorBanner from "@/components/home/ChargersAdvisorBanner";
import RentingBanner from "@/components/home/RentingBanner";
import ChatBot from "@/features/chatbot/components/ChatBot";
import DudasAdvisorBanner from "@/components/home/DudasAdvisorBanner";

export const metadata: Metadata = {
  title:
    "Lebauto | Concesionario de Coches Eléctricos y de Segunda Mano | Vehículos Sostenibles",
  description:
    "Compra tu coche de segunda mano, ocasión, eléctricos o Km 0 en Lebauto. Vehículos revisados, con garantía y financiación. Ofrecemos soluciones de carga, financiación especializada y asesoramiento en ayudas y subvenciones para la movilidad sostenible.",
  keywords: [
    "coches segunda mano",
    "coches km0",
    "concesionario coches",
    "Lebauto",
    "coches eléctricos",
    "vehículos segunda mano",
    "cargadores eléctricos",
    "concesionario sostenible",
    "km0",
    "financiación vehículos eléctricos",
    "ayudas movilidad eléctrica",
    "concesionario de coches eléctricos",
  ],
  openGraph: {
    title:
      "Lebauto | Concesionario de Coches Eléctricos y de Segunda Mano | Vehículos Sostenibles",
    description:
      "Compra tu coche de segunda mano, ocasión, eléctricos o Km 0 en Lebauto. Vehículos revisados, con garantía y financiación. Ofrecemos soluciones de carga, financiación especializada y asesoramiento en ayudas y subvenciones para la movilidad sostenible.",
    type: "website",
    locale: "es_ES",
    url: "https://lebauto.vercel.app",
  },
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      {/* <SearchSection /> */}
      <ElectricVehiclesSection />
      {/* <ChatBot /> */}
      <SellYourCarSection />
      <RentingBanner />
      <ElectricChargersSection />
      <ChargersAdvisorBanner />
      <BrandGrid />
      <DudasAdvisorBanner />
      <TestimonialsSection />
      <LocationsSection />
      <ContactButtons estado="desktop" />

      {/* Datos estructurados para SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Lebauto",
            description:
              "Concesionario de Coches Eléctricos y de Segunda Mano. Especialistas en vehículos eléctricos de segunda mano, km0 y nuevos. Ofrecemos soluciones de carga, financiación especializada y asesoramiento en ayudas y subvenciones para la movilidad sostenible.",
            url: "https://lebauto.vercel.app",
            telephone: "+34912345678",
            address: {
              "@type": "PostalAddress",
              streetAddress: "Avenida de los Coches, 123",
              addressLocality: "Madrid",
              postalCode: "28001",
              addressCountry: "ES",
            },
            geo: {
              "@type": "GeoCoordinates",
              latitude: "40.4168",
              longitude: "-3.7038",
            },
            openingHoursSpecification: [
              {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                ],
                opens: "09:00",
                closes: "20:00",
              },
              {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: "Saturday",
                opens: "10:00",
                closes: "14:00",
              },
            ],
            sameAs: [
              "https://www.facebook.com/lebauto",
              "https://www.instagram.com/lebauto",
              "https://twitter.com/lebauto",
            ],
          }),
        }}
      />
    </>
  );
}
