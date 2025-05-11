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
  distance_debug?: number;
}

async function* processOpenRouterStream(readableStream: ReadableStream<Uint8Array>): AsyncGenerator<string, void, undefined> {
  const reader = readableStream.getReader();
  const decoder = new TextDecoder();
  let buffer = "";
  let stillStreaming = true;

  console.log("[processOpenRouterStream] Iniciando procesamiento de stream...");

  try {
    while (stillStreaming) {
      const { done, value } = await reader.read();

      if (done) {
        // console.log("[processOpenRouterStream] Stream 'done' recibido del reader.");
        stillStreaming = false; // Salir del bucle principal
        // Procesar cualquier resto en el buffer que podría ser un JSON completo
        if (buffer.trim().startsWith("data: ")) {
          const dataContent = buffer.trim().substring(6);
          if (dataContent && dataContent !== "[DONE]") {
            try {
              const json = JSON.parse(dataContent);
              if (json.choices && json.choices[0].delta && json.choices[0].delta.content) {
                // console.log("[processOpenRouterStream] Último chunk del buffer:", json.choices[0].delta.content);
                yield json.choices[0].delta.content;
              }
            } catch (e) {
              console.warn("[processOpenRouterStream] Error parseando resto del buffer al final:", e, "Buffer:", buffer);
            }
          }
        }
        break; // Salir del bucle while
      }

      buffer += decoder.decode(value, { stream: true });
      // console.log("[processOpenRouterStream] Buffer actual:", buffer.replace(/\n/g, "\\n"));

      let eolIndex;
      // Un evento SSE termina con \n\n
      while ((eolIndex = buffer.indexOf("\n\n")) >= 0) {
        const line = buffer.substring(0, eolIndex).trim();
        buffer = buffer.substring(eolIndex + 2); // Consumir la línea y el \n\n

        // console.log("[processOpenRouterStream] Línea SSE procesada:", line);

        if (line.startsWith("data: ")) {
          const dataContent = line.substring(6).trim();
          if (dataContent === "[DONE]") {
            // console.log("[processOpenRouterStream] Recibido evento [DONE]");
            stillStreaming = false; // Indicar que no se esperan más datos
            break; // Salir del bucle while interno
          }
          if (dataContent) {
            try {
              const json = JSON.parse(dataContent);
              if (json.choices && json.choices[0].delta && json.choices[0].delta.content) {
                // console.log("[processOpenRouterStream] Chunk de contenido:", json.choices[0].delta.content);
                yield json.choices[0].delta.content;
              } else if (json.choices && json.choices[0].finish_reason) {
                // console.log("[processOpenRouterStream] Razón de finalización:", json.choices[0].finish_reason);
                stillStreaming = false; // El LLM indicó que terminó
                // No hay 'break' aquí, para permitir procesar el resto del buffer si done no es true aún
              }
            } catch (e) {
              // Puede que un chunk no sea un JSON completo, se acumulará en el buffer
              // console.warn("[processOpenRouterStream] Error parseando chunk JSON:", e, "Chunk:", dataContent);
            }
          }
        }
      }
      if (!stillStreaming) break; // Salir del bucle principal si [DONE] o finish_reason se procesó
    }
  } catch (error) {
    console.error("[processOpenRouterStream] Error leyendo del stream:", error);
  } finally {
    // console.log("[processOpenRouterStream] Finalizando procesamiento de stream.");
    reader.releaseLock(); // Asegúrate de liberar el lock
  }
}

