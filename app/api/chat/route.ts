import { NextResponse } from 'next/server';
import { getAssistantAnswer } from '@/utils/chatbot';

export async function POST(request: Request) {
  const { question } = await request.json().catch(() => ({}));
  if (typeof question !== 'string') {
    return NextResponse.json({ error: 'Falta el campo "question".' }, { status: 400 });
  }
  const { answer } = await getAssistantAnswer(question);
  return NextResponse.json({ answer });
}
