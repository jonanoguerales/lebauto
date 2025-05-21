"use client";

import { useViewStore } from "@/lib/store";
import { Skeleton } from "@/components/ui/skeleton";
import { useResponsiveView } from "@/hooks/useResponsiveView";
import CarFiltersSkeleton from "./CarFiltersSkeleton";
import { CarCardSkeleton, CarCardSkeletonList } from "@/features/car/skeleton/CarSkeleton";

export default function CatalogPageSkeleton() {
  const { view } = useViewStore();
  useResponsiveView(); 

  return (
    <div className="container mx-auto flex flex-col lg:flex-row min-h-screen py-12 gap-8 mt-16">
      <aside className="hidden lg:block lg:w-80 lg:min-w-80">
        <div className="sticky top-24 bg-white rounded-lg shadow-md max-h-[calc(100vh-6rem)] overflow-y-auto custom-scrollbar">
          <CarFiltersSkeleton />
        </div>
      </aside>

      <section className="flex-1">
        <header className="mb-8">
          <Skeleton className="h-8 w-1/2 rounded mb-4" />
          <Skeleton className="h-4 w-3/4 rounded mb-2" />
          <Skeleton className="h-4 w-2/3 rounded" />
        </header>

        {view === "grid" ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {Array.from({ length: 6 }).map((_, i) => (
              <CarCardSkeleton key={i} />
            ))}
          </div>
        ) : (
          <div className="space-y-4">
            {Array.from({ length: 6 }).map((_, i) => (
              <CarCardSkeletonList key={i} />
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
