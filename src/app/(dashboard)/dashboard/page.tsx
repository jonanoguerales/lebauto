import { DashboardHeader } from "@/features/dashboard/DashboardHeader";
import { StatsCards } from "@/features/dashboard/home/StatsCards";
import { SalesChart } from "@/features/dashboard/home/SalesChart";
import { VehicleDistributionChart } from "@/features/dashboard/home/VehicleDistributionChart";
import { RecentVehicles } from "@/features/dashboard/home/RecentVehicles";

export default function Home() {
  return (
    <div className="space-y-6">
      <DashboardHeader
        title="Dashboard"
        description="Resumen general de la gestión de vehículos"
      />
      <StatsCards />
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <SalesChart />
        <VehicleDistributionChart />
      </div>

      <RecentVehicles />
    </div>
  );
}
