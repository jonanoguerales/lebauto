import { notFound } from "next/navigation";
import { fetchCarDetailsBySlug } from "@/app/supabase/supabase";
import CarGallery from "@/features/car/components/CarGallery";
import CarInfo from "@/features/car/components/CarInfo";
import CarFeatures from "@/features/car/components/CarFeatures";
import CarContact from "@/features/car/components/CarContact";

interface CarDetailsLoaderProps {
  slug: string;
}

export default async function CarDetailsLoader({ slug }: CarDetailsLoaderProps) {
  const car = await fetchCarDetailsBySlug(slug); 

  if (!car) {
    notFound(); 
  }

  return (
    <section className="grid lg:grid-cols-[2fr_1fr] gap-8 animate-fadeInAfterLoad">
      <div>
        <CarGallery images={car.images || []} /> 
        <CarInfo car={car} />
        <CarFeatures features={car.features || []} /> 
      </div>
      <div className="lg:sticky lg:top-24 h-fit">
        <CarContact car={car} />
      </div>
    </section>
  );
}