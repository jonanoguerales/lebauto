// src/utils/chatbot.ts

import { supabaseClient } from "@/app/supabase/supabase";
import { getHFEmbedding } from "./getHFEmbedding";

const OPENROUTER_KEY = process.env.OPENROUTER_API_KEY;
if (!OPENROUTER_KEY) {
  console.warn(
    "OPENROUTER_API_KEY no está definida. La funcionalidad del chatbot estará limitada."
  );
}

const LLM_MODEL = "deepseek/deepseek-chat-v3-0324:free"; // O el modelo que estés usando

// Interfaz para la fila devuelta por match_documentos
interface DocumentRow {
  id: number;
  car_id: string;
  file_name: string | null;
  content: string;
  similarity: number;
  distance_debug?: number; // Añadido opcionalmente
}

export async function getAssistantAnswer(
  question: string
): Promise<{ answer: string }> {
  if (!OPENROUTER_KEY) {
    return {
      answer:
        "Lo siento, la configuración del chatbot no está completa (falta la clave API).",
    };
  }
  try {
    console.log(`[getAssistantAnswer] Procesando pregunta: "${question}"`);
    const queryEmbedding = await getHFEmbedding(question); // Esto ya tiene sus propios logs internos

    console.log(
      "[Chatbot] queryEmbedding (primeros 5 elementos):",
      queryEmbedding.slice(0, 5)
    );
    console.log("[Chatbot] queryEmbedding (longitud):", queryEmbedding.length);

    // Llamada a la función RPC match_documentos
    // Asegúrate de que la función SQL activa sea la de depuración que usa el operador <->
    // y no filtra por p_match_threshold.
    const { data: docsRaw, error: rpcError } = await supabaseClient.rpc(
      "match_documentos",
      {
        p_query_embedding: queryEmbedding,
        p_match_threshold: 0.01, 
        p_match_count: 5,       
      }
    );

    if (rpcError) {
      console.error(
        "Error DETALLADO en RPC match_documentos:",
        JSON.stringify(rpcError, null, 2)
      );
      return {
        answer:
          "Lo siento, tuve un problema al buscar información en la base de datos (código RPC).",
      };
    }

    console.log(
      "[Chatbot] Datos crudos de RPC 'match_documentos' (docsRaw):",
      docsRaw
    );

    const docs = (docsRaw ?? []) as DocumentRow[]; // Tipado como DocumentRow

    if (docs.length > 0) {
      console.log(
        "Documentos recuperados por 'match_documentos' (DETALLADO):",
        docs.map((d) => ({
          id: d.id,
          similarity: d.similarity,
          distance_debug: d.distance_debug, // Loguea la distancia
          content_preview: d.content.substring(0, 70) + "...",
        }))
      );
    } else {
      console.log("Ningún documento recuperado por 'match_documentos'.");
    }

    // Construir el contexto para el LLM
    // Para depurar, es útil no filtrar por similitud aquí al principio, para ver qué devuelve la BD.
    // Una vez que funcione, puedes reintroducir un filtro como: .filter((doc) => doc.similarity > 0.3)
    const context = docs.map((d) => `- ${d.content.trim()}`).join("\n\n");

    const systemPrompt = `
Eres 'Lebi', un asistente virtual amigable y experto del concesionario de coches Lebauto.
Tu misión es ayudar a los usuarios con sus consultas sobre vehículos y servicios de Lebauto, basándote ÚNICAMENTE en la información de contexto proporcionada.
Si la pregunta del usuario puede responderse con el contexto, hazlo de manera clara y concisa.
Si la información solicitada no se encuentra en el contexto, indica amablemente: "No tengo información específica sobre eso en mis datos actuales. ¿Podrías reformular tu pregunta o te gustaría que te ayude con algo más general sobre nuestros coches o servicios?".
Si el contexto está vacío, y la pregunta es general sobre Lebauto (ej: "¿Qué es Lebauto?", "¿Qué servicios ofrecéis?"), puedes dar una breve descripción general del concesionario. Para preguntas específicas de coches sin contexto, pide más detalles.
Sé siempre cortés y profesional.
No inventes información ni respondas a preguntas fuera del ámbito de Lebauto.
Al final de tu respuesta, si has proporcionado información, puedes añadir: "¿Hay algo más en lo que pueda ayudarte?".
Evita frases como "Basándome en el contexto...". Simplemente responde la pregunta.
    `.trim();

    const userMessage = `
${
  context
    ? `Contexto Relevante:\n${context}\n\n`
    : "No se encontró contexto específico relevante para esta pregunta en nuestros documentos.\n\n"
}
Pregunta del Usuario: ${question}
`.trim();

    const messagesToLLM = [
      { role: "system", content: systemPrompt },
      { role: "user", content: userMessage },
    ];

    console.log(
      "Enviando a OpenRouter:",
      JSON.stringify({ model: LLM_MODEL, messages: messagesToLLM }, null, 2)
    );

    const resp = await fetch("https://openrouter.ai/api/v1/chat/completions", {
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
        temperature: 0.2,
        max_tokens: 350,
      }),
    });

    if (!resp.ok) {
      const errorBody = await resp.text();
      console.error(`Error de OpenRouter API (${resp.status}):`, errorBody);
      return {
        answer: `Lo siento, el servicio de chat no está disponible en este momento (Error OR: ${resp.status}). Intenta más tarde.`,
      };
    }

    const { choices } = await resp.json();
    const answer =
      choices?.[0]?.message?.content?.trim() ??
      "No pude procesar tu solicitud en este momento.";
    console.log(
      `[getAssistantAnswer] Respuesta del LLM: "${answer.substring(0, 100)}..."`
    );
    return { answer };
  } catch (err: any) {
    console.error("Excepción en getAssistantAnswer:", err.message, err.stack);
    if (err.message && err.message.includes("Failed to fetch")) {
      return {
        answer:
          "No pude conectarme al servicio de chat. Verifica tu conexión a internet.",
      };
    }
    return {
      answer: `Ha ocurrido un error interno al procesar tu pregunta: ${err.message}`,
    };
  }
}
