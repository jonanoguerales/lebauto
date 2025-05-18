import { supabaseClient } from "@/app/supabase/supabase";
import { getHFEmbedding } from "./getHFEmbedding";

const OPENROUTER_KEY = process.env.OPENROUTER_API_KEY;
const LLM_MODEL = "deepseek/deepseek-chat-v3-0324:free";

interface DocumentRow {
  id: number;
  car_id: string;
  file_name: string | null;
  content: string;
  similarity: number;
}

async function* processOpenRouterStream(readableStream: ReadableStream<Uint8Array>): AsyncGenerator<string, void, undefined> {
  const reader = readableStream.getReader();
  const decoder = new TextDecoder();
  let buffer = "";
  let stillStreaming = true;
  // console.log("[processOpenRouterStream] Iniciando procesamiento de stream...");
  try {
    while (stillStreaming) {
      const { done, value } = await reader.read();
      if (done) {
        stillStreaming = false;
        if (buffer.trim().startsWith("data: ")) {
          const dataContent = buffer.trim().substring(6);
          if (dataContent && dataContent !== "[DONE]") {
            try {
              const json = JSON.parse(dataContent);
              if (json.choices && json.choices[0].delta && json.choices[0].delta.content) {
                yield json.choices[0].delta.content;
              }
            } catch (e) { /* Ignorar error de parseo en el último chunk incompleto */ }
          }
        }
        break;
      }
      buffer += decoder.decode(value, { stream: true });
      let eolIndex;
      while ((eolIndex = buffer.indexOf("\n\n")) >= 0) {
        const line = buffer.substring(0, eolIndex).trim();
        buffer = buffer.substring(eolIndex + 2);
        if (line.startsWith("data: ")) {
          const dataContent = line.substring(6).trim();
          if (dataContent === "[DONE]") {
            stillStreaming = false;
            break;
          }
          if (dataContent) {
            try {
              const json = JSON.parse(dataContent);
              if (json.choices && json.choices[0].delta && json.choices[0].delta.content) {
                yield json.choices[0].delta.content;
              } else if (json.choices && json.choices[0].finish_reason) {
                stillStreaming = false;
              }
            } catch (e) { /* Chunk puede no ser JSON completo, se acumulará */ }
          }
        }
      }
      if (!stillStreaming) break;
    }
  } catch (error) {
    console.error("[processOpenRouterStream] Error leyendo del stream:", error);
  } finally {
    reader.releaseLock();
  }
}

