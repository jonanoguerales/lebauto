// src/utils/getHFEmbedding.ts
import { InferenceClient } from "@huggingface/inference";

const HF_TOKEN = process.env.HUGGINGFACE_API_KEY;
if (!HF_TOKEN) {
  console.error("HUGGINGFACE_API_KEY no está definida.");
  throw new Error("HUGGINGFACE_API_KEY no está definida.");
}

const hf = new InferenceClient(HF_TOKEN);

export async function getHFEmbedding(text: string): Promise<number[]> {
  try {
    console.log(`[getHFEmbedding] Solicitando embedding para: "${text.substring(0,100)}..."`); // Muestra más texto
    const result = await hf.featureExtraction({
      model: "sentence-transformers/all-MiniLM-L6-v2",
      inputs: text,
    });
    console.log("[getHFEmbedding] Respuesta recibida de HF (tipo):", typeof result, Array.isArray(result)); // Loguea el tipo

    if (Array.isArray(result)) {
      if (result.length > 0 && Array.isArray(result[0]) && typeof result[0][0] === 'number') {
        console.log("[getHFEmbedding] Formato [[...vector...]] detectado.");
        return result[0] as number[];
      }
      if (typeof result[0] === 'number') {
        console.log("[getHFEmbedding] Formato [...vector...] detectado.");
        return result as number[];
      }
    }
    console.error("[getHFEmbedding] Formato de embedding inesperado:", JSON.stringify(result).substring(0, 200) + "..."); // Loguea parte del resultado si es inesperado
    throw new Error("Formato de embedding inesperado desde Hugging Face");

  } catch (error: any) {
    console.error(`[getHFEmbedding] Error al obtener embedding de Hugging Face:`, error.message);
    console.error(`[getHFEmbedding] Stack del error:`, error.stack); // Loguea el stack completo
    throw new Error(`Error de Hugging Face al generar embedding: ${error.message || 'Desconocido'}`);
  }
}