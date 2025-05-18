import { InferenceClient } from "@huggingface/inference";

const HF_TOKEN = process.env.HUGGINGFACE_API_KEY;
if (!HF_TOKEN) {
  console.error("HUGGINGFACE_API_KEY no está definida.");
  throw new Error("HUGGINGFACE_API_KEY no está definida.");
}

const hf = new InferenceClient(HF_TOKEN);

async function attemptFeatureExtraction(text: string, attempt: number): Promise<any> {
  // console.log(`[getHFEmbedding] Intento #${attempt} para: "${text.substring(0,50)}..."`);
  return hf.featureExtraction({
    model: "sentence-transformers/all-MiniLM-L6-v2",
    inputs: text,
  });
}

export async function getHFEmbedding(text: string): Promise<number[]> {
  console.time(`[PERF] getHFEmbedding total para "${text.substring(0, 20)}..."`); 
  const MAX_RETRIES = 2; 
  let lastError: any = null;

  for (let i = 1; i <= MAX_RETRIES; i++) {
    try {
      console.time(`[PERF] HF API Call (Intento ${i})`);
      const result = await attemptFeatureExtraction(text, i);
      console.timeEnd(`[PERF] HF API Call (Intento ${i})`);
      
      if (Array.isArray(result)) {
        if (result.length > 0 && Array.isArray(result[0]) && typeof result[0][0] === 'number') {
          console.timeEnd(`[PERF] getHFEmbedding total para "${text.substring(0, 20)}..."`);
          return result[0] as number[];
        }
        if (typeof result[0] === 'number') {
          console.timeEnd(`[PERF] getHFEmbedding total para "${text.substring(0, 20)}..."`);
          return result as number[];
        }
      }
      lastError = new Error("Formato de embedding inesperado: " + JSON.stringify(result).substring(0,100));

    } catch (error: any) {
      console.timeEnd(`[PERF] HF API Call (Intento ${i})`); 
      lastError = error;
      console.warn(`[getHFEmbedding] Intento #${i} fallido: ${error.message}`);
      if (i < MAX_RETRIES) {
        const delay = Math.pow(2, i-1) * 500; 
        // console.log(`[getHFEmbedding] Reintentando en ${delay / 1000}s...`);
        await new Promise(resolve => setTimeout(resolve, delay));
      }
    }
  }

  console.error(`[getHFEmbedding] Todos los ${MAX_RETRIES} intentos fallaron. Último error:`, lastError?.message);
  console.timeEnd(`[PERF] getHFEmbedding total para "${text.substring(0, 20)}..."`); 
  throw new Error(`Error de Hugging Face tras ${MAX_RETRIES} intentos: ${lastError?.message || 'Desconocido'}`);
}