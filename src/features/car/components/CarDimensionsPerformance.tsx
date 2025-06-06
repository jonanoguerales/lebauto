"use client";

import Image from "next/image";
import { TrendingUp, Droplets, Sigma, Weight, Fuel, Maximize, Timer } from "lucide-react";
import type { Car } from "@/lib/definitions";

interface CarDimensionsPerformanceProps {
  car: Car;
}

const PerformanceMetric: React.FC<{icon: React.ReactNode; value: string; label: string; unit?: string;}> = ({ icon, value, label, unit }) => (
  <div className="flex flex-col items-center text-center">
    <div className="relative w-24 h-24 sm:w-28 sm:h-28 mb-2 group">
      <div className="absolute inset-0 border-2 border-sky-500 rounded-full flex items-center justify-center transition-all duration-300 group-hover:border-sky-600 group-hover:scale-105">
        <div className="text-center">
          <div className="text-2xl sm:text-3xl font-bold text-sky-600 group-hover:text-sky-700 transition-colors">
            {value}
          </div>
          {unit && <div className="text-xs sm:text-sm text-muted-foreground -mt-1">{unit}</div>}
        </div>
      </div>
      <div className="absolute -bottom-2.5 left-1/2 -translate-x-1/2 bg-slate-50 p-1 rounded-full shadow-sm border border-slate-200">
         {icon}
      </div>
    </div>
    <p className="text-sm font-semibold text-slate-600 uppercase tracking-wider mt-1">{label}</p>
  </div>
);

const DimensionFigureWithCuesCSS: React.FC<{
  svgSrc: string;
  altText: string;
  dimensionValue: string;
  dimensionType: 'length' | 'width';
  figureClasses?: string; 
  aspectRatioClass?: string;
  colorClass?: string;
}> = ({ svgSrc, altText, dimensionValue, dimensionType, figureClasses, aspectRatioClass, colorClass = "text-sky-600" }) => {
  
  const lineClasses = "absolute bg-slate-400";
  const capThickness = "w-[1.5px]";

  return (
    <div className={`flex flex-col items-center ${figureClasses}`}>
      <div className={`relative w-full ${aspectRatioClass || 'aspect-video'} ${colorClass} mb-1.5`}>
        <Image
          src={svgSrc}
          alt={altText}
          layout="fill"
          className="object-contain"
        />
        
        <div className="absolute inset-x-0 bottom-[-4px] h-[8px]">
          <div className={`${lineClasses} h-[1.5px] left-[1px] right-[1px] top-1/2 -translate-y-1/2`}></div>
          <div className={`${lineClasses} ${capThickness} h-full left-0 top-0`}></div> 
          <div className={`${lineClasses} ${capThickness} h-full right-0 top-0`}></div> 
        </div>
      </div>
      <p className="text-sm font-medium text-slate-700 mt-1">
        {dimensionValue}
      </p>
    </div>
  );
};

