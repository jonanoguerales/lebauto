import { notFound } from "next/navigation";
import { fetchCarDetailsBySlug } from "@/app/supabase/supabase";
import CarGallery from "@/features/cars/CarGallery";
import CarInfo from "@/features/cars/CarInfo";
import CarFeatures from "@/features/cars/CarFeatures";
import CarContact from "@/features/cars/CarContact";

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