export async function getAssistantStream(
  question: string
): Promise<ReadableStream<Uint8Array>> {
  if (!OPENROUTER_KEY) {
    throw new Error(
      "OPENROUTER_API_KEY no definida. La funcionalidad del chatbot estará limitada."
    );
  }

  console.log(`[getAssistantStream] Procesando pregunta: "${question}"`);
  const queryEmbedding = await getHFEmbedding(question);
  console.log("[Chatbot] queryEmbedding (longitud):", queryEmbedding.length);

  const { data: docsRaw, error: rpcError } = await supabaseClient.rpc(
    "match_documentos",
    {
      p_query_embedding: queryEmbedding,
      p_match_threshold: -0.4,
      p_match_count: 5,
    }
  );

  if (rpcError) {
    console.error(
      "Error DETALLADO en RPC match_documentos:",
      JSON.stringify(rpcError, null, 2)
    );
    throw new Error(
      "Problema al buscar información en la base de datos (código RPC)."
    );
  }

  const docs = (docsRaw ?? []) as DocumentRow[];
  if (docs.length > 0) {
    console.log(
      "Documentos recuperados para el contexto del LLM:",
      docs.map((d) => ({ id: d.id, sim: d.similarity }))
    );
  } else {
    console.log(
      "Ningún documento relevante encontrado para el contexto del LLM."
    );
  }

  const context = docs.map((d) => `- ${d.content.trim()}`).join("\n\n");

  const systemPrompt = `
Eres 'Lebi', un asistente virtual amigable, proactivo y experto del concesionario de coches Lebauto.
Tu misión es ayudar a los usuarios con sus consultas sobre vehículos y servicios, creando una conversación útil y guiada.
Usa ÚNICAMENTE la información de contexto proporcionada.

Flujo de conversación deseado:
1. Si el usuario pregunta por un tipo de coche (ej. "coches eléctricos") y el contexto proporciona varios:
   - Menciona brevemente 2-3 opciones destacadas del contexto (ej. "Tenemos varios eléctricos interesantes como el Tesla Model 3 y el BMW i4.").
   - Indica el número total de opciones que coinciden en el contexto (ej. "En total, encuentro X coches eléctricos en este momento.").
   - Pregunta al usuario si quiere más detalles sobre alguno en particular, o si prefiere ver la lista completa, o filtrar por marca/modelo (ej. "¿Te gustaría saber más sobre alguno de estos? También puedes decirme si buscas alguna marca en particular.").
2. Si el usuario pregunta por un coche específico y se encuentra en el contexto:
   - Proporciona los detalles clave (marca, modelo, año, precio, combustible, kilometraje).
   - Pregunta si desea conocer características específicas, opciones de financiación o concertar una prueba.
3. Si la información solicitada NO se encuentra en el contexto:
   - Indica amablemente: "No tengo información específica sobre eso en mis datos actuales. ¿Podrías reformular tu pregunta o te gustaría que te ayude con algo más general sobre nuestro stock o servicios?".
4. Si el contexto está vacío Y la pregunta es general sobre Lebauto:
   - Da una breve descripción general del concesionario.
5. Sé siempre cortés. No inventes información.
6. Si el usuario simplemente saluda o dice "hola", responde amablemente y pregunta en qué puedes ayudarle, quizás sugiriendo algunas preguntas comunes como las opciones de coches.
Al final de cada respuesta útil, pregunta si hay algo más en lo que puedas ayudar o si quiere continuar explorando.
Evita frases como "Basándome en el contexto...". Simplemente integra la información.
Prioriza la información de los coches eléctricos si el usuario muestra interés general en ellos.
    `.trim();
  const userMessage = `${
    context
      ? `Contexto Relevante:\n${context}\n\n`
      : "No se encontró contexto específico.\n\n"
  }Pregunta del Usuario: ${question}`;

  const messagesToLLM = [
    { role: "system", content: systemPrompt },
    { role: "user", content: userMessage },
  ];
  console.log(
    "Enviando a OpenRouter (solicitando stream):",
    JSON.stringify({ model: LLM_MODEL, messages: messagesToLLM[1] }, null, 2)
  ); // Solo loguea el mensaje de usuario para brevedad

  const llmResponse = await fetch(
    "https://openrouter.ai/api/v1/chat/completions",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${OPENROUTER_KEY}`,
        "HTTP-Referer":
          process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
        "X-Title": "Lebauto Chatbot",
      },
      body: JSON.stringify({
        model: LLM_MODEL,
        messages: messagesToLLM,
        stream: true,
        temperature: 0.2,
        max_tokens: 350,
      }),
    }
  );

  if (!llmResponse.ok || !llmResponse.body) {
    const errorBody = await llmResponse.text();
    console.error(
      `Error de OpenRouter API (${llmResponse.status}):`,
      errorBody
    );
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

  return customTextStream;
}
