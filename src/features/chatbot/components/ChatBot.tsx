"use client";
import React, { useState, useEffect, useRef, useCallback } from "react";
import type { JSX } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Send, Bot, UserCircle2 } from "lucide-react";

interface ChatMessage {
  id: string;
  sender: "user" | "bot";
  text: string | JSX.Element;
  isLoading?: boolean;
}

const initialBotGreeting =
  "¡Hola! Soy Lebi, tu asistente virtual de Lebauto. ¿En qué puedo ayudarte hoy?";
const defaultSuggestions = [
  "Coches eléctricos disponibles",
  "¿Cuál es el Audi A4 más barato?",
  "Quiero vender mi coche",
  "Horario del concesionario",
];

export default function ChatBot() {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState("");
  const [isBotResponding, setIsBotResponding] = useState(false);
  const chatContainerRef = useRef<HTMLDivElement>(null);

  const addMessage = useCallback(
    (
      sender: "user" | "bot",
      text: string | JSX.Element,
      isLoading = false
    ): string => {
      const id = crypto.randomUUID();
      setMessages((prev) => [...prev, { id, sender, text, isLoading }]);
      return id;
    },
    []
  );

  const updateMessageWithStream = useCallback((id: string, chunk: string) => {
    setMessages((prev) =>
      prev.map((m) =>
        m.id === id
          ? {
              ...m,
              text: (typeof m.text === "string" ? m.text : "") + chunk,
              isLoading: false,
            }
          : m
      )
    );
  }, []);

  const finalizeBotMessage = useCallback(
    (id: string) => {
      setMessages((prev) =>
        prev.map((m) => (m.id === id ? { ...m, isLoading: false } : m))
      );
      addMessage(
        "bot",
        renderSuggestions(defaultSuggestions, handleSuggestionClick)
      );
    },
    [addMessage]
  );

  const removeSuggestions = useCallback(() => {
    setMessages((prev) =>
      prev.filter((m) => !(typeof m.text === "object" && m.sender === "bot"))
    );
  }, []);
  const renderSuggestions = useCallback(
    (
      suggestionsArray: string[],
      onClickHandler: (suggestion: string) => void
    ): JSX.Element => {
      return (
        <div className="flex flex-col space-y-2 items-start mt-2">
          <p className="text-xs text-muted-foreground mb-1">
            También puedes probar con esto:
          </p>
          <div className="flex flex-wrap gap-2">
            {suggestionsArray.map((s, i) => (
              <Button
                key={i}
                variant="outline"
                size="sm"
                className="h-auto py-1 px-2 text-xs text-left"
                onClick={() => onClickHandler(s)}
              >
                {s}
              </Button>
            ))}
          </div>
        </div>
      );
    },
    []
  );
  const fetchBotStreamResponse = useCallback(
    async (query: string) => {
      if (!query.trim()) return;

      setIsBotResponding(true);
      setInput("");

      const botMessageId = addMessage("bot", "", true);

      try {
        const response = await fetch("/api/chat", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ question: query }),
        });

        if (!response.ok || !response.body) {
          const errorData = await response
            .json()
            .catch(() => ({
              error: "Error desconocido del servidor al iniciar stream",
            }));
          throw new Error(errorData.error || `Error ${response.status}`);
        }

        const reader = response.body.getReader();
        const decoder = new TextDecoder();

        while (true) {
          const { value, done } = await reader.read();
          if (done) {
            break;
          }
          const chunk = decoder.decode(value, { stream: true });
          updateMessageWithStream(botMessageId, chunk);
        }
      } catch (e: any) {
        console.error("Error consumiendo stream:", e);
        setMessages((prev) =>
          prev.map((m) =>
            m.id === botMessageId
              ? {
                  ...m,
                  text: `Lo siento, ha ocurrido un error: ${
                    e.message || "Intenta de nuevo."
                  }`,
                  isLoading: false,
                }
              : m
          )
        );
      } finally {
        finalizeBotMessage(botMessageId);
        setIsBotResponding(false);
      }
    },
    [addMessage, updateMessageWithStream, finalizeBotMessage]
  );

  const handleSuggestionClick = useCallback(
    (suggestion: string) => {
      removeSuggestions();
      addMessage("user", suggestion);
      fetchBotStreamResponse(suggestion);
    },
    [addMessage, fetchBotStreamResponse, removeSuggestions]
  );

  useEffect(() => {
    setMessages([
      { id: crypto.randomUUID(), sender: "bot", text: initialBotGreeting },
      {
        id: crypto.randomUUID(),
        sender: "bot",
        text: renderSuggestions(defaultSuggestions, handleSuggestionClick),
      },
    ]);
  }, [renderSuggestions, handleSuggestionClick]);

  const handleSubmit = (e?: React.FormEvent<HTMLFormElement>) => {
    e?.preventDefault();
    if (!input.trim() || isBotResponding) return;

    removeSuggestions();
    addMessage("user", input.trim());
    fetchBotStreamResponse(input.trim());
  };

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop =
        chatContainerRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <Card className="w-full max-w-lg mx-auto shadow-xl flex flex-col h-full">
      <CardContent
        ref={chatContainerRef}
        className="flex-1 overflow-y-auto p-4 space-y-4 scroll-smooth"
      >
        {messages.map((m) => (
          <div
            key={m.id}
            className={`flex gap-2.5 ${
              m.sender === "user" ? "justify-end" : "justify-start"
            }`}
          >
            {m.sender === "bot" && (
              <Bot className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
            )}
            <div
              className={`max-w-[85%] p-3 rounded-xl shadow-sm ${
                m.sender === "user"
                  ? "bg-primary text-primary-foreground rounded-br-none"
                  : "bg-muted text-foreground rounded-bl-none"
              }`}
            >
              {m.isLoading ? (
                <div className="flex items-center space-x-1 text-sm opacity-80">
                  <span className="h-2 w-2 bg-current rounded-full animate-bounce [animation-delay:-0.3s]"></span>
                  <span className="h-2 w-2 bg-current rounded-full animate-bounce [animation-delay:-0.15s]"></span>
                  <span className="h-2 w-2 bg-current rounded-full animate-bounce"></span>
                </div>
              ) : typeof m.text === "string" ? (
                m.text.split("\n").map((line, i) => (
                  <p key={i} className="text-sm leading-relaxed">
                    {line}
                  </p>
                ))
              ) : (
                m.text
              )}
            </div>
            {m.sender === "user" && (
              <UserCircle2 className="h-6 w-6 text-gray-400 flex-shrink-0 mt-1" />
            )}
          </div>
        ))}
      </CardContent>
      <CardFooter className="border-t p-3 sm:p-4">
        <form
          onSubmit={handleSubmit}
          className="flex w-full items-center space-x-2"
        >
          <Input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Escribe tu mensaje..."
            disabled={isBotResponding}
            className="flex-1 h-10 text-sm"
            aria-label="Escribe tu pregunta para el chatbot"
            autoFocus
          />
          <Button
            type="submit"
            size="icon"
            disabled={isBotResponding || !input.trim()}
            aria-label="Enviar pregunta"
          >
            <Send className="h-4 w-4" />
          </Button>
        </form>
      </CardFooter>
    </Card>
  );
}
