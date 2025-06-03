import { fetchChargers } from "@/app/supabase/supabase";
import ChargersClientDisplay from "@/features/chargers/components/ChargersClientDisplay";

export default async function ChargersListLoader() {
  const chargers = await fetchChargers();

  if (!chargers || chargers.length === 0) {
    return (
      <div className="text-center py-12">
        <h2 className="text-2xl font-semibold mb-4">No hay cargadores disponibles</h2>
        <p className="text-muted-foreground">
          Vuelve a intentarlo más tarde o contacta con nosotros para más información.
        </p>
      </div>
    );
  }

  return <ChargersClientDisplay initialChargers={chargers} />;
}