// src/lib/supabase/fetchFilteredCars.ts
import type { Car } from "@/lib/definitions";
import { supabaseClient } from "../../app/supabase/supabase";
import { mapCarFromDB } from "@/utils/mappers"; // Asumiendo que lo usas

export async function fetchFilteredCars(searchParams: any): Promise<Car[]> {
  let query = supabaseClient.from("cars").select("*");

  // Aplicar filtros como lo tenías
  if (typeof searchParams.brand === "string" && searchParams.brand) {
    const brands = searchParams.brand.split(",").map((v: string) => v.trim());
    if (brands.length > 0) query = query.in("brand", brands);
  }
  if (typeof searchParams.model === "string" && searchParams.model) {
    const models = searchParams.model.split(",").map((v: string) => v.trim());
    if (models.length > 0) query = query.in("model", models);
  }
  // ... (todos tus otros if para filtros)
  if (typeof searchParams.fuel === "string" && searchParams.fuel) {
    const fuels = searchParams.fuel.split(",").map((v: string) => v.trim());
    if (fuels.length > 0) query = query.in("fuel", fuels);
  }
  if (typeof searchParams.color === "string" && searchParams.color) {
    const colors = searchParams.color.split(",").map((v: string) => v.trim());
    if (colors.length > 0) query = query.in("color", colors);
  }
  if (typeof searchParams.location === "string" && searchParams.location) {
    const locations = searchParams.location.split(",").map((v: string) => v.trim());
    if (locations.length > 0) query = query.in("location", locations);
  }
  if (typeof searchParams.bodyType === "string" && searchParams.bodyType) {
    const bodyTypes = searchParams.bodyType.split(",").map((v: string) => v.trim());
    if (bodyTypes.length > 0) query = query.in("body_type", bodyTypes);
  }
  if (typeof searchParams.minPrice === "string") query = query.gte("price", Number(searchParams.minPrice));
  if (typeof searchParams.maxPrice === "string") query = query.lte("price", Number(searchParams.maxPrice));
  if (typeof searchParams.minYear === "string") query = query.gte("year", Number(searchParams.minYear));
  if (typeof searchParams.maxYear === "string") query = query.lte("year", Number(searchParams.maxYear));
  if (typeof searchParams.minKm === "string") query = query.gte("mileage", Number(searchParams.minKm));
  if (typeof searchParams.maxKm === "string") query = query.lte("mileage", Number(searchParams.maxKm));
  if (typeof searchParams.doorFrom === "string") query = query.gte("doors", Number(searchParams.doorFrom));
  if (typeof searchParams.doorTo === "string") query = query.lte("doors", Number(searchParams.doorTo));
  if (typeof searchParams.seatFrom === "string") query = query.gte("seats", Number(searchParams.seatFrom));
  if (typeof searchParams.seatTo === "string") query = query.lte("seats", Number(searchParams.seatTo));
  if (typeof searchParams.transmission === "string" && searchParams.transmission) {
    const transmissions = searchParams.transmission.split(",").map((v: string) => v.trim());
    if (transmissions.length > 0) query = query.in("transmission", transmissions);
  }
  if (typeof searchParams.environmental_tag === "string" && searchParams.environmental_tag) {
    const tags = searchParams.environmental_tag.split(",").map((v: string) => v.trim());
    if (tags.length > 0) query = query.in("environmental_tag", tags);
  }
  if (typeof searchParams.drivetrain === "string" && searchParams.drivetrain) {
    const drivetrains = searchParams.drivetrain.split(",").map((v: string) => v.trim());
    if (drivetrains.length > 0) query = query.in("drivetrain", drivetrains);
  }
  if (typeof searchParams.minPower === "string") query = query.gte("power", Number(searchParams.minPower));
  if (typeof searchParams.maxPower === "string") query = query.lte("power", Number(searchParams.maxPower));
  if (typeof searchParams.minEngineDisplacement === "string") query = query.gte("engine_displacement", Number(searchParams.minEngineDisplacement));
  if (typeof searchParams.maxEngineDisplacement === "string") query = query.lte("engine_displacement", Number(searchParams.maxEngineDisplacement));


  // Orden por defecto
  query = query.order('created_at', { ascending: false });

  const { data: carsData, error } = await query;

  if (error) {
    console.error("Error fetching filtered cars:", error);
    return [];
  }

  // Mapear imágenes y características
  const carsWithDetails = await Promise.all(
    (carsData || []).map(async (car) => {
      const { data: carImages } = await supabaseClient
        .from("car_images")
        .select("image_url")
        .eq("car_id", car.id);

      const { data: carFeaturesData } = await supabaseClient
        .from("car_features")
        .select("feature_id")
        .eq("car_id", car.id);

      let features: string[] = [];
      if (carFeaturesData && carFeaturesData.length > 0) {
        const featureIds = carFeaturesData.map((cf) => cf.feature_id);
        const { data: featureDetails } = await supabaseClient
          .from("features")
          .select("name")
          .in("id", featureIds);
        features = featureDetails?.map((f) => f.name) || [];
      }
      
      return mapCarFromDB({ 
          ...car, 
          images: carImages?.map(img => img.image_url) || [], 
          features 
      });
    })
  );
  return carsWithDetails || [];
}