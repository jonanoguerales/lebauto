"use client";

import {
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { useFilterStore } from "@/lib/store";
import { Wrench } from "lucide-react";

const transmissions = ["Manual", "Automático", "CVT", "DSG / Doble embrague"];
const fuels = [
  "Diésel",
  "Gasolina",
  "Eléctrico",
  "Híbrido",
  "Híbrido enchufable",
  "Gas licuado (GLP)",
  "Gas natural (GNC)",
  "Otros",
];
const envTags = [
  {
    value: "CERO",
    label: "Etiqueta CERO",
    icon: "/distintivos/CERO.svg",
  },
  {
    value: "ECO",
    label: "Etiqueta ECO",
    icon: "/distintivos/ECO.svg",
  },
  {
    value: "C",
    label: "Etiqueta C",
    icon: "/distintivos/C.svg",
  },
  {
    value: "B",
    label: "Etiqueta B",
    icon: "/distintivos/B.svg",
  },
];

const drivetrains = ["4x4", "Delantera", "Trasera"];

const powerOptions = [
  { cv: 50, kw: 37 },
  { cv: 60, kw: 44 },
  { cv: 70, kw: 51 },
  { cv: 80, kw: 59 },
  { cv: 90, kw: 66 },
  { cv: 100, kw: 74 },
  { cv: 110, kw: 81 },
  { cv: 120, kw: 88 },
  { cv: 130, kw: 96 },
  { cv: 140, kw: 104 },
  { cv: 150, kw: 112 },
  { cv: 160, kw: 120 },
  { cv: 170, kw: 128 },
  { cv: 180, kw: 136 },
  { cv: 190, kw: 144 },
  { cv: 200, kw: 152 },
  { cv: 250, kw: 192 },
  { cv: 300, kw: 232 },
  { cv: 350, kw: 272 },
  { cv: 400, kw: 312 },
  { cv: 500, kw: 392, last: true },
];
const displacementOptions = [
  { cc: 1000 },
  { cc: 1200 },
  { cc: 1400 },
  { cc: 1600 },
  { cc: 1800 },
  { cc: 1900 },
  { cc: 2000 },
  { cc: 2200 },
  { cc: 2400 },
  { cc: 2600 },
  { cc: 3000 },
  { cc: 3500 },
  { cc: 4000 },
  { cc: 4500 },
  { cc: 5000 },
  { cc: 5500 },
  { cc: 6000 },
  { cc: 6500 },
  { cc: 7000, last: true },
];

export function MotorFilter() {
  const { filters, setFilter, removeFilter, applyFilters } = useFilterStore();

  const handleCheckboxChange = (
    key: "transmission" | "fuel" | "environmentalTag" | "drivetrain",
    value: string,
    checked: boolean
  ) => {
    if (checked) {
      setFilter(key, value);
    } else {
      removeFilter(key, value);
    }
    applyFilters();
  };

  const isChecked = (
    key: "transmission" | "fuel" | "environmentalTag" | "drivetrain",
    value: string
  ) => {
    return filters[key]?.includes(value) ?? false;
  };

  const handleRangeSelect = (
    key:
      | "minPower"
      | "maxPower"
      | "minEngineDisplacement"
      | "maxEngineDisplacement",
    value: string
  ) => {
    if (value === "none") {
      removeFilter(key);
    } else {
      setFilter(key, Number(value));
    }
    applyFilters();
  };

  const formatCC = (cc: number) => cc.toLocaleString("es");

  return (
    <AccordionItem value="motor">
      <AccordionTrigger className="py-3">
        <div className="flex items-center gap-2">
          <Wrench className="h-5 w-5" />
          <span>Motor</span>
        </div>
      </AccordionTrigger>

      <AccordionContent className="space-y-4 mt-4">
        {/* Cambio */}
        <div>
          <h4 className="font-semibold mb-2">Cambio</h4>
          {transmissions.map((t) => (
            <div key={t} className="flex items-center space-x-2 mb-2">
              <Checkbox
                id={`trans-${t}`}
                checked={isChecked("transmission", t)}
                onCheckedChange={(checked) =>
                  handleCheckboxChange("transmission", t, checked === true)
                }
              />
              <Label htmlFor={`trans-${t}`}>{t}</Label>
            </div>
          ))}
        </div>

        {/* Combustible */}
        <div>
          <h4 className="font-semibold mb-2">Combustible</h4>
          {fuels.map((f) => (
            <div key={f} className="flex items-center space-x-2 mb-2">
              <Checkbox
                id={`fuel-${f}`}
                checked={isChecked("fuel", f)}
                onCheckedChange={(checked) =>
                  handleCheckboxChange("fuel", f, checked === true)
                }
              />
              <Label htmlFor={`fuel-${f}`}>{f}</Label>
            </div>
          ))}
        </div>

        {/* Etiqueta medioambiental */}
        <div>
          <h4 className="font-semibold mb-2">Etiqueta medioambiental</h4>
          {envTags.map((tag) => (
            <div key={tag.value} className="flex items-center space-x-2 mb-2">
              <Checkbox
                id={`env-${tag.value}`}
                checked={isChecked("environmentalTag", tag.value)}
                onCheckedChange={(checked) =>
                  handleCheckboxChange(
                    "environmentalTag",
                    tag.value,
                    checked === true
                  )
                }
              />
              <img src={tag.icon} alt={tag.label} className="w-6 h-6" />
              <Label htmlFor={`env-${tag.value}`}>{tag.label}</Label>
            </div>
          ))}
        </div>

        {/* Tracción */}
        <div>
          <h4 className="font-semibold mb-2">Tracción</h4>
          {drivetrains.map((drive) => (
            <div key={drive} className="flex items-center space-x-2 mb-2">
              <Checkbox
                id={`drive-${drive}`}
                checked={isChecked("drivetrain", drive)}
                onCheckedChange={(checked) =>
                  handleCheckboxChange("drivetrain", drive, checked === true)
                }
              />
              <Label htmlFor={`drive-${drive}`}>{drive}</Label>
            </div>
          ))}
        </div>

        {/* Potencia */}
        <div>
          <h4 className="font-semibold mb-2">Potencia (CV)</h4>
          <div className="flex gap-2">
            <Select
              onValueChange={(val) => handleRangeSelect("minPower", val)}
              value={filters.minPower ? String(filters.minPower) : "none"}
            >
              <SelectTrigger className="w-[120px]">
                <SelectValue placeholder="Desde" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="none">Desde</SelectItem>
                {powerOptions.map((opt) => (
                  <SelectItem key={opt.cv} value={String(opt.cv)}>
                    {opt.last
                      ? `${opt.cv} cv (${opt.kw} kW) o más`
                      : `${opt.cv} cv (${opt.kw} kW)`}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select
              onValueChange={(val) => handleRangeSelect("maxPower", val)}
              value={filters.maxPower ? String(filters.maxPower) : "none"}
            >
              <SelectTrigger className="w-[120px]">
                <SelectValue placeholder="Hasta" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="none">Hasta</SelectItem>
                {powerOptions.map((opt) => (
                  <SelectItem key={opt.cv} value={String(opt.cv)}>
                    {opt.last
                      ? `${opt.cv} cv (${opt.kw} kW) o más`
                      : `${opt.cv} cv (${opt.kw} kW)`}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Cilindrada */}
        <div>
          <h4 className="font-semibold mb-2">Cilindrada (cc)</h4>
          <div className="flex gap-2">
            <Select
              onValueChange={(val) =>
                handleRangeSelect("minEngineDisplacement", val)
              }
              value={
                filters.minEngineDisplacement
                  ? String(filters.minEngineDisplacement)
                  : "none"
              }
            >
              <SelectTrigger className="w-[120px]">
                <SelectValue placeholder="Desde" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="none">Desde</SelectItem>
                {displacementOptions.map((opt) => (
                  <SelectItem key={opt.cc} value={String(opt.cc)}>
                    {opt.last
                      ? `${formatCC(opt.cc)} cc o más`
                      : `${formatCC(opt.cc)} cc`}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select
              onValueChange={(val) =>
                handleRangeSelect("maxEngineDisplacement", val)
              }
              value={
                filters.maxEngineDisplacement
                  ? String(filters.maxEngineDisplacement)
                  : "none"
              }
            >
              <SelectTrigger className="w-[120px]">
                <SelectValue placeholder="Hasta" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="none">Hasta</SelectItem>
                {displacementOptions.map((opt) => (
                  <SelectItem key={opt.cc} value={String(opt.cc)}>
                    {opt.last
                      ? `${formatCC(opt.cc)} cc o más`
                      : `${formatCC(opt.cc)} cc`}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
      </AccordionContent>
    </AccordionItem>
  );
}
