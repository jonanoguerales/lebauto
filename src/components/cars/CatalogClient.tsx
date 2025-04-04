"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { useViewStore, useFilterStore } from "@/lib/store";
import type { CatalogClientProps } from "@/lib/definitions";
import { Button } from "@/components/ui/button";
import { Filter, FilterX, Grid, List } from "lucide-react";
import CarList from "./CarList";
import CarFilters from "./CarFilters";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { useResponsiveView } from "@/hooks/useResponsiveView";
import { CarCardSkeleton } from "./skeleton/CarSkeleton";
import { LoadingVehicles } from "./LoadingCars";

export default function CatalogClient({
  allCars,
  initialCars,
  brand,
  model,
  fuel,
  color,
  location,
  maxKm,
  minKm,
  maxPrice,
  minPrice,
  maxYear,
  minYear,
  bodyType,
  doorFrom,
  doorTo,
  seatFrom,
  seatTo,
}: CatalogClientProps) {
  const { view, setView } = useViewStore();
  const {
    filteredCars,
    setFilteredCars,
    setFilter,
    setAllCars,
    clearFilters,
    getActiveFiltersCount,
    isLoading,
  } = useFilterStore();
  const [isOpen, setIsOpen] = useState(false);
  const [sortOrder, setSortOrder] = useState("recent");
  const [showLoader, setShowLoader] = useState(false);

  useEffect(() => {
    clearFilters();

    const brandrc = brand?.toString() || "";
    const modelrc = model?.toString() || "";
    const brandArray = brandrc.split(",").filter(Boolean);
    const modelArray = modelrc.split(",").filter(Boolean);
    if (brand) {
      brandArray.forEach((b) => setFilter("brand", b));
    }
    if (model) {
      modelArray.forEach((m) => setFilter("model", m));
    }
    const fuelrc = fuel?.toString() || "";
    const colorrc = color?.toString() || "";
    const locationrc = location?.toString() || "";
    const fuelArray = fuelrc.split(",").filter(Boolean);
    const colorArray = colorrc.split(",").filter(Boolean);
    const locationArray = locationrc.split(",").filter(Boolean);
    if (fuel) {
      fuelArray.forEach((f) => setFilter("fuel", f));
    }
    if (color) {
      colorArray.forEach((c) => setFilter("color", c));
    }
    if (location) {
      locationArray.forEach((l) => setFilter("location", l));
    }
    if (maxKm) {
      setFilter("maxKm", maxKm);
    }
    if (minKm) {
      setFilter("minKm", minKm);
    }
    if (maxPrice) {
      setFilter("maxPrice", maxPrice);
    }
    if (minPrice) {
      setFilter("minPrice", minPrice);
    }
    if (maxYear) {
      setFilter("maxYear", maxYear);
    }
    if (minYear) {
      setFilter("minYear", minYear);
    }
    const bodyTyperc = bodyType?.toString() || "";
    const bodyArray = bodyTyperc.split(",").filter(Boolean);

    if (bodyType) {
      bodyArray.forEach((b) => setFilter("bodyType", b));
    }
    if (doorFrom) {
      setFilter("doorFrom", doorFrom);
    }
    if (doorTo) {
      setFilter("doorTo", doorTo);
    }
    if (seatFrom) {
      setFilter("seatFrom", seatFrom);
    }
    if (seatTo) {
      setFilter("seatTo", seatTo);
    }

    setAllCars(allCars);
    setFilteredCars(initialCars);
  }, []);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    if (isLoading) {
      timeout = setTimeout(() => setShowLoader(true), 300);
    } else {
      setShowLoader(false);
    }
    return () => clearTimeout(timeout);
  }, [isLoading]);

  useResponsiveView();

  const sortedCars = useMemo(() => {
    const cars = [...filteredCars];
    switch (sortOrder) {
      case "price-asc":
        return cars.sort((a, b) => a.price - b.price);
      case "price-desc":
        return cars.sort((a, b) => b.price - a.price);
      case "km-asc":
        return cars.sort((a, b) => a.mileage - b.mileage);
      default:
        return cars;
    }
  }, [filteredCars, sortOrder]);

  const toggleMenu = useCallback(() => setIsOpen((prev) => !prev), []);

  const activeFiltersCount = useFilterStore((state) =>
    state.getActiveFiltersCount()
  );

  return (
    <div className="container mx-auto flex flex-col lg:flex-row min-h-screen pt-4 pb-12 gap-8 mt-[50px] md:mt-20">
      <aside className="hidden lg:block lg:w-80 lg:min-w-80">
        <div className="sticky top-24 bg-white rounded-lg shadow-md max-h-[calc(100vh-6rem)] overflow-y-auto custom-scrollbar">
          <CarFilters />
        </div>
      </aside>

      {isOpen && (
        <div className="fixed inset-0 z-50 bg-white overflow-y-auto custom-scrollbar lg:hidden">
          <CarFilters isOpen={isOpen} toggleMenu={toggleMenu} />
        </div>
      )}

      <section className="flex-1">
        <header className="mb-8">
          <h1 className="text-2xl lg:text-3xl font-bold">
            Concesionario de coches de segunda mano, ocasión y km 0
          </h1>
        </header>

        <div className="flex flex-col-reverse sm:flex-row gap-4 justify-between items-center mb-8">
          <h2 className="text-md md:text-lg lg:text-xl xl:text-2xl font-bold w-full">
            Se han encontrado {sortedCars.length} vehículo(s)
          </h2>

          <div className="flex items-center gap-4 w-full justify-end">
            <div className="hidden lg:flex gap-2">
              <Button
                variant={view === "grid" ? "default" : "outline"}
                size="icon"
                onClick={() => setView("grid")}
                aria-label="Ver resultados en cuadrícula"
                title="Vista en cuadrícula"
              >
                <Grid className="h-4 w-4" />
              </Button>
              <Button
                variant={view === "list" ? "default" : "outline"}
                size="icon"
                onClick={() => setView("list")}
                aria-label="Ver resultados en lista"
                title="Vista en lista"
              >
                <List className="h-4 w-4" />
              </Button>
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={toggleMenu}
              aria-label={isOpen ? "Cerrar filtros" : "Abrir filtros"}
              title={isOpen ? "Cerrar filtros" : "Abrir filtros"}
              className="lg:hidden relative"
            >
              {isOpen ? (
                <FilterX className="h-4 w-4" />
              ) : (
                <Filter className="h-4 w-4" />
              )}
              <Badge
                variant="destructive"
                className="absolute top-[-10px] right-[-13px] px-2 py-[0.2rem]"
                aria-label="Filtros activos"
                title="Filtros activos"
              >
                {activeFiltersCount}
              </Badge>
            </Button>

            <Select value={sortOrder} onValueChange={setSortOrder}>
              <SelectTrigger aria-label="Ordenar vehículos por">
                <SelectValue placeholder="Ordenar resultados" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="recent">Más recientes</SelectItem>
                <SelectItem value="price-asc">Precio: menor a mayor</SelectItem>
                <SelectItem value="price-desc">
                  Precio: mayor a menor
                </SelectItem>
                <SelectItem value="km-asc">
                  Kilómetros: menor a mayor
                </SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div>
          {isLoading && showLoader ? (
            <LoadingVehicles />
          ) : (
            <div className="transition-opacity duration-300 ease-in-out opacity-100">
              <CarList cars={sortedCars} />
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
