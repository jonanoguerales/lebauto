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
  const [isChatUIVisible, setIsChatUIVisible] = useState(false);

  const handleToggleChat = () => {
    setIsChatUIVisible((prev) => !prev);
  };

  return (
    <>
      <div className="fixed flex flex-col gap-2 right-6 bottom-6 z-[998]">
        <TooltipProvider delayDuration={0}>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                size="icon"
                className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full h-14 w-14 shadow-lg"
                onClick={handleToggleChat}
                aria-label="Abrir chat de agente virtual"
                aria-expanded={isChatUIVisible}
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
      <ChatBotPopupWrapper isOpen={isChatUIVisible} onOpenChange={setIsChatUIVisible} />
    </>
  );
}