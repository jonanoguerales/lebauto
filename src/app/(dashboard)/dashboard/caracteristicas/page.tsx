"use client";

import { useState, useEffect } from "react";
import { DashboardHeader } from "@/features/dashboard/DashboardHeader";
import { Button } from "@/common/components/ui/button";
import { PlusCircle } from "lucide-react";
import { fetchFeatures, createFeature, updateFeature, deleteFeature } from "@/app/supabase/supabase";
import { toast } from "sonner";
import { Feature } from "@/lib/definitions";
import { FeaturesTable } from "@/features/dashboard/features/FeatureTable";
import { FeatureFormDialog } from "@/features/dashboard/features/FeatureFormDialog";

export default function FeaturesPage() {
  const [features, setFeatures] = useState<Feature[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isFormDialogOpen, setIsFormDialogOpen] = useState(false);

  useEffect(() => {
    const loadFeatures = async () => {
      setIsLoading(true);
      try {
        const fetched = await fetchFeatures();
        setFeatures(fetched);
      } catch (error) {
        console.error("Error al cargar características:", error);
        toast.error("Error", { description: "No se pudieron cargar las características. Inténtalo de nuevo." });
      } finally {
        setIsLoading(false);
      }
    };
    loadFeatures();
  }, []);

  const handleAddNew = () => {
    setIsFormDialogOpen(true);
  };

  const handleSaveFeature = async (newFeatureData: { name: string }) => {
    try {
      const created = await createFeature(newFeatureData);
      if (created) {
        setFeatures((prev) => [...prev, created]);
        toast.success("Característica añadida", { description: "La característica ha sido añadida correctamente." });
      } else {
        toast.error("Error", { description: "No se pudo añadir la característica. Inténtalo de nuevo." });
      }
    } catch (error) {
      console.error("Error añadiendo característica:", error);
      toast.error("Error", { description: "Ocurrió un error al añadir la característica." });
    }
  };

  const handleEditFeature = async (id: string, newName: string) => {
    try {
      const updated = await updateFeature(id, { name: newName });
      if (updated) {
        setFeatures((prev) =>
          prev.map((f) => (f.id === id ? { ...f, name: newName } : f))
        );
        toast.success("Característica actualizada", { description: "La característica ha sido actualizada correctamente." });
      } else {
        toast.error("Error", { description: "No se pudo actualizar la característica. Inténtalo de nuevo." });
      }
    } catch (error) {
      console.error("Error actualizando característica:", error);
      toast.error("Error", { description: "Ocurrió un error al actualizar la característica." });
    }
  };

  const handleDeleteFeature = async (id: string) => {
    try {
      const success = await deleteFeature(id);
      if (success) {
        setFeatures((prev) => prev.filter((f) => f.id !== id));
        toast.success("Característica eliminada", { description: "La característica ha sido eliminada correctamente." });
      } else {
        toast.error("Error", { description: "No se pudo eliminar la característica. Inténtalo de nuevo." });
      }
    } catch (error) {
      console.error("Error eliminando característica:", error);
      toast.error("Error", { description: "Ocurrió un error al eliminar la característica." });
    }
  };

  return (
    <div className="space-y-6">
      <DashboardHeader
        title="Gestión de Características"
        description="Administra las características disponibles"
        action={
          <Button onClick={handleAddNew}>
            <PlusCircle className="mr-2 h-4 w-4" />
            Añadir Característica
          </Button>
        }
      />

      {isLoading ? (
        <div className="text-center py-8">
          <p>Cargando características...</p>
        </div>
      ) : (
        <FeaturesTable
          features={features}
          onEdit={handleEditFeature}
          onDelete={handleDeleteFeature}
        />
      )}

      <FeatureFormDialog
        open={isFormDialogOpen}
        onOpenChange={setIsFormDialogOpen}
        onSave={handleSaveFeature}
      />
    </div>
  );
}