export default function CarDimensionsPerformance({ car }: CarDimensionsPerformanceProps) {
  const dimensions = {
    length: `${(car.variant?.length || 4.86).toString().replace('.',',')}m`,
    width: `${(car.bodyType === "SUV" ? 1.95 : 1.86).toString().replace('.',',')}m`,
    height: `${(1.47).toString().replace('.',',')}m`, 
    weight: `${(car.power ? (car.power * 9 + 500) : 1645).toLocaleString('es-ES')} Kg`,
    trunk: `${car.variant?.toLowerCase().includes('familiar') ? "550" : "420"}L`,
    fuelTank: car.fuel === "Eléctrico" ? "-" : `${car.power ? Math.round(car.power / 3) : "60"}L`,
  };

  const performance = {
    maxSpeed: car.power ? (Math.round(car.power * 1.2 + 50)).toString() : "N/A",
    zeroToHundred: car.power ? (15 - car.power / 50).toFixed(1) : "N/A",
    fuelConsumption: car.fuel === "Eléctrico" ? (car.electricRange && car.batteryCapacity ? (car.batteryCapacity / (car.electricRange / 100)).toFixed(1) : "N/A") : (car.power ? (5 + car.power / 100).toFixed(1) : "N/A"),
    co2Emissions: car.fuel === "Eléctrico" ? "0" : (car.power ? Math.round(car.power * 0.8 + 20) : "N/A").toString(),
  };

  const lineClasses = "absolute bg-slate-400";

  return (
    <div className="py-8 bg-slate-50 rounded-xl my-8 shadow-lg border border-slate-200">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 text-slate-800">
          Descubre tu próximo vehículo
        </h2>
        
        <div className="grid md:grid-cols-2 gap-y-16 gap-x-6 lg:gap-x-10 items-start">
          
          <div className="flex flex-col items-center">
            <div className="relative w-full text-center mb-10">
              <hr className="absolute left-0 right-0 top-1/2 -translate-y-1/2 border-slate-300/80" />
              <h3 className="relative inline-block text-sm font-semibold uppercase tracking-wider text-muted-foreground bg-slate-50 px-4">Dimensiones</h3>
            </div>
            
            <div className="flex flex-row justify-center items-end w-full max-w-lg mx-auto gap-x-6 sm:gap-x-8 md:gap-x-10 lg:gap-x-12 mb-6 px-8">
              <DimensionFigureWithCuesCSS
                svgSrc="/icons/car-side-silhouette.svg"
                altText="Dimensiones laterales del vehículo"
                dimensionValue={dimensions.length}
                dimensionType="length"
                aspectRatioClass="aspect-[2.5/1]" 
                figureClasses="w-[60%] xs:w-[55%]" 
              />
              
              <div className="relative flex items-center w-[40%] xs:w-[45%]"> 
                <DimensionFigureWithCuesCSS
                  svgSrc="/icons/car-front-silhouette.svg"
                  altText="Dimensiones frontales del vehículo"
                  dimensionValue={dimensions.width}
                  dimensionType="width"
                  aspectRatioClass="aspect-[1.5]" 
                  figureClasses="w-full" 
                />
                <div className="absolute top-[calc(5%)] bottom-[calc(22%)] right-[-12px] w-[6px] "> 
                  <div className={`${lineClasses} h-full w-[1.5px] left-1/2 -translate-x-1/2`}></div>
                  <div className={`${lineClasses} w-full h-[1.5px] top-0 left-0`}></div>
                  <div className={`${lineClasses} w-full h-[1.5px] bottom-0 left-0`}></div>
                </div>
                <p className="text-sm font-medium text-slate-700 transform -rotate-90 absolute top-1/2 -translate-y-1/2 right-[-39px] sm:right-[-45px] origin-center whitespace-nowrap">
                    {dimensions.height}
                </p>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4 w-full max-w-xs sm:max-w-sm md:max-w-md mx-auto pt-6 border-t border-slate-300/70 mt-4">
              <InfoItem icon={<Weight size={20} className="text-slate-500"/>} label="Peso" value={dimensions.weight} />
              <InfoItem icon={<Maximize size={20} className="text-slate-500"/>} label="Maletero" value={dimensions.trunk} />
              <InfoItem icon={<Fuel size={20} className="text-slate-500"/>} label="Depósito" value={dimensions.fuelTank} />
            </div>
          </div>

          <div className="flex flex-col items-center">
            <div className="relative w-full text-center mb-10">
              <hr className="absolute left-0 right-0 top-1/2 -translate-y-1/2 border-slate-300/80" />
              <h3 className="relative inline-block text-sm font-semibold uppercase tracking-wider text-muted-foreground bg-slate-50 px-4">Prestaciones y Consumo</h3>
            </div>
            <div className="grid grid-cols-2 gap-x-4 gap-y-4 sm:gap-x-6 w-full max-w-xs sm:max-w-sm mx-auto">
              <PerformanceMetric icon={<TrendingUp className="w-5 h-5 text-sky-500"/>} value={performance.maxSpeed} unit="km/h" label="Velocidad Máxima" />
              <PerformanceMetric icon={<Timer className="w-5 h-5 text-sky-500"/>} value={performance.zeroToHundred} unit="seg" label="0-100km/h" />
              <PerformanceMetric icon={<Droplets className="w-5 h-5 text-sky-500"/>} value={performance.fuelConsumption} unit={car.fuel === "Eléctrico" ? "kWh/100" : "L/100"} label="Consumo Mixto" />
              <PerformanceMetric icon={<Sigma className="w-5 h-5 text-sky-500"/>} value={performance.co2Emissions} unit="g/km CO₂" label="Emisiones" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const InfoItem: React.FC<{icon: React.ReactNode, value: string, label: string}> = ({icon, value, label}) => (
  <div className="text-center flex flex-col items-center">
    <div className="mb-1.5">{icon}</div>
    <p className="font-semibold text-sm sm:text-base text-slate-700 leading-tight">{value}</p>
    <p className="text-xs text-muted-foreground uppercase tracking-wide mt-0.5">{label}</p>
  </div>
);