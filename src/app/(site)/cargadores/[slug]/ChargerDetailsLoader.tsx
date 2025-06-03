import { notFound } from "next/navigation";
import { fetchChargerDetailsBySlug } from "@/app/supabase/supabase";
import ChargerDetailDisplay from "@/features/chargers/components/ChargerDetailDisplay";

interface ChargerDetailsLoaderProps {
  slug: string;
}

export default async function ChargerDetailsLoader({ slug }: ChargerDetailsLoaderProps) {
  const charger = await fetchChargerDetailsBySlug(slug);

  if (!charger) {
    notFound();
  }

  return <ChargerDetailDisplay charger={charger} />;
}