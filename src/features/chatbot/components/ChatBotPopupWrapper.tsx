"use client";

import React, { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { CardHeader, CardTitle } from "@/components/ui/card";
import { Bot as BotIcon, X as XIcon } from "lucide-react";
import ChatBotInternal from "./ChatBot";

interface ChatBotPopupWrapperProps {
  isOpen: boolean;
  onOpenChange: (isOpen: boolean) => void;
}

export function ChatBotPopupWrapper({ isOpen, onOpenChange }: ChatBotPopupWrapperProps) {
  useEffect(() => {
    const originalBodyOverflow = document.body.style.overflow;
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = originalBodyOverflow;
    }
    return () => {
      document.body.style.overflow = originalBodyOverflow;
    };
  }, [isOpen]);

  if (!isOpen) {
    return null;
  }

  return (
    <>
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[999]"
        onClick={() => onOpenChange(false)}
        aria-hidden="true"
      ></div>

      <div
        className="fixed inset-x-0 bottom-0 
                   w-full h-full max-h-full  // Ocupa toda la pantalla en móviles por defecto
                   sm:inset-auto sm:bottom-6 sm:right-6 
                   sm:w-[400px] sm:h-auto sm:max-h-[calc(100vh-7rem)] md:max-h-[650px] // Ajusta alturas máximas
                   z-[1000] flex flex-col shadow-2xl 
                   bg-card rounded-t-2xl sm:rounded-xl overflow-hidden"
      >
        <CardHeader className="flex flex-row items-center justify-between p-3 sm:p-4 border-b bg-gray-100 dark:bg-gray-800 flex-shrink-0">
          <CardTitle className="text-base sm:text-lg font-semibold flex items-center gap-2 text-gray-800 dark:text-gray-100">
            <BotIcon className="text-primary h-5 w-5" /> Agente Virtual Lebi
          </CardTitle>
          <Button variant="ghost" size="icon" onClick={() => onOpenChange(false)} aria-label="Cerrar chat" className="h-8 w-8 sm:h-9 sm:w-9">
            <XIcon className="h-4 w-4 sm:h-5 sm:w-5 text-gray-600 dark:text-gray-300" />
          </Button>
        </CardHeader>

        <ChatBotInternal /> 
      </div>
    </>
  );
}