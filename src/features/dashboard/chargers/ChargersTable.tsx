"use client";

import { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Edit,
  Trash2,
  Search,
  ChevronDown,
  ChevronUp,
  UploadCloud,
} from "lucide-react";
import { formatPrice } from "@/utils/utils";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import type { Charger } from "@/lib/definitions";
import Image from "next/image";

interface ChargersTableProps {
  chargers: Charger[];
  onEdit: (charger: Charger) => void;
  onDelete: (id: string) => void;
}

export default function ChargersTable({
  chargers,
  onEdit,
  onDelete,
}: ChargersTableProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortField, setSortField] = useState<keyof Charger | null>(null);
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("asc");
  const [deleteId, setDeleteId] = useState<string | null>(null);

  const handleSort = (field: keyof Charger) => {
    if (sortField === field) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      setSortField(field);
      setSortDirection("asc");
    }
  };

  const filteredChargers = chargers.filter((charger) => {
    const term = searchTerm.toLowerCase();
    return (
      charger.name.toLowerCase().includes(term) ||
      (charger.brand && charger.brand.toLowerCase().includes(term)) ||
      charger.category.toLowerCase().includes(term) ||
      charger.connector_type.toLowerCase().includes(term)
    );
  });

  const sortedChargers = [...filteredChargers].sort((a, b) => {
    if (!sortField) return 0;
    const aValue = a[sortField];
    const bValue = b[sortField];

    if (typeof aValue === "string" && typeof bValue === "string") {
      return sortDirection === "asc"
        ? aValue.localeCompare(bValue)
        : bValue.localeCompare(aValue);
    }
    if (typeof aValue === "number" && typeof bValue === "number") {
      return sortDirection === "asc" ? aValue - bValue : bValue - aValue;
    }
    return 0;
  });

  const handleDeleteClick = (id: string) => {
    setDeleteId(id);
  };

  const confirmDelete = () => {
    if (deleteId) {
      onDelete(deleteId);
      setDeleteId(null);
    }
  };

  const categoryLabels: Record<Charger["category"], string> = {
    home: "Doméstico",
    community: "Comunitario",
    business: "Empresarial",
  };

  return (
    <>
      <div className="flex items-center justify-between mb-4">
        <div className="relative w-full max-w-sm">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Buscar cargadores..."
            className="pl-8 h-[2.2rem]"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      <div className="rounded-md border overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[80px]">Imagen</TableHead>
              <TableHead className="cursor-pointer" onClick={() => handleSort("name")}>
                Nombre {sortField === "name" && (sortDirection === "asc" ? <ChevronUp className="inline ml-1 h-4 w-4" /> : <ChevronDown className="inline ml-1 h-4 w-4" />)}
              </TableHead>
              <TableHead className="cursor-pointer" onClick={() => handleSort("brand")}>
                Marca {sortField === "brand" && (sortDirection === "asc" ? <ChevronUp className="inline ml-1 h-4 w-4" /> : <ChevronDown className="inline ml-1 h-4 w-4" />)}
              </TableHead>
              <TableHead className="cursor-pointer" onClick={() => handleSort("power_kw")}>
                Potencia {sortField === "power_kw" && (sortDirection === "asc" ? <ChevronUp className="inline ml-1 h-4 w-4" /> : <ChevronDown className="inline ml-1 h-4 w-4" />)}
              </TableHead>
              <TableHead className="cursor-pointer" onClick={() => handleSort("category")}>
                Categoría {sortField === "category" && (sortDirection === "asc" ? <ChevronUp className="inline ml-1 h-4 w-4" /> : <ChevronDown className="inline ml-1 h-4 w-4" />)}
              </TableHead>
              <TableHead className="cursor-pointer text-right" onClick={() => handleSort("price_eur")}>
                Precio {sortField === "price_eur" && (sortDirection === "asc" ? <ChevronUp className="inline ml-1 h-4 w-4" /> : <ChevronDown className="inline ml-1 h-4 w-4" />)}
              </TableHead>
              <TableHead className="w-[100px]">Acciones</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {sortedChargers.length === 0 ? (
              <TableRow>
                <TableCell colSpan={7} className="h-24 text-center">
                  No se encontraron cargadores.
                </TableCell>
              </TableRow>
            ) : (
              sortedChargers.map((charger) => (
                <TableRow key={charger.id}>
                  <TableCell>
                    {charger.image_url ? (
                      <Image
                        src={charger.image_url}
                        alt={charger.name}
                        width={48}
                        height={48}
                        className="rounded-md object-contain aspect-square"
                      />
                    ) : (
                      <div className="h-12 w-12 bg-muted rounded-md flex items-center justify-center text-muted-foreground">
                        <UploadCloud size={20}/>
                      </div>
                    )}
                  </TableCell>
                  <TableCell className="font-medium">{charger.name}</TableCell>
                  <TableCell>{charger.brand || "-"}</TableCell>
                  <TableCell>{charger.power_kw} kW</TableCell>
                  <TableCell>
                    <Badge variant="outline">{categoryLabels[charger.category]}</Badge>
                  </TableCell>
                  <TableCell className="text-right">{formatPrice(charger.price_eur)} €</TableCell>
                  <TableCell>
                    <div className="flex items-center space-x-1">
                      <Button variant="ghost" size="icon" onClick={() => onEdit(charger)} aria-label="Editar cargador">
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => handleDeleteClick(charger.id)}
                        className="text-destructive hover:text-destructive-foreground hover:bg-destructive"
                        aria-label="Eliminar cargador"
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>

      <AlertDialog open={!!deleteId} onOpenChange={() => setDeleteId(null)}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>¿Estás seguro?</AlertDialogTitle>
            <AlertDialogDescription>
              Esta acción no se puede deshacer. El cargador será eliminado
              permanentemente de la base de datos y su imagen del almacenamiento si existe.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancelar</AlertDialogCancel>
            <AlertDialogAction
              onClick={confirmDelete}
              className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
            >
              Eliminar
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}