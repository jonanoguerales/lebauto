// src/utils/carDocuments.ts
"use server"; // Es una Server Action

import type { Car } from '@/lib/definitions';
import { getHFEmbedding } from './getHFEmbedding';
import { createClient } from '@/lib/supabase/server'; // <<< USA EL CLIENTE DE SERVIDOR

// Tu función formatCarDocument (sin cambios)
function formatCarDocument(car: Car): string {
  const parts = [
    `Vehículo: ${car.brand} ${car.model}${car.variant ? ` ${car.variant}` : ''}, Año: ${car.year}.`,
    `Condición: ${car.condition}${car.condition !== 'Vendido' && car.condition !== 'Reservado' ? ', disponible en stock.' : '.'}`, // Añadido "disponible en stock"
    `Precio: ${car.price.toLocaleString('es-ES')}€.`,
    `Ubicación: ${car.location || 'No especificada'}. Kilometraje: ${car.mileage.toLocaleString('es-ES')} km.`,
    `Carrocería: ${car.bodyType || 'No especificada'}. Combustible: ${car.fuel}. Transmisión: ${car.transmission || 'No especificada'}.`,
    `Etiqueta ambiental: ${car.environmentalTag || 'No especificada'}. Color: ${car.color}.`,
    `Puertas: ${car.doors || 'N/A'}. Asientos: ${car.seats || 'N/A'}.`,
    car.power ? `Potencia: ${car.power} CV.` : '',
    car.engineDisplacement ? `Cilindrada: ${car.engineDisplacement} cc.` : '',
    car.electricRange ? `Autonomía eléctrica: ${car.electricRange} km.` : '',
    car.batteryCapacity ? `Capacidad batería: ${car.batteryCapacity} kWh.` : '',
    car.ivaDeductible ? 'IVA Deducible.' : '',
    car.description ? `Descripción: ${car.description.substring(0, 250)}...` : '',
    car.features && car.features.length > 0 ? `Características: ${car.features.slice(0, 7).join(', ')}.` : '',
  ];
  return parts.filter(Boolean).join(' ').replace(/\s+/g, ' ').trim();
}


export async function updateCarDocument(car: Car): Promise<{ success: boolean; message: string }> {
  const supabase = await createClient(); // <<< Crea una instancia del cliente de servidor
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) {
    console.error("[updateCarDocument] No hay usuario autenticado para realizar la operación en 'documentos'.");
    return { success: false, message: "Usuario no autenticado para actualizar documentos." };
  }
  console.log(`[updateCarDocument] Operando en 'documentos' como usuario: ${user.email}`);

  if (!car.id) {
    console.error("[updateCarDocument] Falta el ID del vehículo.");
    return { success: false, message: "El ID del vehículo es necesario." };
  }
  const content = formatCarDocument(car);
  
  try {
    const embedding = await getHFEmbedding(content);
    
    const documentToUpsert = {
      car_id: car.id,
      content,
      embedding,
      file_name: car.slug || `car-${car.id}`, // Usa slug o un identificador
      metadata: { lastUpdated: new Date().toISOString() } // Ejemplo
    };
    
    const { error, data } = await supabase // <<< Usa la instancia 'supabase' creada aquí
      .from('documentos')
      .upsert(documentToUpsert, { onConflict: 'car_id' })
      .select()
      .single();

    if (error) {
      console.error(`Error al hacer upsert en 'documentos' para car_id ${car.id}:`, error);
      return { success: false, message: `Error al actualizar el documento: ${error.message}` };
    }
    
    console.log(`[updateCarDocument] Documento para ${car.id} actualizado/insertado exitosamente:`, data);
    return { success: true, message: 'Documento del vehículo actualizado para el chatbot.' };

  } catch (err: any) { 
    console.error(`[updateCarDocument] Excepción al procesar car_id ${car.id}:`, err);
    return { success: false, message: `Excepción al actualizar documento: ${err.message}` };
  }
}