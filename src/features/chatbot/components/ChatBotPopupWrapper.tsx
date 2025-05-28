"use client";
import React, { useEffect, useState } from "react"; 
import { Button } from "@/components/ui/button";
import { CardHeader, CardTitle } from "@/components/ui/card";
import { Bot as BotIcon, X as XIcon, ChevronsDownUp } from "lucide-react";
import ChatBotInternal from "./ChatBot";
import { useChatStore } from "@/lib/chatStore";
import { chatFlow } from "@/lib/chatFlow";

interface ChatBotPopupWrapperProps {
  isOpen: boolean;
  onOpenChange: (isOpen: boolean) => void;
}

export function ChatBotPopupWrapper({ isOpen, onOpenChange }: ChatBotPopupWrapperProps) {
  const currentStepId = useChatStore((state) => state.currentStepId);
  
  const [isCompactMode, setIsCompactMode] = useState(false); 
  const [hasNavigated, setHasNavigated] = useState(false);

  useEffect(() => {
    const body = document.body;
    const originalOverflow = body.style.overflow;
    const originalPosition = body.style.position; 
    const originalWidth = body.style.width; 

    if (isOpen) {
      body.style.overflow = 'hidden';
      if (!isCompactMode || window.innerWidth >= 640 ) { 
        body.style.position = 'fixed';
        body.style.width = '100%';
      }
    } else {
      body.style.overflow = originalOverflow;
      body.style.position = originalPosition;
      body.style.width = originalWidth;
      setIsCompactMode(false); 
      setHasNavigated(false); 
    }
    return () => {
      body.style.overflow = originalOverflow;
      body.style.position = originalPosition;
      body.style.width = originalWidth;
    };
  }, [isOpen, isCompactMode]);


  useEffect(() => {
    if (isOpen && chatFlow && chatFlow[currentStepId]?.navigateTo && !hasNavigated) {
        if (window.innerWidth < 640) { 
             setIsCompactMode(true);
        }
        setHasNavigated(true); 
    }
    if (currentStepId === 'start' && hasNavigated) {
        setIsCompactMode(false);
        setHasNavigated(false);
    }
  }, [currentStepId, isOpen, hasNavigated]);


  if (!isOpen) {
    return null;
  }

  const popupHeightClass = isCompactMode 
    ? "h-[60dvh] sm:h-[calc(100dvh-8rem)]" 
    : "h-[100dvh] sm:h-[calc(100dvh-8rem)]";

  return (
    <>
      <div
        className="fixed inset-0 bg-black/30 backdrop-blur-sm z-[999]" 
        onClick={() => {
            onOpenChange(false);
        }}
        aria-hidden="true"
      ></div>

      <div
        className={`fixed inset-x-0 bottom-0 
                   w-full ${popupHeightClass}
                   bg-card shadow-2xl 
                   flex flex-col 
                   sm:inset-auto sm:bottom-4 sm:right-4 sm:w-[400px] sm:max-h-[650px] sm:rounded-xl 
                   z-[1000] overflow-hidden transition-all duration-300 ease-out`} 
      >
        <CardHeader className="flex flex-row items-center justify-between p-3 sm:p-4 border-b bg-gray-100 dark:bg-gray-800 flex-shrink-0">
          <CardTitle className="text-base sm:text-lg font-semibold flex items-center gap-2 text-gray-800 dark:text-gray-100">
            <BotIcon className="text-primary h-5 w-5" /> Agente Virtual Lebi
          </CardTitle>
          <div className="flex items-center gap-1">
            {isCompactMode && window.innerWidth < 640 && (
                 <Button variant="ghost" size="icon" onClick={() => setIsCompactMode(false)} aria-label="Expandir chat" className="h-8 w-8 sm:h-9 sm:w-9">
                    <ChevronsDownUp className="h-4 w-4 sm:h-5 sm:w-5 text-gray-600 dark:text-gray-300 rotate-180" />
                </Button>
            )}
             {!isCompactMode && hasNavigated && window.innerWidth < 640 && ( 
                <Button variant="ghost" size="icon" onClick={() => setIsCompactMode(true)} aria-label="Minimizar chat" className="h-8 w-8 sm:h-9 sm:w-9">
                    <ChevronsDownUp className="h-4 w-4 sm:h-5 sm:w-5 text-gray-600 dark:text-gray-300" />
                </Button>
            )}
            <Button variant="ghost" size="icon" onClick={() => onOpenChange(false)} aria-label="Cerrar chat" className="h-8 w-8 sm:h-9 sm:w-9">
              <XIcon className="h-4 w-4 sm:h-5 sm:w-5 text-gray-600 dark:text-gray-300" />
            </Button>
          </div>
        </CardHeader>
        <ChatBotInternal /> 
      </div>
    </>
  );
}