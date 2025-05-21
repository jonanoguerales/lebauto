"use client";

import { useEffect, useMemo, useState } from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Accordion } from "@/components/ui/accordion";
import { useFilterStore } from "@/lib/store";
import { useToast } from "@/hooks/useToast";
import { usePriceDebounce } from "@/hooks/usePriceDebounce";
import { useYearDebounce } from "@/hooks/useYearDebounce";
import { useKmDebounce } from "@/hooks/useKmDebounce";
import { BrandModelFilter } from "./filters/BrandModelFilter";
import { PriceFilter } from "./filters/PriceFilter";
import { YearFilter } from "./filters/YearFilter";
import { BodyFilter } from "./filters/BodyFilter";
import { MotorFilter } from "./filters/MotorFilter";
import { KmFilter } from "./filters/KmFilter";
import { ColorFilter } from "./filters/ColorFilter";
import { LocationFilter } from "./filters/LocationFilter";
import type { FilterKey, ArrayFilterKey, NumberFilterKey } from "@/lib/definitions";

export default function CarFilters() {
  const { toast } = useToast();
  const currentYear = new Date().getFullYear();

  const { filters, setFilter, removeFilter, clearFilters: storeClearFilters, allCars } = useFilterStore();

  const [minPrice, setMinPrice] = useState<string>("0");
  const [maxPrice, setMaxPrice] = useState<string>("100000");
  const [minYear, setMinYear] = useState<string>("1990");
  const [maxYear, setMaxYear] = useState<string>(currentYear.toString());
  const [minKm, setMinKm] = useState<string>("0");
  const [maxKm, setMaxKm] = useState<string>("500000");
  const [doorFrom, setDoorFrom] = useState<number>(2);
  const [doorTo, setDoorTo] = useState<number>(5);
  const [seatFrom, setSeatFrom] = useState<number>(2);
  const [seatTo, setSeatTo] = useState<number>(9);

  const [searchTerm, setSearchTerm] = useState<string>("");
  const [expandedBrands, setExpandedBrands] = useState<Record<string, boolean>>({});
  
  const uniqueBrands = useMemo(() => Array.from(new Set(allCars.map((car) => car.brand))).sort(), [allCars]);
  const modelsByBrand = useMemo(() => {
    const res: Record<string, string[]> = {};
    uniqueBrands.forEach((brand) => {
      res[brand] = Array.from(new Set(allCars.filter((car) => car.brand === brand).map((car) => car.model))).sort();
    });
    return res;
  }, [allCars, uniqueBrands]);

  const selectAllModelsUIState = useMemo(() => {
    const newUiState: Record<string, boolean> = {};
    uniqueBrands.forEach(brand => {
        const isBrandInFilter = (filters.brand || []).includes(brand);
        const hasSpecificModelOfThisBrandInFilter = (filters.model || []).some(modelName => 
            (modelsByBrand[brand] || []).includes(modelName)
        );
        newUiState[brand] = isBrandInFilter && !hasSpecificModelOfThisBrandInFilter;
    });
    return newUiState;
  }, [filters.brand, filters.model, uniqueBrands, modelsByBrand]);

  useEffect(() => {
    setMinPrice(filters.minPrice?.toString() || "0");
    setMaxPrice(filters.maxPrice?.toString() || "100000");
    setMinYear(filters.minYear?.toString() || "1990");
    setMaxYear(filters.maxYear?.toString() || currentYear.toString());
    setMinKm(filters.minKm?.toString() || "0");
    setMaxKm(filters.maxKm?.toString() || "500000");
    setDoorFrom(filters.doorFrom ?? 2);
    setDoorTo(filters.doorTo ?? 5);
    setSeatFrom(filters.seatFrom ?? 2);
    setSeatTo(filters.seatTo ?? 9);
  }, [filters, currentYear]);

  const lowerSearch = searchTerm.toLowerCase();
  const filteredBrands = useMemo(() => {
    return uniqueBrands.filter((brand) => {
      const brandMatches = brand.toLowerCase().includes(lowerSearch);
      const modelMatches = (modelsByBrand[brand] || []).some((model) => model.toLowerCase().includes(lowerSearch));
      return searchTerm === "" || brandMatches || modelMatches;
    });
  }, [uniqueBrands, lowerSearch, searchTerm, modelsByBrand]);

  const [showAllBrands, setShowAllBrands] = useState<boolean>(false);
  const displayedBrands = useMemo(
    () => (showAllBrands ? filteredBrands : filteredBrands.slice(0, 10)),
    [filteredBrands, showAllBrands]
  );

  const uniqueColors = useMemo(() => Array.from(new Set(allCars.map((car) => car.color))).sort(), [allCars]);
  const uniqueLocations = useMemo(() => Array.from(new Set(allCars.filter((car) => car.location).map((car) => car.location!))).sort(), [allCars]);
  const uniqueBodyTypes = useMemo(() => [
    { value: "SUV", label: "SUV", image: "/tipo-carroceria/body-4x4-suv.png" },
    { value: "Berlina", label: "Berlina", image: "/tipo-carroceria/body-berlina.png" },
    { value: "Compacto", label: "Compacto", image: "/tipo-carroceria/body-compacto.png" },
    { value: "Cabrio", label: "Cabrio", image: "/tipo-carroceria/body-cabrio.png" },
    { value: "Coupe", label: "Coupé", image: "/tipo-carroceria/body-coupe.png" },
    { value: "Familiar", label: "Familiar", image: "/tipo-carroceria/body-familiar.png" },
    { value: "Monovolumen", label: "Monovolumen", image: "/tipo-carroceria/body-monovolumen.png" },
    { value: "Pickup", label: "Pick-up", image: "/tipo-carroceria/body-pick-up.png" },
  ], []);

  const handleBodyTypeChange = (bodyType: string, checked: boolean) => {
    if (checked) setFilter("bodyType", bodyType);
    else removeFilter("bodyType", bodyType);
  };

  const handleBrandClick = (brand: string) => {
    setExpandedBrands((prev) => ({ ...prev, [brand]: !prev[brand] }));
  };

  const handleSelectAllModels = (brand: string, checked: boolean) => {
    if (checked) {
      setFilter("brand", brand);
      (modelsByBrand[brand] || []).forEach(modelName => {
        if ((filters.model || []).includes(modelName)) {
          removeFilter("model", modelName);
        }
      });
    } else {
      removeFilter("brand", brand);
    }
  };

  const handleModelChange = (model: string, brand: string, checked: boolean) => {
    if (checked) {
      setFilter("model", model);
      const isBrandSelectedForAllModels = (filters.brand || []).includes(brand) &&
                                      !(filters.model || []).some(m => (modelsByBrand[brand] || []).includes(m) && m !== model);
      if (isBrandSelectedForAllModels) {
        removeFilter("brand", brand);
      }
    } else {
      removeFilter("model", model);
    }
  };
  
  const handleColorChange = (color: string, checked: boolean) => {
    if (checked) setFilter("color", color);
    else removeFilter("color", color);
  };

  const handleLocationChange = (location: string, checked: boolean) => {
    if (checked) setFilter("location", location);
    else removeFilter("location", location);
  };

  const handleClearFilters = () => {
    storeClearFilters(); 
    setSearchTerm("");
    setExpandedBrands({});
  };

  const handleRemoveActiveFilter = (filterItemToRemove: { type: FilterKey; value: string; displayValue: string }) => {
    const { type, value } = filterItemToRemove;

    if (["brand", "model", "color", "fuel", "location", "bodyType", "transmission", "environmentalTag", "drivetrain"].includes(type)) {
      removeFilter(type as ArrayFilterKey, value);
    } else if (value === "price_range") {
      removeFilter("minPrice"); removeFilter("maxPrice");
    } else if (value === "year_range") {
      removeFilter("minYear"); removeFilter("maxYear");
    } else if (value === "km_range") {
      removeFilter("minKm"); removeFilter("maxKm");
    } else if (value === "door_range") {
        removeFilter("doorFrom"); removeFilter("doorTo");
    } else if (value === "seat_range") {
        removeFilter("seatFrom"); removeFilter("seatTo");
    } else if (value === "power_range") {
        removeFilter("minPower"); removeFilter("maxPower");
    } else if (value === "displacement_range") {
        removeFilter("minEngineDisplacement"); removeFilter("maxEngineDisplacement");
    } else {
        removeFilter(type as NumberFilterKey); // Fallback, should ideally not be hit if display values are specific
    }
  };

  const getActiveFiltersForDisplay = (): { type: FilterKey; value: string; displayValue: string }[] => {
    const active: { type: FilterKey; value: string; displayValue: string }[] = [];
    const defaultMaxPrice = 100000; 
    const defaultMaxKm = 500000;    
    const defaultMaxPower = 1000;
    const defaultMaxEngineDisplacement = 10000;

    (filters.brand || []).forEach(brandVal => {
        const modelsOfThisBrandInFilter = (filters.model || []).filter(model => (modelsByBrand[brandVal] || []).includes(model));
        if (modelsOfThisBrandInFilter.length === 0) {
            active.push({ type: "brand", value: brandVal, displayValue: `${brandVal} (Todos)` });
        }
    });
    (filters.model || []).forEach(modelVal => {
        // Para no duplicar si la marca ya está como "(Todos)"
        const brandOfThisModel = uniqueBrands.find(b => (modelsByBrand[b] || []).includes(modelVal));
        if (brandOfThisModel && !( (filters.brand || []).includes(brandOfThisModel) && !(filters.model || []).some(m => (modelsByBrand[brandOfThisModel] || []).includes(m) && m !== modelVal) ) ) {
             active.push({ type: "model", value: modelVal, displayValue: modelVal });
        } else if (!brandOfThisModel){ // Si el modelo no tiene marca asociada (raro pero posible)
             active.push({ type: "model", value: modelVal, displayValue: modelVal });
        }
    });
    
    ( ["fuel", "color", "location", "bodyType", "transmission", "environmentalTag", "drivetrain"] as ArrayFilterKey[]).forEach(key => {
        if (filters[key] && (filters[key] as string[]).length > 0) {
            (filters[key] as string[]).forEach(val => active.push({ type: key, value: val, displayValue: val }));
        }
    });

    if (filters.minPrice !== undefined || filters.maxPrice !== undefined) {
      if (!((filters.minPrice === undefined || filters.minPrice === 0) && (filters.maxPrice === undefined || filters.maxPrice === defaultMaxPrice))) {
        active.push({ type: "minPrice", value: "price_range", displayValue: `Precio: ${filters.minPrice ?? 0}€ - ${filters.maxPrice ?? defaultMaxPrice}€` });
      }
    }
    if (filters.minYear !== undefined || filters.maxYear !== undefined) {
       if (!((filters.minYear === undefined || filters.minYear === 1990) && (filters.maxYear === undefined || filters.maxYear === currentYear))) {
        active.push({ type: "minYear", value: "year_range", displayValue: `Año: ${filters.minYear ?? 1990} - ${filters.maxYear ?? currentYear}` });
      }
    }
    if (filters.minKm !== undefined || filters.maxKm !== undefined) {
      if (!((filters.minKm === undefined || filters.minKm === 0) && (filters.maxKm === undefined || filters.maxKm === defaultMaxKm))) {
        active.push({ type: "minKm", value: "km_range", displayValue: `Km: ${filters.minKm ?? 0} - ${filters.maxKm ?? defaultMaxKm}` });
      }
    }
    if (filters.doorFrom !== undefined || filters.doorTo !== undefined) {
      if (!((filters.doorFrom === undefined || filters.doorFrom === 2) && (filters.doorTo === undefined || filters.doorTo === 5))) {
        active.push({ type: "doorFrom", value: "door_range", displayValue: `Puertas: ${filters.doorFrom ?? 2} - ${filters.doorTo ?? 5}` });
      }
    }
    if (filters.seatFrom !== undefined || filters.seatTo !== undefined) {
      if (!((filters.seatFrom === undefined || filters.seatFrom === 2) && (filters.seatTo === undefined || filters.seatTo === 9))) {
        active.push({ type: "seatFrom", value: "seat_range", displayValue: `Plazas: ${filters.seatFrom ?? 2} - ${filters.seatTo ?? 9}` });
      }
    }
    if (filters.minPower !== undefined || filters.maxPower !== undefined) {
      if (!((filters.minPower === undefined || filters.minPower === 0) && (filters.maxPower === undefined || filters.maxPower === defaultMaxPower))) {
        active.push({ type: "minPower", value: "power_range", displayValue: `Potencia: ${filters.minPower ?? 0}CV - ${filters.maxPower ?? defaultMaxPower}CV` });
      }
    }
    if (filters.minEngineDisplacement !== undefined || filters.maxEngineDisplacement !== undefined) {
      if (!((filters.minEngineDisplacement === undefined || filters.minEngineDisplacement === 0) && (filters.maxEngineDisplacement === undefined || filters.maxEngineDisplacement === defaultMaxEngineDisplacement))) {
       active.push({ type: "minEngineDisplacement", value: "displacement_range", displayValue: `Cilindrada: ${filters.minEngineDisplacement ?? 0}cc - ${filters.maxEngineDisplacement ?? defaultMaxEngineDisplacement}cc` });
      }
    }
    return active;
  };

  const activeFiltersForDisplayArray = useMemo(getActiveFiltersForDisplay, [filters, modelsByBrand, currentYear, uniqueBrands]);

  const { debouncedValidateMinPrice, debouncedValidateMaxPrice } =
    usePriceDebounce({ minPrice, maxPrice, setMinPrice, setMaxPrice, setFilter, toast });
  const { debouncedValidateMinYear, debouncedValidateMaxYear } =
    useYearDebounce({ minYear, maxYear, setMinYear, setMaxYear, setFilter, toast });
  const { debouncedValidateMinKm, debouncedValidateMaxKm } = useKmDebounce({
    minKm, maxKm, setMinKm, setMaxKm, setFilter, toast });

  const brandModelConfig = {
    filters, searchTerm, setSearchTerm, displayedBrands, modelsByBrand, expandedBrands,
    handleBrandClick, lowerSearch, 
    selectAllModelsState: selectAllModelsUIState, 
    handleSelectAllModels,
    handleModelChange, filteredBrands, showAllBrands, setShowAllBrands,
  };

  const PriceFilterConfig = {
    minPrice, setMinPrice, maxPrice, setMaxPrice, debouncedValidateMinPrice, debouncedValidateMaxPrice,
  };
  const YearFilterConfig = {
    minYear, setMinYear, maxYear, setMaxYear, debouncedValidateMinYear, debouncedValidateMaxYear, currentYear,
  };
  const KmFilterConfig = {
    minKm, setMinKm, maxKm, setMaxKm, debouncedValidateMinKm, debouncedValidateMaxKm,
  };

  return (
    <div className="space-y-6 p-6">
      {activeFiltersForDisplayArray.length > 0 && (
        <div className="mt-4">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-medium">Tu búsqueda</h3>
            <Button
              variant="link"
              className="text-sm h-auto p-0"
              onClick={handleClearFilters}
            >
              Eliminar filtros
            </Button>
          </div>
          <div className="flex flex-wrap gap-2 mb-6">
            {activeFiltersForDisplayArray.map((filterItem, index) => (
              <Badge
                key={`${filterItem.type}-${filterItem.value}-${index}`}
                variant="secondary"
                className="flex items-center gap-1"
              >
                {filterItem.displayValue}
                <button
                  onClick={() => handleRemoveActiveFilter(filterItem)}
                  className="ml-1 rounded-full hover:bg-muted p-0.5"
                  aria-label={`Eliminar filtro ${filterItem.displayValue}`}
                >
                  <X className="h-3 w-3" />
                </button>
              </Badge>
            ))}
          </div>
        </div>
      )}
      <Accordion type="multiple" defaultValue={["marca"]}>
        <BrandModelFilter config={brandModelConfig} />
        <PriceFilter config={PriceFilterConfig} />
        <YearFilter config={YearFilterConfig} />
        <BodyFilter
          uniqueBodyTypes={uniqueBodyTypes}
          filters={filters}
          doorFrom={doorFrom}
          doorTo={doorTo}
          seatFrom={seatFrom}
          seatTo={seatTo}
          setDoorFrom={(value) => { setDoorFrom(value); setFilter("doorFrom", value); }}
          setDoorTo={(value) => { setDoorTo(value); setFilter("doorTo", value); }}
          setSeatFrom={(value) => { setSeatFrom(value); setFilter("seatFrom", value); }}
          setSeatTo={(value) => { setSeatTo(value); setFilter("seatTo", value); }}
          handleBodyTypeChange={handleBodyTypeChange}
        />
        <MotorFilter />
        <KmFilter config={KmFilterConfig} />
        <ColorFilter uniqueColors={uniqueColors} filters={filters} handleColorChange={handleColorChange} />
        <LocationFilter uniqueLocations={uniqueLocations} filters={filters} handleLocationChange={handleLocationChange} />
      </Accordion>
    </div>
  );
}