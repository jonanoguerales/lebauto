"use client";

import { useState } from "react";
import { Bot } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ChatBotPopupWrapper } from "@/features/chatbot/components/ChatBotPopupWrapper";

export default function GlobalChatButton() {
  const [isChatOpen, setIsChatOpen] = useState(false);

  const handleToggleChat = () => {
    setIsChatOpen((prev) => !prev);
  };

  return (
    <>
      <div className="fixed bottom-6 right-6 z-50">
        <TooltipProvider delayDuration={0}>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                size="icon"
                className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full h-10 w-10 shadow-lg"
                onClick={handleToggleChat}
                aria-label="Abrir chat de agente virtual"
                aria-expanded={isChatOpen}
              >
                <Bot className="h-7 w-7" />
              </Button>
            </TooltipTrigger>
            <TooltipContent side="left">
              <p>Agente Virtual Lebi</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
      <ChatBotPopupWrapper isOpen={isChatOpen} onOpenChange={setIsChatOpen} />
    </>
  );
}