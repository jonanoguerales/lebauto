import { HuggingFaceTransformersEmbeddings } from '@langchain/community/embeddings/huggingface_transformers';
import type { Car } from '@/lib/definitions';
import { supabaseClient } from '@/supabase/supabase';

const embeddingModel = new HuggingFaceTransformersEmbeddings({
  model: 'Xenova/all-MiniLM-L6-v2',
});

export function formatCarDocument(car: Car): string {
  const parts = [
    `${car.brand} ${car.model} (${car.year})`,
    `Condición: ${car.condition}, Precio: ${car.price}€`,
    `Ubicación: ${car.location || 'N/A'}, Kilometraje: ${car.mileage} km`,
    `Tipo: ${car.bodyType}, Combustible: ${car.fuel}, Transmisión: ${car.transmission}`,
    `Etiqueta: ${car.environmentalTag}, Color: ${car.color}`,
    `Puertas: ${car.doors}, Asientos: ${car.seats}`,
    car.description ? `Descripción: ${car.description}` : '',
  ];
  return parts.filter(Boolean).join('. ');
}

export async function updateCarDocument(car: Car): Promise<void> {
  const content = formatCarDocument(car);
  try {
    const embedding = await embeddingModel.embedQuery(content);
    const { error } = await supabaseClient
      .from('documentos')
      .upsert({ car_id: car.id, content, embedding }, { onConflict: 'car_id' });
    if (error) console.error(`Error upsert documentos ${car.id}:`, error);
  } catch (err) {
    console.error(`Error embedding ${car.id}:`, err);
  }
}
