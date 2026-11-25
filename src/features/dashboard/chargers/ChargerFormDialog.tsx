"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import type { Charger } from "@/lib/definitions"; 
import { chargerSchema, type ChargerFormInput, type ChargerFormValues } from "@/lib/validations";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  FormDescription,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { uploadImage, deleteImage } from "@/app/supabase/supabase";
import { useToast } from "@/hooks/useToast";
import Image from "next/image";
import { InputTags } from "./InputTags";
import { Trash2 } from "lucide-react"; 
import { getChargerFormDefaults } from "./chargerFormDefaults";

interface ChargerFormDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  charger: Charger | null;
  onSave: (data: ChargerFormValues, id?: string) => Promise<void>;
}

export default function ChargerFormDialog({
  open,
  onOpenChange,
  charger,
  onSave,
}: ChargerFormDialogProps) {
  const { toast } = useToast();
  const [isProcessing, setIsProcessing] = useState(false); 
  // El padre monta el diálogo con otra `key` cada vez que lo abre, así que el formulario y la vista previa
  // se inicializan aquí con el cargador que se edita (o vacíos para uno nuevo), sin efecto de sincronización.
  const [currentImageUrlPreview, setCurrentImageUrlPreview] = useState<string | undefined>(charger?.image_url);
  const [imageFileToUpload, setImageFileToUpload] = useState<File | null>(null);

  const form = useForm<ChargerFormInput, unknown, ChargerFormValues>({
    resolver: zodResolver(chargerSchema),
    defaultValues: getChargerFormDefaults(charger),
  });

  const handleImageFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setImageFileToUpload(file);
      setCurrentImageUrlPreview(URL.createObjectURL(file)); 
      form.setValue("image_url", URL.createObjectURL(file), { shouldValidate: true }); 
    }
  };

  const handleRemoveImage = async () => {
    if (currentImageUrlPreview && charger?.image_url === currentImageUrlPreview && !currentImageUrlPreview.startsWith('blob:')) {
      setIsProcessing(true);
      try {
        await deleteImage(currentImageUrlPreview);
        toast({ title: "Imagen eliminada del almacenamiento." });
      } catch {
        toast({ title: "Error", description: "No se pudo eliminar la imagen del almacenamiento.", variant: "destructive" });
      }
      setIsProcessing(false);
    }
    setCurrentImageUrlPreview(undefined);
    setImageFileToUpload(null);
    form.setValue("image_url", undefined, { shouldValidate: true }); 
  };


  const onSubmit = async (data: ChargerFormValues) => {
    setIsProcessing(true);
    let finalImageUrl = data.image_url; 

    if (imageFileToUpload) { 
        if (charger?.image_url && charger.image_url !== currentImageUrlPreview) {
             try {
                await deleteImage(charger.image_url);
             } catch (e) {
                console.warn("No se pudo borrar la imagen antigua de Supabase Storage: " + charger.image_url, e);
             }
        }
      const uploadedUrl = await uploadImage(imageFileToUpload, 'chargers', charger?.id || `temp-${Date.now()}`);
      if (uploadedUrl) {
        finalImageUrl = uploadedUrl;
      } else {
        toast({ title: "Error", description: "No se pudo subir la nueva imagen.", variant: "destructive" });
        setIsProcessing(false);
        return;
      }
    } else if (!currentImageUrlPreview && charger?.image_url) {
      finalImageUrl = undefined; 
    }


    const dataToSave: ChargerFormValues = {
      ...data,
      image_url: finalImageUrl,
    };
    
    if (dataToSave.brand === "") dataToSave.brand = undefined;
    if (dataToSave.description === "") dataToSave.description = undefined;
    if (dataToSave.dimensions === "") dataToSave.dimensions = undefined;
    if (dataToSave.compatibility_notes === "") dataToSave.compatibility_notes = undefined;


    await onSave(dataToSave, charger?.id);
    setIsProcessing(false);
  };


  return (
    <Dialog open={open} onOpenChange={(isOpen) => {
        if (!isOpen) {
            form.reset();
            setCurrentImageUrlPreview(undefined);
            setImageFileToUpload(null);
        }
        onOpenChange(isOpen);
    }}>
      <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>{charger ? "Editar Cargador" : "Añadir Nuevo Cargador"}</DialogTitle>
          <DialogDescription>
            {charger ? "Modifica los detalles del cargador." : "Completa la información del nuevo cargador."}
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={(event) => form.handleSubmit(onSubmit)(event)} className="space-y-6 py-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Nombre del Cargador</FormLabel>
                    <FormControl><Input placeholder="Ej: Wallbox Pro 22kW" {...field} /></FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="brand"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Marca (Opcional)</FormLabel>
                    <FormControl><Input placeholder="Ej: Lebauto Charge" {...field} /></FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <FormField
                control={form.control}
                name="power_kw"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Potencia (kW)</FormLabel>
                    <FormControl><Input type="number" step="0.1" placeholder="Ej: 7.4" {...field} /></FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="connector_type"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Tipo de Conector</FormLabel>
                     <Select onValueChange={field.onChange} value={field.value} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger><SelectValue placeholder="Selecciona conector" /></SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="Tipo 1">Tipo 1 (SAE J1772)</SelectItem>
                        <SelectItem value="Tipo 2">Tipo 2 (Mennekes)</SelectItem>
                        <SelectItem value="CCS Combo 1">CCS Combo 1</SelectItem>
                        <SelectItem value="CCS Combo 2">CCS Combo 2</SelectItem>
                        <SelectItem value="CHAdeMO">CHAdeMO</SelectItem>
                        <SelectItem value="GBT">GBT (China)</SelectItem>
                        <SelectItem value="Schuko">Schuko (Doméstico UE)</SelectItem>
                        <SelectItem value="Otro">Otro</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="category"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Categoría</FormLabel>
                    <Select onValueChange={field.onChange} value={field.value} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger><SelectValue placeholder="Selecciona categoría" /></SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="home">Doméstico</SelectItem>
                        <SelectItem value="community">Comunitario</SelectItem>
                        <SelectItem value="business">Empresarial</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            
            <div className="space-y-2">
                <FormLabel>Imagen Principal</FormLabel>
                {currentImageUrlPreview && (
                    <div className="relative group w-48 h-48 border rounded-md overflow-hidden">
                        <Image src={currentImageUrlPreview} alt="Vista previa" fill className="object-contain p-2"/>
                        <Button 
                            type="button" 
                            variant="destructive" 
                            size="icon" 
                            className="absolute top-1 right-1 h-7 w-7 opacity-0 group-hover:opacity-100 transition-opacity"
                            onClick={handleRemoveImage}
                            aria-label="Eliminar imagen"
                            disabled={isProcessing}
                        >
                            <Trash2 className="h-4 w-4"/>
                        </Button>
                    </div>
                )}
                 <FormControl>
                    <Input 
                        type="file" 
                        accept="image/*" 
                        onChange={handleImageFileChange} 
                        disabled={isProcessing}
                        className="block w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-primary/10 file:text-primary hover:file:bg-primary/20"
                    />
                </FormControl>
                <FormDescription>Sube la imagen principal del cargador (max 2MB).</FormDescription>
                <FormField control={form.control} name="image_url" render={() => <FormMessage />} />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormField
                control={form.control}
                name="price_eur"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Precio (€)</FormLabel>
                    <FormControl><Input type="number" step="0.01" placeholder="Ej: 699.99" {...field} /></FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="installation_cost_eur"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Coste Instalación (€) (Opcional)</FormLabel>
                    <FormControl>
                      <Input 
                        type="number" 
                        step="0.01" 
                        placeholder="Ej: 350" 
                        value={field.value === undefined ? '' : field.value}
                        onChange={e => field.onChange(e.target.value === '' ? undefined : parseFloat(e.target.value))} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            
            <FormField
              control={form.control}
              name="features"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Características</FormLabel>
                  <FormControl>
                    <InputTags
                      value={field.value || []} 
                      onChange={field.onChange}
                      placeholder="Añade características y presiona Enter"
                    />
                  </FormControl>
                  <FormDescription>
                    Lista de características clave. Presiona Enter para añadir cada una.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Descripción (Opcional)</FormLabel>
                  <FormControl><Textarea placeholder="Describe el cargador, sus ventajas, etc." {...field} rows={4} /></FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <h3 className="text-lg font-medium pt-4 border-t">Detalles Adicionales (Opcional)</h3>
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
               <FormField
                control={form.control}
                name="efficiency"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Eficiencia (%)</FormLabel>
                    <FormControl>
                        <Input 
                            type="number" 
                            step="0.1" 
                            placeholder="Ej: 95" 
                            value={field.value === undefined ? '' : field.value}
                            onChange={e => field.onChange(e.target.value === '' ? undefined : parseFloat(e.target.value))} 
                        />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="dimensions"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Dimensiones</FormLabel>
                    <FormControl><Input placeholder="Ej: 200x150x80 mm" {...field} /></FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="weight_kg"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Peso (kg)</FormLabel>
                    <FormControl>
                        <Input 
                            type="number" 
                            step="0.1" 
                            placeholder="Ej: 5.5" 
                            value={field.value === undefined ? '' : field.value}
                            onChange={e => field.onChange(e.target.value === '' ? undefined : parseFloat(e.target.value))} 
                        />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="warranty_years"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Garantía (años)</FormLabel>
                     <FormControl>
                        <Input 
                            type="number" 
                            step="1" 
                            placeholder="Ej: 2" 
                            value={field.value === undefined ? '' : field.value}
                            onChange={e => field.onChange(e.target.value === '' ? undefined : parseInt(e.target.value, 10))} 
                        />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <FormField
              control={form.control}
              name="compatibility_notes"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Notas de Compatibilidad</FormLabel>
                  <FormControl><Textarea placeholder="Ej: Compatible con todos los vehículos con conector Tipo 2..." {...field} rows={3} /></FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <DialogFooter>
              <Button type="button" variant="outline" onClick={() => {
                  onOpenChange(false);
                  form.reset();
                  setCurrentImageUrlPreview(undefined);
                  setImageFileToUpload(null);
                }}
                disabled={isProcessing}
              >
                Cancelar
              </Button>
              <Button type="submit" disabled={isProcessing || form.formState.isSubmitting}>
                {isProcessing ? "Guardando..." : charger ? "Actualizar Cargador" : "Crear Cargador"}
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}