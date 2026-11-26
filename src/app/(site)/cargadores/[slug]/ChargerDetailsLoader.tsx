import { notFound } from "next/navigation";
import { cacheLife } from "next/cache";
import { fetchChargerDetailsBySlug } from "@/app/supabase/supabase";
import ChargerDetailDisplay from "@/features/chargers/components/ChargerDetailDisplay";
import type { Charger } from "@/lib/definitions";

// Datos públicos (sin cookies) cacheados 1 minuto, como el antiguo `revalidate = 60`. La página y su metadata comparten esta función.
export async function getChargerBySlug(slug: string): Promise<Charger | null> {
  "use cache";
  cacheLife("minutes");
  return fetchChargerDetailsBySlug(slug);
}

interface ChargerDetailsLoaderProps {
  slug: string;
}

export default async function ChargerDetailsLoader({ slug }: ChargerDetailsLoaderProps) {
  const charger = await getChargerBySlug(slug);

  if (!charger) {
    notFound();
  }

  return <ChargerDetailDisplay charger={charger} />;
}