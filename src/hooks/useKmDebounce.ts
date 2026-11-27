import { FilterKey } from "@/lib/definitions";
import { useDebouncedCallback } from "use-debounce";
import { toast } from "sonner";

interface useKmDebounceParams {
    minKm: string;
    maxKm: string;
    setMinKm: (val: string) => void;
    setMaxKm: (val: string) => void;
    setFilter: (key: FilterKey, value: string | number) => void;
}

export function useKmDebounce({ minKm, maxKm, setMinKm, setMaxKm, setFilter }: useKmDebounceParams) {

  const debouncedValidateMaxKm = useDebouncedCallback((value: string) => {
    const numValue = Number(value);
    if (Number(minKm) && numValue < Number(minKm)) {
      toast.error("Error", { description: "Los kilómetros máximos no pueden ser menores que los kilómetros mínimos." });
      setFilter("maxKm", Number(minKm));
      setMaxKm(minKm);
    } else {
      setFilter("maxKm", numValue || 500000);
    }
  }, 500);

  const debouncedValidateMinKm = useDebouncedCallback((value: string) => {
    const numValue = Number(value);
    if (Number(maxKm) && numValue > Number(maxKm)) {
      toast.error("Error", { description: "Los kilómetros mínimos no pueden ser mayores que los kilómetros máximos." });
      setFilter("minKm", Number(maxKm));
      setMinKm(maxKm);
    } else {
      setFilter("minKm", numValue || 0);
    }
  }, 500);

  return { debouncedValidateMaxKm, debouncedValidateMinKm };
}
