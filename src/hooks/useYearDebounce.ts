import { FilterKey } from "@/lib/definitions";
import { useDebouncedCallback } from "use-debounce";
import { toast } from "sonner";

interface YearDebounceProps {
        minYear: string;
        maxYear: string;
        setMinYear: (val: string) => void;
        setMaxYear: (val: string) => void;
        setFilter: (key: FilterKey, value: string | number) => void;
        
}

export function useYearDebounce({ minYear, maxYear, setMinYear, setMaxYear, setFilter }: YearDebounceProps) {

    const debouncedValidateMaxYear = useDebouncedCallback((value: string) => {
        const numValue = Number(value);
        if (Number(minYear) && numValue < Number(minYear)) {
          toast.error("Error", { description: "El año máximo no puede ser menor que el año mínimo." });
          setFilter("maxYear", Number(minYear));
          setMaxYear(minYear);
        } else {
          setFilter("maxYear", numValue || new Date().getFullYear());
        }
      }, 500);
    
      const debouncedValidateMinYear = useDebouncedCallback((value: string) => {
        const numValue = Number(value);
        if (Number(maxYear) && numValue > Number(maxYear)) {
          toast.error("Error", { description: "El año mínimo no puede ser mayor que el año máximo." });
          setFilter("minYear", Number(maxYear));
          setMinYear(maxYear);
        } else {
          setFilter("minYear", numValue || 1990);
        }
      }, 500);
    
      return { debouncedValidateMaxYear, debouncedValidateMinYear };
}