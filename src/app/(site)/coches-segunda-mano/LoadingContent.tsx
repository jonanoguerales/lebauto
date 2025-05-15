import { fetchFilteredCars } from "@/lib/supabase/fetchFilteredCars";
import { fetchCars } from "@/app/supabase/supabase";
import CatalogClient from "@/features/cars/CatalogClient";

export default async function LoadingContent({ searchParams }: { searchParams: any }) {
  const params = await Promise.resolve(searchParams);
  const filteredCars = await fetchFilteredCars(params);
  const allCars = await fetchCars();

  return (
    <CatalogClient
      allCars={allCars}
      initialCars={filteredCars}
      brand={typeof params.brand === "string" ? params.brand : ""}
      model={typeof params.model === "string" ? params.model : ""}
      fuel={typeof params.fuel === "string" ? params.fuel : ""}
      color={typeof params.color === "string" ? params.color : ""}
      location={typeof params.location === "string" ? params.location : ""}
      minPrice={typeof params.minPrice === "string" ? params.minPrice : ""}
      maxPrice={typeof params.maxPrice === "string" ? params.maxPrice : ""}
      minYear={typeof params.minYear === "string" ? params.minYear : ""}
      maxYear={typeof params.maxYear === "string" ? params.maxYear : ""}
      minKm={typeof params.minKm === "string" ? params.minKm : ""}
      maxKm={typeof params.maxKm === "string" ? params.maxKm : ""}
      bodyType={typeof params.bodyType === "string" ? params.bodyType : ""}
      doorFrom={typeof params.doorFrom === "string" ? Number(params.doorFrom) : undefined}
      doorTo={typeof params.doorTo === "string" ? Number(params.doorTo) : undefined}
      seatFrom={typeof params.seatFrom === "string" ? Number(params.seatFrom) : undefined}
      seatTo={typeof params.seatTo === "string" ? Number(params.seatTo) : undefined}
    />
  );
}
