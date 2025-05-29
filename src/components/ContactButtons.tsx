"use client";

import { Phone, MessageSquare, Bot } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { JSX, useState } from "react";
import { ChatBotPopupWrapper } from "@/features/chatbot/components/ChatBotPopupWrapper";

export default function ContactButtons({ estado }: { estado: string }) {
  const [isChatOpen, setIsChatOpen] = useState(false);

  const toggleChatbot = () => {
    setIsChatOpen((prev) => !prev);
  };

  return (
    <>
      <div
        className={`${
          estado === "menu"
            ? "flex w-full justify-around mt-8"
            : "fixed md:flex flex-col gap-4 right-6 bottom-6 z-50"
        }`}
      >
        <TooltipProvider delayDuration={0}>
          <div className="w-[46%]">
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                size="icon"
                className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full h-12 w-12"
                onClick={toggleChatbot}
                aria-label="Abrir chat de agente virtual"
              >
                <Bot className="h-6 w-6" />
              </Button>
            </TooltipTrigger>
            <TooltipContent side="left">
              <p>Agente Virtual Lebi</p>
            </TooltipContent>
          </Tooltip>
          </div>
          <div
            className={`${
              estado === "menu"
                ? "flex w-[54%] justify-between"
                : "hidden"
            }`}
          >
            <ContactButton
              icon={<Phone className="h-5 w-5" />}
              tooltip="Llamar ahora"
              onClick={() => (window.location.href = "tel:+34600000000")}
            />
            <ContactButton
              icon={<MessageSquare className="h-5 w-5" />}
              tooltip="Contactar por WhatsApp"
              onClick={() => window.open("https://wa.me/34600000000", "_blank")}
            />
          </div>
        </TooltipProvider>
      </div>
      <ChatBotPopupWrapper isOpen={isChatOpen} onOpenChange={setIsChatOpen} />
    </>
  );
}

function ContactButton({
  icon,
  tooltip,
  onClick,
}: {
  icon: JSX.Element;
  tooltip: string;
  onClick: () => void;
}) {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button
          size="icon"
          className="bg-gray-900 hover:bg-gray-700 text-white rounded-full h-12 w-12"
          onClick={onClick}
          aria-label={tooltip}
        >
          {icon}
        </Button>
      </TooltipTrigger>
      <TooltipContent side="left">
        <p>{tooltip}</p>
      </TooltipContent>
    </Tooltip>
  );
}
