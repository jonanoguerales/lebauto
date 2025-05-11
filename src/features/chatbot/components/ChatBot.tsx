"use client";
import React, { useState, useEffect, useRef, useCallback } from "react";
import type { JSX } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import {
  Send,
  Bot,
  UserCircle2,
  RotateCw,
  MessageSquarePlus,
} from "lucide-react";

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
  const [isBotTyping, setIsBotTyping] = useState(false);
  const chatContainerRef = useRef<HTMLDivElement>(null);

  // Helper function to render suggestions as buttons
  const renderSuggestions = useCallback(
    (
      suggestionsArray: string[],
      onClickHandler: (suggestion: string) => void
    ): JSX.Element => {
      return (
        <div className="flex flex-col space-y-2 items-start mt-2">
          <p className="text-xs text-muted-foreground mb-1">
            También puedes probar con:
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

  const addMessage = (
    sender: "user" | "bot",
    text: string | JSX.Element,
    isLoading = false
  ): string => {
    const id = crypto.randomUUID();
    setMessages((prev) => [...prev, { id, sender, text, isLoading }]);
    return id;
  };

  const updateMessage = (
    id: string,
    newText: string | JSX.Element,
    isLoading = false
  ) => {
    setMessages((prev) =>
      prev.map((m) => (m.id === id ? { ...m, text: newText, isLoading } : m))
    );
  };

  const removeSuggestions = () => {
    setMessages((prev) =>
      prev.filter((m) => !(typeof m.text === "object" && m.sender === "bot"))
    );
  };

  const fetchBotResponse = useCallback(
    async (query: string) => {
      if (!query.trim()) return;

      setIsBotTyping(true);
      const botLoadingId = addMessage("bot", "", true); // Add temporary loading message

      try {
        const res = await fetch("/api/chat", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ question: query }),
        });

        if (!res.ok) {
          const errorData = await res
            .json()
            .catch(() => ({ error: "Error desconocido del servidor" }));
          throw new Error(errorData.error || `Error ${res.status}`);
        }

        const { answer } = await res.json();
        updateMessage(botLoadingId, answer, false);
        // Después de la respuesta, mostrar nuevas sugerencias
        addMessage(
          "bot",
          renderSuggestions(defaultSuggestions, handleSuggestionClick)
        );
      } catch (e: any) {
        console.error("Error fetching bot response:", e);
        updateMessage(
          botLoadingId,
          `Lo siento, ha ocurrido un error: ${
            e.message || "Intenta de nuevo."
          }`,
          false
        );
        // También aquí, mostrar sugerencias para que el usuario pueda continuar
        addMessage(
          "bot",
          renderSuggestions(defaultSuggestions, handleSuggestionClick)
        );
      } finally {
        setIsBotTyping(false);
      }
    },
    [renderSuggestions]
  ); // Agrega renderSuggestions a las dependencias

  const handleSuggestionClick = useCallback(
    (suggestion: string) => {
      removeSuggestions();
      addMessage("user", suggestion);
      fetchBotResponse(suggestion);
    },
    [fetchBotResponse]
  ); // Agrega fetchBotResponse a las dependencias

  useEffect(() => {
    // Mensaje inicial del bot con sugerencias
    setMessages([
      { id: crypto.randomUUID(), sender: "bot", text: initialBotGreeting },
      {
        id: crypto.randomUUID(),
        sender: "bot",
        text: renderSuggestions(defaultSuggestions, handleSuggestionClick),
      },
    ]);
  }, [renderSuggestions, handleSuggestionClick]); // Se ejecuta una vez al montar

  const handleSubmit = (e?: React.FormEvent<HTMLFormElement>) => {
    e?.preventDefault();
    if (!input.trim() || isBotTyping) return;

    removeSuggestions();
    addMessage("user", input.trim());
    fetchBotResponse(input.trim());
    setInput("");
  };

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop =
        chatContainerRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <Card className="w-full max-w-lg mx-auto shadow-xl flex flex-col h-[80vh] md:h-[70vh]">
      <CardHeader className="border-b">
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center gap-2 text-lg">
            <MessageSquarePlus className="text-primary h-6 w-6" />
            Asistente Virtual Lebauto
          </CardTitle>
          {/* Podrías añadir un botón para cerrar el chat aquí si fuera un pop-up */}
        </div>
        <CardDescription className="text-xs">
          Pregúntame sobre nuestros coches, financiación, o cómo vender tu
          vehículo.
        </CardDescription>
      </CardHeader>
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
            disabled={isBotTyping}
            className="flex-1 h-10 text-sm"
            aria-label="Escribe tu pregunta para el chatbot"
            autoFocus
          />
          <Button
            type="submit"
            size="icon"
            disabled={isBotTyping || !input.trim()}
            aria-label="Enviar pregunta"
          >
            <Send className="h-4 w-4" />
          </Button>
        </form>
      </CardFooter>
    </Card>
  );
}
