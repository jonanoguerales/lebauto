// app/utils/getHFEmbedding.ts
import { InferenceClient } from "@huggingface/inference";

const HF_TOKEN = process.env.HUGGINGFACE_API_KEY!;
if (!HF_TOKEN) throw new Error("Define HUGGINGFACE_API_KEY en tu .env");

// Inicializa el cliente de HF Inference API
const hf = new InferenceClient(HF_TOKEN);

/**
 * Obtiene el embedding de un texto usando featureExtraction.
 * Devuelve siempre un vector `number[]` de dimensión 384.
 */
export async function getHFEmbedding(text: string): Promise<number[]> {
  // Llamada a HF Inference API
  const result = await hf.featureExtraction({
    model: "sentence-transformers/all-MiniLM-L6-v2",
    inputs: text,
  });

  // La respuesta puede ser:
// - number[][]: [[...vector...]]
// - number[]: [...vector...]
  if (Array.isArray(result)) {
    // Si es [[...]]
    if (result.length > 0 && Array.isArray(result[0])) {
      return result[0] as number[];
    }
    // Si es [...vector...]
    if (typeof result[0] === "number") {
      return result as number[];
    }
  }
  throw new Error("Formato de embedding inesperado desde Hugging Face");
}
