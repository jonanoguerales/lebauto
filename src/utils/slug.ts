import slugify from "slugify";

export function generateVehicleSlug(vehicle: {
  brand: string;
  model: string;
  mileage: number;
  year: number;
  id: string;
}): string {
  const { brand, model, mileage, year, id } = vehicle;
  const baseSlug = slugify(`${brand} ${model} con ${mileage}km ${year}`, {
    lower: true,
    strict: true,
  });
  const uniquePart = id.slice(0, 8);
  return `${baseSlug}-${uniquePart}`;
}

export function generateChargerSlug(charger: {
  name: string;
  brand?: string;
  id: string;
}): string {
  const { name, brand, id } = charger;
  const baseSlug = slugify(brand ? `${brand} ${name}` : name, {
    lower: true,
    strict: true,
    remove: /[*+~.()'"!:@]/g 
  });
  const uniquePart = id.slice(0, 8);
  return `${baseSlug}-${uniquePart}`;
}