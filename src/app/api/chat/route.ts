import { getAssistantStream } from '@/utils/chatbot'; 
import { NextResponse } from 'next/server'; 

export async function POST(request: Request) {
  let question: string;
  try {
    const body = await request.json();
    question = body.question;
  } catch (error) {
    return NextResponse.json({ error: 'Solicitud inválida. Asegúrate de enviar un JSON con el campo "question".' }, { status: 400 });
  }

  if (typeof question !== 'string' || !question.trim()) {
    return NextResponse.json({ error: 'El campo "question" es requerido y no puede estar vacío.' }, { status: 400 });
  }

  try {
    const stream = await getAssistantStream(question);
    return new Response(stream, {
      headers: {
        'Content-Type': 'text/plain; charset=utf-8', 
      },
    });
  } catch (error: any) {
    console.error("Error en API route /api/chat al obtener stream:", error);
    return NextResponse.json({ error: error.message || 'Error interno del servidor al procesar la solicitud de stream.' }, { status: 500 });
  }
}