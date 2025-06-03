"use client";

import { useState, useEffect } from "react";
import { DashboardHeader } from "@/features/dashboard/DashboardHeader";
import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";
import {
  fetchChargers,
  createCharger,
  updateCharger,
  deleteCharger,
} from "@/app/supabase/supabase";
import { useToast } from "@/hooks/useToast";
import type { Charger } from "@/lib/definitions";
import ChargersTable from "@/features/dashboard/chargers/ChargersTable";
import ChargerFormDialog from "@/features/dashboard/chargers/ChargerFormDialog";

export default function ChargersPage() {
  const [chargers, setChargers] = useState<Charger[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isFormDialogOpen, setIsFormDialogOpen] = useState(false);
  const [editingCharger, setEditingCharger] = useState<Charger | null>(null);
  const { toast } = useToast();

  useEffect(() => {
    const loadChargers = async () => {
      setIsLoading(true);
      try {
        const fetchedChargers = await fetchChargers();
        setChargers(fetchedChargers);
      } catch (error) {
        console.error("Error al cargar cargadores:", error);
        toast({
          title: "Error",
          description:
            "No se pudieron cargar los cargadores. Inténtalo de nuevo.",
          variant: "destructive",
        });
      } finally {
        setIsLoading(false);
      }
    };
    loadChargers();
  }, [toast]);

  const handleAddNew = () => {
    setEditingCharger(null);
    setIsFormDialogOpen(true);
  };

  const handleEdit = (charger: Charger) => {
    setEditingCharger(charger);
    setIsFormDialogOpen(true);
  };

  const handleSaveCharger = async (
    chargerData: Omit<Charger, "id" | "created_at" | "slug">,
    id?: string
  ) => {
    try {
      if (id && editingCharger) {
        const updatedCharger = await updateCharger(id, chargerData);
        if (updatedCharger) {
          setChargers((prev) =>
            prev.map((c) => (c.id === id ? updatedCharger : c))
          );
          toast({
            title: "Cargador actualizado",
            description: "El cargador ha sido actualizado correctamente.",
          });
        } else {
          throw new Error("No se pudo actualizar el cargador.");
        }
      } else {
        const newCharger = await createCharger({
          ...chargerData,
          features: chargerData.features ?? [],
        });
        if (newCharger) {
          setChargers((prev) => [...prev, newCharger]);
          toast({
            title: "Cargador añadido",
            description: "El cargador ha sido añadido correctamente.",
          });
        } else {
          throw new Error("No se pudo crear el cargador.");
        }
      }
      setIsFormDialogOpen(false);
      setEditingCharger(null);
    } catch (error: any) {
      console.error("Error guardando cargador:", error);
      toast({
        title: "Error al guardar",
        description:
          error.message ||
          "Ocurrió un error al guardar el cargador. Verifica los datos e inténtalo de nuevo.",
        variant: "destructive",
      });
    }
  };

  const handleDelete = async (id: string) => {
    try {
      const success = await deleteCharger(id);
      if (success) {
        setChargers((prev) => prev.filter((c) => c.id !== id));
        toast({
          title: "Cargador eliminado",
          description: "El cargador ha sido eliminado correctamente.",
        });
      } else {
        toast({
          title: "Error",
          description: "No se pudo eliminar el cargador. Inténtalo de nuevo.",
          variant: "destructive",
        });
      }
    } catch (error) {
      console.error("Error eliminando cargador:", error);
      toast({
        title: "Error",
        description: "Ocurrió un error al eliminar el cargador.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="space-y-6">
      <DashboardHeader
        title="Gestión de Cargadores"
        description="Administra el inventario de cargadores eléctricos"
        action={
          <Button onClick={handleAddNew}>
            <PlusCircle className="mr-2 h-4 w-4" />
            Añadir Cargador
          </Button>
        }
      />

      {isLoading ? (
        <div className="text-center py-8">
          <p>Cargando cargadores...</p>
        </div>
      ) : (
        <ChargersTable
          chargers={chargers}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
      )}

      <ChargerFormDialog
        open={isFormDialogOpen}
        onOpenChange={setIsFormDialogOpen}
        charger={editingCharger}
        onSave={handleSaveCharger}
      />
    </div>
  );
}
