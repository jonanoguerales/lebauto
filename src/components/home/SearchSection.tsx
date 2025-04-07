"use client";

import { useState, useEffect, useMemo } from "react";
import { useRouter } from "next/navigation";
import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { fetchCars } from "@/supabase/supabase";

export default function SearchSection() {
  const router = useRouter();
  const [cars, setCars] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedBrand, setSelectedBrand] = useState("all");
  const [selectedModel, setSelectedModel] = useState("all");

  useEffect(() => {
    fetchCars()
      .then((data) => {
        setCars(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching cars:", err);
        setLoading(false);
      });
  }, []);

  const uniqueBrands = useMemo(
    () => Array.from(new Set(cars.map((car) => car.brand))),
    [cars]
  );

  const filteredModels = useMemo(
    () =>
      selectedBrand && selectedBrand !== "all"
        ? Array.from(
            new Set(
              cars.filter((car) => car.brand === selectedBrand).map((car) => car.model)
            )
          )
        : [],
    [selectedBrand, cars]
  );

  const handleSearch = () => {
    const query = new URLSearchParams();
    if (selectedBrand && selectedBrand !== "all") query.set("brand", selectedBrand);
    if (selectedModel && selectedModel !== "all") query.set("model", selectedModel);
    router.push(`/coches-segunda-mano?${query.toString()}`);
  };

  return (
    <section className="relative z-10 -mt-24 sm:-mt-16 pb-8" role="search">
      <div className="container mx-auto">
        <div className="bg-white/95 backdrop-blur-md rounded-2xl p-6 md:p-8 shadow-xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Select onValueChange={setSelectedBrand}>
              <SelectTrigger className="w-full" aria-label="Seleccionar marca">
                <SelectValue placeholder={loading ? "Cargando marcas..." : "Selecciona marca"} />
              </SelectTrigger>
              <SelectContent>
                {loading ? (
                  <SelectItem value="none" disabled>
                    Cargando marcas...
                  </SelectItem>
                ) : (
                  <>
                    <SelectItem value="all">Todas las marcas</SelectItem>
                    {uniqueBrands.map((brand) => (
                      <SelectItem key={brand} value={brand}>
                        {brand}
                      </SelectItem>
                    ))}
                  </>
                )}
              </SelectContent>
            </Select>

            <Select onValueChange={setSelectedModel}>
              <SelectTrigger className="w-full" aria-label="Seleccionar modelo">
                <SelectValue placeholder={loading ? "Cargando modelos..." : "Selecciona modelo"} />
              </SelectTrigger>
              <SelectContent>
                {loading ? (
                  <SelectItem value="none" disabled>
                    Cargando modelos...
                  </SelectItem>
                ) : (
                  <>
                    {filteredModels.length > 0 ? (
                      filteredModels.map((model) => (
                        <SelectItem key={model} value={model}>
                          {model}
                        </SelectItem>
                      ))
                    ) : (
                      <SelectItem value="all" disabled>
                        No hay modelos
                      </SelectItem>
                    )}
                  </>
                )}
              </SelectContent>
            </Select>

            <Button
              onClick={handleSearch}
              className="w-full bg-gray-900 hover:bg-gray-700 text-white px-8 text-lg"
              aria-label="Buscar coches"
            >
              <Search className="mr-2 h-5 w-5" />
              Buscar
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