export async function getAssistantStream(question: string): Promise<ReadableStream<Uint8Array>> {
  console.time("[PERF] getAssistantStream TOTAL");
  if (!OPENROUTER_KEY) {
    console.timeEnd("[PERF] getAssistantStream TOTAL");
    throw new Error("OPENROUTER_API_KEY no definida.");
  }

  // console.log(`[getAssistantStream] Procesando pregunta: "${question}"`);
  
  console.time("[PERF] Paso 1: getHFEmbedding");
  const queryEmbedding = await getHFEmbedding(question);
  console.timeEnd("[PERF] Paso 1: getHFEmbedding");

  console.time("[PERF] Paso 2: Supabase RPC match_documentos");
  const { data: docsRaw, error: rpcError } = await supabaseClient.rpc(
    "match_documentos",
    {
      p_query_embedding: queryEmbedding,
      p_match_threshold: -0.4, 
      p_match_count: 3,        
    }
  );
  console.timeEnd("[PERF] Paso 2: Supabase RPC match_documentos");

  if (rpcError) {
    console.error("Error DETALLADO en RPC match_documentos:", JSON.stringify(rpcError, null, 2));
    console.timeEnd("[PERF] getAssistantStream TOTAL");
    throw new Error("Problema al buscar información en la base de datos (código RPC).");
  }

  const docs = (docsRaw ?? []) as DocumentRow[];
  let context = "";
  let numDocsInContext = 0;

  if (docs.length > 0) {
    // console.log("Documentos recuperados para el contexto del LLM:", docs.map(d => ({ id: d.id, sim: d.similarity, content: d.content.substring(0,30)+"..." })));
    context = docs.map((d) => `- ${d.content.trim()}`).join("\n\n");
    numDocsInContext = docs.length;
  } else {
    console.log("Ningún documento relevante encontrado para el contexto del LLM con el umbral actual.");
  }

  let totalElectricCarsInDB: number | null = null;
  const lowerQuestion = question.toLowerCase();
  if (lowerQuestion.includes("eléctrico") || lowerQuestion.includes("electricos")) {
      console.time("[PERF] Supabase COUNT Query (Eléctricos)");
      const { count, error: countError } = await supabaseClient
          .from('cars')
          .select('*', { count: 'exact', head: true })
          .eq('fuel', 'Eléctrico');
      console.timeEnd("[PERF] Supabase COUNT Query (Eléctricos)");
      if (countError) {
          console.error("Error obteniendo conteo total de coches eléctricos:", countError);
      } else {
          totalElectricCarsInDB = count;
          // console.log(`[Chatbot] Conteo total real de coches eléctricos: ${totalElectricCarsInDB}`);
      }
  }


  const systemPrompt = `
Eres 'Lebi', un asistente virtual amigable y experto del concesionario de coches Lebauto.
Tu misión es ayudar a los usuarios con sus consultas sobre vehículos y servicios, basándote ÚNICAMENTE en la información de contexto proporcionada.
Usa formato Markdown para las negritas (ej. **Tesla Model 3**) y para listas si es natural.

Cuando te pregunten por vehículos disponibles (ej. "coches eléctricos", "Tesla"):
1. Revisa el contexto proporcionado. Si hay vehículos, lista un MÁXIMO de 2 o 3 ejemplos.
2. Para cada ejemplo listado, incluye SOLO: **Marca Modelo (Año)**, Precio (ej. 45.990€), y Kilometraje (ej. 12.000 km).
3. Si se te proporciona información sobre el "CONTEO TOTAL REAL DE COCHES" (verás una nota así en el mensaje del usuario), úsala para decir algo como: "Actualmente, disponemos de [CONTEO TOTAL REAL] coches eléctricos en nuestro inventario." Si no se proporciona ese conteo, y el contexto sí tiene documentos, puedes decir: "He encontrado estos ${numDocsInContext} ejemplos que podrían interesarte:".
4. Después de la lista (o si no hay ejemplos en el contexto pero sí un conteo total), pregunta al usuario cómo quiere proceder. Por ejemplo: "¿Te gustaría más información detallada sobre alguno de estos modelos? También puedo buscar por otra marca, rango de precios, o contarte sobre nuestras opciones de financiación."

Si el usuario pregunta por UN coche específico (ej. "detalles del Audi A4") y lo encuentras en el contexto:
- Proporciona una descripción un poco más detallada usando los datos del contexto: Marca, Modelo, Año, Precio, Kilometraje, Combustible, Color, y alguna característica destacada si está presente.
- Pregunta: "¿Quieres saber más sobre su equipamiento completo, opciones de financiación, o quizás concertar una prueba?"

Si la información solicitada NO se encuentra en el contexto, o el contexto está vacío y no hay un conteo total relevante:
- Responde amablemente: "No tengo información específica sobre eso en mis datos actuales. ¿Podrías reformular tu pregunta o te gustaría que te ayude con algo más general sobre nuestro stock o los servicios que ofrecemos?".

Sé siempre cortés. No inventes información.
Al final de cada respuesta útil, invita a continuar la conversación.
  `.trim();

  let userMessageContextPrefix = "";
  if (totalElectricCarsInDB !== null && (lowerQuestion.includes("eléctrico") || lowerQuestion.includes("electricos"))) {
    userMessageContextPrefix = `NOTA PARA EL ASISTENTE: Hay un CONTEO TOTAL REAL DE COCHES de ${totalElectricCarsInDB} coches eléctricos. El siguiente contexto solo muestra algunos ejemplos si se encontraron.\n\n`;
  }


  const userMessage = `
${userMessageContextPrefix}
${context ? `Contexto Relevante (ejemplos destacados):\n${context}\n\n` : "No se encontró contexto específico relevante para esta pregunta en nuestros documentos.\n\n"}
Pregunta del Usuario: ${question}
`.trim();

  const messagesToLLM = [
    { role: "system", content: systemPrompt },
    { role: "user", content: userMessage },
  ];


  console.time("[PERF] Paso 3: LLM API Call (OpenRouter)");
  const llmResponse = await fetch("https://openrouter.ai/api/v1/chat/completions", {
    method: "POST",
    headers: { 
      "Content-Type": "application/json",
      Authorization: `Bearer ${OPENROUTER_KEY}`,
      "HTTP-Referer": process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
      "X-Title": "Lebauto Chatbot",
    },
    body: JSON.stringify({
      model: LLM_MODEL,
      messages: messagesToLLM,
      stream: true,
      temperature: 0.2,
      max_tokens: 300,
    }),
  });
  console.timeEnd("[PERF] Paso 3: LLM API Call (OpenRouter)");

  if (!llmResponse.ok || !llmResponse.body) {
    const errorBody = await llmResponse.text();
    console.error(`Error de OpenRouter API (${llmResponse.status}):`, errorBody);
    console.timeEnd("[PERF] getAssistantStream TOTAL");
    throw new Error(`Error del LLM al iniciar stream: ${llmResponse.status}`);
  }

  const customTextStream = new ReadableStream({
    async start(controller) {
      for await (const chunk of processOpenRouterStream(llmResponse.body!)) {
        controller.enqueue(new TextEncoder().encode(chunk));
      }
      controller.close();
    },
  });

  console.timeEnd("[PERF] getAssistantStream TOTAL");
  return customTextStream;
}