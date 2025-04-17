// app/utils/chatbot.ts
import { supabaseClient } from "@/supabase/supabase";
import { getHFEmbedding } from "./getHFEmbedding";

const OPENROUTER_KEY = process.env.OPENROUTER_API_KEY!;
if (!OPENROUTER_KEY) throw new Error("Define OPENROUTER_API_KEY en tu .env");

// Nombre del modelo en OpenRouter
const LLM_MODEL = "deepseek/deepseek-chat-v3-0324:free";

// Forma de cada fila de la búsqueda vectorial
interface DocumentRow {
  id: number;
  file_name: string | null;
  content: string;
  similarity: number;
}

/**
 * Consulta al asistente: genera embedding, busca en Supabase, y pregunta a OpenRouter.
 */
export async function getAssistantAnswer(question: string): Promise<{ answer: string }> {
  try {
    // 1) Embedding de la pregunta
    const queryEmbedding = await getHFEmbedding(question);

    // 2) RPC vectorial en Supabase
    const { data: docsRaw, error: rpcError } = await supabaseClient.rpc(
      "match_documentos",
      { query_embedding: queryEmbedding, match_count: 5 }
    );
    if (rpcError) {
      console.error("RPC match_documentos error:", rpcError);
      return { answer: "Lo siento, no pude buscar en la base de datos." };
    }
    const docs = (docsRaw ?? []) as DocumentRow[];
    if (docs.length === 0) {
      return { answer: "Lo siento, no encontré información relacionada en nuestros datos." };
    }

    // 3) Construir contexto
    const context = docs.map(d => `- ${d.content.trim()}`).join("\n");

    // 4) Prompt para el LLM
    const system = `
Eres un asistente de Lebauto. Responde **solo** con la información proporcionada.
Si la respuesta no está en estos datos, di que no dispones de ella.
`.trim();
    const user = `Contexto:\n${context}\n\nPregunta: ${question}`;

    // 5) Llamada a OpenRouter
    const resp = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${OPENROUTER_KEY}`,
      },
      body: JSON.stringify({
        model: LLM_MODEL,
        messages: [
          { role: "system", content: system },
          { role: "user", content: user },
        ],
        temperature: 0,
        max_tokens: 400,
      }),
    });
    if (!resp.ok) {
      console.error("OpenRouter error:", await resp.text());
      return { answer: "Lo siento, hubo un error generando la respuesta." };
    }
    const { choices } = await resp.json();
    const answer = choices?.[0]?.message?.content?.trim() ?? "Lo siento, no obtuve una respuesta.";
    return { answer };
  } catch (err) {
    console.error("Error en getAssistantAnswer:", err);
    return { answer: "Ha ocurrido un error interno." };
  }
}
