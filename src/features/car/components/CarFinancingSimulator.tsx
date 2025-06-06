"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import type { Car } from "@/lib/definitions";
import { formatPrice } from "@/utils/utils";
import Link from "next/link";

interface CarFinancingSimulatorProps {
  car: Car;
}

const financingPeriods = [
    { months: 72, interestRate: 0.0849, label: "72" },
    { months: 84, interestRate: 0.0875, label: "84" },
    { months: 96, interestRate: 0.0899, label: "96" },
    { months: 120, interestRate: 0.0949, label: "120" },
];


export default function CarFinancingSimulator({ car }: CarFinancingSimulatorProps) {
  const [selectedPeriod, setSelectedPeriod] = useState(financingPeriods.find(p => p.months === 108) || financingPeriods[financingPeriods.length -1]); 
  const [monthlyPayment, setMonthlyPayment] = useState(0);

  const priceToFinance = car.financePrice || car.price; 
  const financingDiscount = car.price - (car.financePrice || car.price);


  useEffect(() => {
    if (selectedPeriod && priceToFinance > 0) {
      const P = priceToFinance; 
      const r = selectedPeriod.interestRate / 12; 
      const n = selectedPeriod.months;

      if (r > 0) {
        const payment = P * (r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
        setMonthlyPayment(payment);
      } else { 
        setMonthlyPayment(P / n);
      }
    } else {
      setMonthlyPayment(0);
    }
  }, [selectedPeriod, priceToFinance]);

  return (
    <div className="space-y-6 pt-6 border-t">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 text-slate-800">
          Elige la cuota que mejor se te adapta
        </h2>
        <div className="grid lg:grid-cols-[1fr_2fr] gap-8 lg:gap-12 items-center">
          <div className="flex flex-col items-center">
            <p className="text-sm text-muted-foreground mb-2">Periodo de financiación:</p>
            <div className="flex justify-center gap-2 mb-8 flex-wrap">
              {financingPeriods.map((period) => (
                <Button
                  key={period.months}
                  variant={selectedPeriod.months === period.months ? "default" : "outline"}
                  onClick={() => setSelectedPeriod(period)}
                  className={`px-4 py-2 rounded-md ${selectedPeriod.months === period.months ? 'bg-blue-600 text-white border-blue-600' : 'border-gray-300 text-gray-700 hover:bg-gray-100'}`}
                >
                  {period.label}
                </Button>
              ))}
            </div>
            <div className="bg-slate-100 rounded-full w-48 h-48 sm:w-56 sm:h-56 flex flex-col items-center justify-center text-center p-4 shadow">
              <p className="text-sm text-muted-foreground mb-1">Tu cuota mensual</p>
              <p className="text-4xl sm:text-5xl font-bold text-blue-600">
                {monthlyPayment > 0 ? formatPrice(Math.round(monthlyPayment)) : "---"} €
              </p>
            </div>
          </div>

          <div className="bg-white p-6 md:p-8 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-6">Tu oferta de financiación</h3>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between">
                <span>Precio al contado</span>
                <span>{formatPrice(car.price)} €</span>
              </div>
              {financingDiscount > 0 && (
                <div className="flex justify-between text-green-600">
                  <span>Descuento financiación</span>
                  <span>-{formatPrice(financingDiscount)} €</span>
                </div>
              )}
              <div className="flex justify-between font-semibold border-t pt-3 mt-3">
                <span>Precio con las condiciones de financiación</span>
                <span>{formatPrice(priceToFinance)} €</span>
              </div>
            </div>
            <p className="text-xs text-muted-foreground mt-6">
              *Oferta de financiación no vinculante y condicionada al previo estudio y aprobación por parte de la entidad financiera colaboradora. TAE {selectedPeriod ? (selectedPeriod.interestRate * 100).toFixed(2) : 'N/A'}% para {selectedPeriod?.months || 'N/A'} meses.
            </p>
            <div className="mt-6 text-sm">
              <span>¿Qué es la garantía premium? </span>
              <Link href="/garantia" className="text-blue-600 hover:underline font-medium">
                Saber Más
              </Link>
            </div>
            <Button size="lg" className="w-full mt-6 bg-yellow-400 text-black hover:bg-yellow-500 font-semibold">
              QUIERO ESTA FINANCIACIÓN
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}