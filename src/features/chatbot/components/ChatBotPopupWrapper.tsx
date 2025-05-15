"use client";

import React, { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { Bot as BotIcon, X as XIcon } from "lucide-react";
import ChatBot from "./ChatBot";

interface ChatBotPopupWrapperProps {
  isOpen: boolean;
  onOpenChange: (isOpen: boolean) => void;
}

export function ChatBotPopupWrapper({ isOpen, onOpenChange }: ChatBotPopupWrapperProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { 
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) {
    return null; 
  }

  return (
    <>
      <div
        className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[999]"
        onClick={() => onOpenChange(false)} 
        aria-hidden="true"
      ></div>

      <div className="fixed bottom-0 right-0 sm:bottom-6 sm:right-6 w-full h-[calc(100dvh-50px)] sm:w-[400px] sm:max-h-[calc(100dvh-8rem)] z-[1000] flex flex-col">
        <Card className="w-full h-full rounded-t-xl sm:rounded-xl shadow-2xl flex flex-col transform transition-all duration-300 ease-out data-[state=closed]:translate-y-full sm:data-[state=closed]:translate-y-0 sm:data-[state=closed]:opacity-0 data-[state=open]:translate-y-0 sm:data-[state=open]:opacity-100" data-state={isOpen ? "open" : "closed"}>
          <CardHeader className="flex flex-row items-center justify-between p-3 sm:p-4 border-b bg-gray-50 dark:bg-gray-800 rounded-t-xl sm:rounded-t-lg flex-shrink-0">
            <CardTitle className="text-base sm:text-lg font-semibold flex items-center gap-2 text-gray-800 dark:text-gray-100">
              <BotIcon className="text-primary h-5 w-5" /> Agente Virtual Lebauto
            </CardTitle>
            <Button variant="ghost" size="icon" onClick={() => onOpenChange(false)} aria-label="Cerrar chat" className="h-8 w-8 sm:h-9 sm:w-9">
              <XIcon className="h-4 w-4 sm:h-5 sm:w-5 text-gray-600 dark:text-gray-300" />
            </Button>
          </CardHeader>
          <ChatBot />
        </Card>
      </div>
    </>
  );
}