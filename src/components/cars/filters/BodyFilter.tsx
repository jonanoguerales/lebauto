"use client";

import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import Image from "next/image";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { FiltersData } from "@/lib/definitions";
import { CarFront } from "lucide-react";

export interface BodyTypeOption {
  value: string;
  label: string;
  image: string;
}

export interface BodyTypeDoorsSeatsFilterProps {
  filters: FiltersData;
  uniqueBodyTypes: BodyTypeOption[];
  doorFrom: number;
  doorTo: number;
  seatFrom: number;
  seatTo: number;
  setDoorFrom: (value: number) => void;
  setDoorTo: (value: number) => void;
  setSeatFrom: (value: number) => void;
  setSeatTo: (value: number) => void;
  handleBodyTypeChange: (bodyType: string, checked: boolean) => void;
}

export function BodyFilter({
  filters,
  uniqueBodyTypes,
  doorFrom,
  doorTo,
  seatFrom,
  seatTo,
  setDoorFrom,
  setDoorTo,
  setSeatFrom,
  setSeatTo,
  handleBodyTypeChange,
}: BodyTypeDoorsSeatsFilterProps) {
  const doorOptions = [2, 3, 4, 5];
  const seatOptions = [2, 3, 4, 5, 6, 7, 8];

  return (
    <AccordionItem value="bodyType">
      <AccordionTrigger className="py-3">
      <div className="flex items-center gap-2">
          <div>
          <CarFront className="h-5 w-5" />
          </div>
          <span>Carrocería</span>
        </div>
      </AccordionTrigger>
      <AccordionContent>
        <div className="space-y-6">
          {/* Carrocería */}
          <div>
            <Label className="block mb-2 font-semibold">
              Tipo de Carrocería
            </Label>
            <div className="grid grid-cols-2 gap-4">
              {uniqueBodyTypes.map((body) => (
                <div key={body.value} className="flex items-center gap-2">
                  <Checkbox
                    id={`bodytype-${body.value}`}
                    checked={filters.bodyType?.includes(body.value) || false}
                    onCheckedChange={(checked) =>
                      handleBodyTypeChange(body.value, checked === true)
                    }
                  />
                  <Label htmlFor={`bodytype-${body.value}`} className="flex flex-col items-center gap-2">
                    <Image src={body.image} alt={body.label} width={100} height={56} />
                    <span>{body.label}</span>
                  </Label>
                </div>
              ))}
            </div>
          </div>
          {/* Puertas */}
          <div>
            <Label className="block mb-2 font-semibold">Puertas</Label>
            <div className="grid grid-cols-2 gap-4 p-1">
              <div>
                <Label className="mb-1">Desde</Label>
                <Select value={doorFrom.toString()} onValueChange={(value) => setDoorFrom(Number(value))}>
                  <SelectTrigger>
                    <SelectValue placeholder="Desde" />
                  </SelectTrigger>
                  <SelectContent>
                    {doorOptions.map((opt) => (
                      <SelectItem key={opt} value={opt.toString()}>
                        {opt}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label className="mb-1">Hasta</Label>
                <Select value={doorTo.toString()} onValueChange={(value) => setDoorTo(Number(value))}>
                  <SelectTrigger>
                    <SelectValue placeholder="Hasta" />
                  </SelectTrigger>
                  <SelectContent>
                    {doorOptions.map((opt) => (
                      <SelectItem key={opt} value={opt.toString()}>
                        {opt}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
          {/* Plazas */}
          <div>
            <Label className="block mb-2 font-semibold">Plazas</Label>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label>Desde</Label>
                <Select value={seatFrom.toString()} onValueChange={(value) => setSeatFrom(Number(value))}>
                  <SelectTrigger>
                    <SelectValue placeholder="Desde" />
                  </SelectTrigger>
                  <SelectContent>
                    {seatOptions.map((opt) => (
                      <SelectItem key={opt} value={opt.toString()}>
                        {opt}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label>Hasta</Label>
                <Select value={seatTo.toString()} onValueChange={(value) => setSeatTo(Number(value))}>
                  <SelectTrigger>
                    <SelectValue placeholder="Hasta" />
                  </SelectTrigger>
                  <SelectContent>
                    {seatOptions.map((opt) => (
                      <SelectItem key={opt} value={opt.toString()}>
                        {opt}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        </div>
      </AccordionContent>
    </AccordionItem>
  );
}
