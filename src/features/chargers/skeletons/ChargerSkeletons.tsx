import { Skeleton } from "@/components/ui/skeleton";
import { Card, CardContent } from "@/components/ui/card";

export function ChargerCardSkeleton() {
  return (
    <Card className="overflow-hidden h-full flex flex-col">
      <Skeleton className="relative w-full h-56 rounded-t-lg" />
      <CardContent className="p-5 flex flex-col flex-grow">
        <Skeleton className="h-6 w-3/4 mb-2" /> 
        <Skeleton className="h-4 w-1/2 mb-3" />
        
        <div className="flex items-center text-sm text-muted-foreground mb-3">
          <Skeleton className="h-4 w-4 mr-1.5 rounded-full" />
          <Skeleton className="h-4 w-16" />
          <span className="mx-1.5">|</span>
          <Skeleton className="h-4 w-4 mr-1.5 rounded-full" />
          <Skeleton className="h-4 w-20" />
        </div>

        <Skeleton className="h-4 w-full mb-1" /> 
        <Skeleton className="h-4 w-full mb-1" />
        <Skeleton className="h-4 w-2/3 mb-4" /> 
        
        <div className="mb-4">
          <Skeleton className="h-3 w-1/3 mb-1.5" />
          <div className="flex flex-wrap gap-1.5">
            <Skeleton className="h-5 w-20 rounded-full" />
            <Skeleton className="h-5 w-24 rounded-full" />
          </div>
        </div>
        
        <div className="mt-auto pt-4 border-t">
          <div className="flex justify-between items-center">
            <Skeleton className="h-4 w-1/4" />
            <Skeleton className="h-6 w-1/3" />
          </div>
          <Skeleton className="h-3 w-1/2 text-right mt-1 ml-auto" />
        </div>
      </CardContent>
    </Card>
  );
}

export function ChargerDetailSkeleton() {
  return (
    <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start animate-pulse">
      <div className="lg:sticky lg:top-24">
        <Card className="overflow-hidden shadow-lg">
          <Skeleton className="aspect-[4/3] w-full" />
        </Card>
      </div>

      <div>
        <Skeleton className="h-6 w-1/4 mb-3 rounded-md" /> 
        <Skeleton className="h-10 w-3/4 mb-2 rounded-md" /> 
        <Skeleton className="h-6 w-1/2 mb-6 rounded-md" /> 

        <Card className="mb-6">
          <CardContent className="p-6">
            <div className="flex flex-col sm:flex-row justify-between items-baseline mb-2">
              <div>
                <Skeleton className="h-4 w-24 mb-1 rounded" />
                <Skeleton className="h-10 w-40 rounded" />
              </div>
              <div className="text-right mt-2 sm:mt-0">
                <Skeleton className="h-4 w-20 mb-1 rounded ml-auto" />
                <Skeleton className="h-6 w-28 rounded ml-auto" />
              </div>
            </div>
            <Skeleton className="h-12 w-full mt-4 rounded-md" />
            <Skeleton className="h-3 w-1/2 mt-3 rounded mx-auto" />
          </CardContent>
        </Card>
        
        <div className="space-y-6">
          <div>
            <Skeleton className="h-6 w-1/3 mb-3 rounded-md border-b pb-2" />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3 text-sm">
              {Array.from({length: 4}).map((_,i) => (
                <div key={i} className="flex items-center">
                  <Skeleton className="h-5 w-5 mr-2 rounded-full" />
                  <Skeleton className="h-4 w-20 mr-1 rounded" />
                  <Skeleton className="h-4 w-16 rounded" />
                </div>
              ))}
            </div>
          </div>
          <div>
            <Skeleton className="h-6 w-1/3 mb-3 rounded-md border-b pb-2" />
            <Skeleton className="h-4 w-full mb-2 rounded" />
            <Skeleton className="h-4 w-full mb-2 rounded" />
            <Skeleton className="h-4 w-5/6 rounded" />
          </div>
          <div>
            <Skeleton className="h-6 w-1/3 mb-3 rounded-md border-b pb-2" />
            <Skeleton className="h-4 w-full mb-2 rounded" />
            <Skeleton className="h-4 w-5/6 rounded" />
          </div>
        </div>
      </div>
    </div>
  );
}