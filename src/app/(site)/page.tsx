import ContactButtons from "@/components/ContactButtons";
import BrandGrid from "@/features/home/components/BrandGrid";
import ChargersAdvisorBanner from "@/features/home/components/ChargersAdvisorBanner";
import DudasAdvisorBanner from "@/features/home/components/DudasAdvisorBanner";
import ElectricChargersSection from "@/features/home/components/ElectricShargersSection";
import ElectricVehiclesSection from "@/features/home/components/ElectricVehiclesSection";
import HeroSection from "@/features/home/components/HeroSection";
import LocationsSection from "@/features/home/components/LocationsSection";
import RentingBanner from "@/features/home/components/RentingBanner";
import SellYourCarSection from "@/features/home/components/SellYourCarSection";
import TestimonialsSection from "@/features/home/components/TestimonialsSection";
import { Metadata } from "next";


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
      {/* <ContactButtons estado="desktop" /> */}

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
