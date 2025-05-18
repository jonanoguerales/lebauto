"use client";
import React, { useState, useEffect, useRef, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CardContent, CardFooter } from "@/components/ui/card";
import { Send, Bot as BotIconLucide, UserCircle2 } from "lucide-react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

interface ChatMessageButton {
  label: string;
  payload: string;
  type: "query";
}

interface ChatMessage {
  id: string;
  sender: "user" | "bot";
  text: string;
  buttons?: ChatMessageButton[];
  isLoading?: boolean;
}

const initialBotGreeting =
  "¡Hola! Soy Lebi, tu asistente virtual de Lebauto. ¿En qué puedo ayudarte hoy?";
const defaultSuggestions: ChatMessageButton[] = [
  { label: "Coches eléctricos disponibles", payload: "Coches eléctricos disponibles", type: "query" },
  { label: "¿Cuál es el Audi A4 más barato?", payload: "¿Cuál es el Audi A4 más barato?", type: "query" },
  { label: "Quiero vender mi coche", payload: "Quiero vender mi coche", type: "query" },
];

export default function ChatBotInternal() {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState("");
  const [isBotResponding, setIsBotResponding] = useState(false);
  const chatContainerRef = useRef<HTMLDivElement>(null);
   const initialLoadEffectRan = useRef(false);

  const addMessage = useCallback(
    (
      sender: "user" | "bot",
      text: string,
      isLoading = false,
      buttons?: ChatMessageButton[]
    ): string => {
      const id = crypto.randomUUID();
      setMessages((prev) => [
        ...prev,
        { id, sender, text, isLoading, buttons },
      ]);
      return id;
    },
    [] 
  );

  const updateMessageWithStream = useCallback((id: string, chunk: string) => {
    setMessages((prev) =>
      prev.map((m) =>
        m.id === id ? { ...m, text: m.text + chunk, isLoading: false } : m
      )
    );
  }, []); 

  const removeLastBotSuggestions = useCallback(() => {
    setMessages((prev) => {
      const lastMsg = prev[prev.length - 1];
      if (
        lastMsg &&
        lastMsg.sender === "bot" &&
        lastMsg.buttons &&
        lastMsg.buttons.length > 0 &&
        lastMsg.text.startsWith("También puedes probar") 
      ) {
        return prev.slice(0, -1);
      }
      return prev;
    });
  }, []);

  const addDefaultSuggestionButtons = useCallback(() => {
    addMessage("bot", "También puedes probar con esto:", false, defaultSuggestions);
  }, [addMessage]);

  const finalizeBotStreaming = useCallback((botMessageId?: string) => {
    if (botMessageId) {
      setMessages((prev) =>
        prev.map((m) =>
          m.id === botMessageId ? { ...m, isLoading: false } : m
        )
      );
    }
    setIsBotResponding(false);
  }, []); 

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
          const errorData = await response.json().catch(() => ({ error: "Error desconocido" }));
          throw new Error(errorData.error || `Error ${response.status}`);
        }
        const reader = response.body.getReader();
        const decoder = new TextDecoder();
        while (true) {
          const { value, done } = await reader.read();
          if (done) break;
          const chunk = decoder.decode(value, { stream: true });
          updateMessageWithStream(botMessageId, chunk);
        }
      } catch (e: any) {
        console.error("Error consumiendo stream:", e);
        setMessages((prev) =>
          prev.map((m) =>
            m.id === botMessageId
              ? { ...m, text: `Lo siento, ha ocurrido un error: ${e.message || "Intenta de nuevo."}`, isLoading: false }
              : m
          )
        );
      } finally {
        finalizeBotStreaming(botMessageId); 
        addDefaultSuggestionButtons(); 
      }
    },
    [addMessage, updateMessageWithStream, finalizeBotStreaming, addDefaultSuggestionButtons]
  );

  const handleSuggestionOrButtonClick = useCallback(
    (button: ChatMessageButton) => { 
      removeLastBotSuggestions();
      addMessage("user", button.label);
      fetchBotStreamResponse(button.payload);
    },
    [addMessage, fetchBotStreamResponse, removeLastBotSuggestions]
  );

  useEffect(() => {
    if (process.env.NODE_ENV === 'development' && initialLoadEffectRan.current) {
        // console.log("[ChatBot] StrictMode: Efecto inicial ya se ejecutó una vez, omitiendo segundo montaje.");
        return;
    }
    if (messages.length === 0) {
        // console.log("[ChatBot] Efecto de carga inicial EJECUTÁNDOSE.");
        addMessage("bot", initialBotGreeting);
        addDefaultSuggestionButtons();
    }
    return () => {
      initialLoadEffectRan.current = true;
    };
  }, []); 
  const handleSubmit = (e?: React.FormEvent<HTMLFormElement>) => {
    e?.preventDefault();
    if (!input.trim() || isBotResponding) return;
    removeLastBotSuggestions();
    addMessage("user", input.trim());
    fetchBotStreamResponse(input.trim());
    setInput("");
  };

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <>
      <CardContent
        ref={chatContainerRef}
        className="flex-1 overflow-y-auto p-3 sm:p-4 space-y-4 scroll-smooth bg-white dark:bg-gray-900"
      >
        {messages.map((m) => (
          <div
            key={m.id}
            className={`flex gap-2.5 ${
              m.sender === "user" ? "justify-end" : "justify-start"
            }`}
          >
            {m.sender === "bot" && (
              <BotIconLucide className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
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
              ) : (
                <div className="prose prose-sm dark:prose-invert max-w-full text-sm leading-relaxed">
                  <ReactMarkdown
                    remarkPlugins={[remarkGfm]}
                    components={{
                      p: ({ node, ...props }) => (
                        <p className="mb-1 last:mb-0" {...props} />
                      ),
                      strong: ({ node, ...props }) => (
                        <strong className="font-semibold" {...props} />
                      ),
                    }}
                  >
                    {m.text}
                  </ReactMarkdown>
                </div>
              )}
              {m.sender === "bot" &&
                !m.isLoading &&
                m.buttons &&
                m.buttons.length > 0 && (
                  <div className="mt-2 flex flex-wrap gap-2 items-start">
                    {m.buttons.map((button, btnIdx) => (
                      <Button
                        key={btnIdx}
                        variant="outline"
                        size="sm"
                        className="h-auto py-1 px-2 text-xs text-left bg-white hover:bg-gray-100 text-gray-700 border-gray-300 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600 dark:border-gray-600"
                        onClick={() => handleSuggestionOrButtonClick(button) }
                      >
                        {button.label}
                      </Button>
                    ))}
                  </div>
                )}
            </div>
            {m.sender === "user" && (
              <UserCircle2 className="h-6 w-6 text-gray-400 flex-shrink-0 mt-1" />
            )}
          </div>
        ))}
      </CardContent>
      <CardFooter className="border-t p-3 sm:p-4 bg-gray-50 dark:bg-gray-800 flex-shrink-0">
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
    </>
  );
}