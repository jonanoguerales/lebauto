"use client";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Skeleton } from "@/components/ui/skeleton";

export default function CarFiltersSkeleton() {
  return (
    <div className="space-y-6 p-6 overflow-hidden">
      <div className="flex justify-between items-center">
        <Skeleton className="h-6 w-32 rounded" />
        <Skeleton className="h-4 w-4 rounded-full" />
      </div>
      <div className="space-y-2">
        <Skeleton className="h-4 w-1/3 rounded" />
        <Skeleton className="h-4 w-1/2 rounded" />
      </div>
      <Accordion type="multiple" defaultValue={["marca", "precio"]}>
        <AccordionItem value="marca">
          <AccordionTrigger className="py-3">
            <div className="flex items-center gap-2">
              <Skeleton className="h-5 w-5 rounded" />
              <Skeleton className="h-5 w-24 rounded" />
            </div>
          </AccordionTrigger>
          <AccordionContent>
            <div className="p-3 space-y-4">
              <Skeleton className="h-10 w-full rounded" />
              {Array.from({ length: 4 }).map((_, i) => (
                <Skeleton key={i} className="h-4 w-full rounded" />
              ))}
              <Skeleton className="h-8 w-full rounded" />
            </div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="precio">
          <AccordionTrigger className="py-3">
            <div className="flex items-center gap-2">
              <Skeleton className="h-5 w-5 rounded" />
              <Skeleton className="h-5 w-24 rounded" />
            </div>
          </AccordionTrigger>
          <AccordionContent>
            <div className="py-2 space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <Skeleton className="h-10 w-full rounded" />
                <Skeleton className="h-10 w-full rounded" />
              </div>
              <Skeleton className="h-10 w-full rounded" />
            </div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="año">
          <AccordionTrigger className="py-3">
            <div className="flex items-center gap-2">
              <Skeleton className="h-5 w-5 rounded" />
              <Skeleton className="h-5 w-24 rounded" />
            </div>
          </AccordionTrigger>
          <AccordionContent>
            <div className="py-2 space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <Skeleton className="h-10 w-full rounded" />
                <Skeleton className="h-10 w-full rounded" />
              </div>
              <Skeleton className="h-10 w-full rounded" />
            </div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="km">
          <AccordionTrigger className="py-3">
            <div className="flex items-center gap-2">
              <Skeleton className="h-5 w-5 rounded" />
              <Skeleton className="h-5 w-24 rounded" />
            </div>
          </AccordionTrigger>
          <AccordionContent>
            <div className="py-2 space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <Skeleton className="h-10 w-full rounded" />
                <Skeleton className="h-10 w-full rounded" />
              </div>
              <Skeleton className="h-10 w-full rounded" />
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
