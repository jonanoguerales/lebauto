"use client";
import React, { useEffect, useRef, useCallback, useState, useTransition } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CardContent, CardFooter } from "@/components/ui/card";
import { Send, UserCircle2, ArrowLeft, BotMessageSquare, Loader2 } from "lucide-react";
import { chatFlow } from "@/lib/chatFlow";
import { useChatStore } from '@/lib/chatStore';
import type { ChatMessageInStore, ChatButtonOption, UserData } from '@/lib/chatFlowTypes';

interface ChatMessageWithLoading extends ChatMessageInStore {
  isLoadingAction?: boolean;
}

export default function ChatBotInternal() {
  const [isPending, startTransition] = useTransition();

  const {
    messages, currentStepId, userData, history, errorMessage, isChatInitialized,
    addMessageToStore, setCurrentStepIdInStore, setUserDataInStore,
    pushHistoryInStore, popHistoryFromStore, setErrorMessageInStore,
    setMessagesDirectlyInStore, setIsChatInitializedInStore, clearButtonsFromBotMessagesInStore,
  } = useChatStore();

  const [userInput, setUserInput] = useState("");
  const chatContainerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const upsertMessage = (message: ChatMessageWithLoading) => {
    setMessagesDirectlyInStore(prev => {
        const existingIndex = prev.findIndex(m => m.id === message.id);
        if (existingIndex > -1) {
            const newMessages = [...prev];
            newMessages[existingIndex] = message;
            return newMessages;
        }
        return [...prev, message];
    });
  };

  const processStep = useCallback((stepId: string, currentData: UserData) => {
    const step = chatFlow[stepId];
    if (!step) {
      console.error(`Error: No se encontró el paso con ID "${stepId}"`);
      addMessageToStore("bot", "Lo siento, ha ocurrido un error interno.");
      setCurrentStepIdInStore("start");
      return;
    }
    const botMessageText = typeof step.message === "function" ? step.message(currentData) : step.message;
    const stepOptions = typeof step.options === 'function' ? step.options(currentData) : step.options;
    
    addMessageToStore("bot", botMessageText, stepOptions);

    if (step.isUserInput && inputRef.current) {
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [addMessageToStore, setCurrentStepIdInStore]);

  useEffect(() => {
    if (!isChatInitialized) {
      processStep("start", {});
      setIsChatInitializedInStore(true);
    }
  }, [isChatInitialized, setIsChatInitializedInStore, processStep]);

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [messages]);
  
  const handleUserResponse = (value: string, isButtonClick = false) => {
    const currentStep = chatFlow[currentStepId];
    if (!currentStep) return;

    if (!isButtonClick && currentStep.isUserInput && currentStep.validation) {
        const error = currentStep.validation(value, userData);
        if (error) {
            setErrorMessageInStore(error);
            return;
        }
    }
    setErrorMessageInStore(null);

    clearButtonsFromBotMessagesInStore();
    
    const responseTextForChat = isButtonClick 
        ? (typeof currentStep.options === 'function' 
            ? currentStep.options(userData) 
            : currentStep.options)?.find(opt => opt.value === value || opt.label === value)?.label || value
        : value || "(Omitido)";
    
    addMessageToStore("user", responseTextForChat);
    setUserInput("");

    startTransition(async () => {
        let nextStepIdToGo: string | undefined;
        let userDataSnapshot = { ...useChatStore.getState().userData };
        let newDataFromCurrentStep: Partial<UserData> = {};

        if (isButtonClick) {
            const stepOptions = typeof currentStep.options === 'function' ? currentStep.options(userDataSnapshot) : currentStep.options;
            const selectedOption = stepOptions?.find(opt => opt.value === value || opt.label === value);
            
            if (selectedOption) {
                nextStepIdToGo = selectedOption.nextStepId;
                if (currentStep.action && !currentStep.isUserInput) {
                    newDataFromCurrentStep = await currentStep.action(selectedOption.value || selectedOption.label, userDataSnapshot);
                }
            }
        } else {
            if (currentStep.isUserInput) {
                if (currentStep.action) {
                    newDataFromCurrentStep = await currentStep.action(value, userDataSnapshot);
                }
                nextStepIdToGo = currentStep.nextStepIdAfterInput;
            }
        }
        
        setUserDataInStore(newDataFromCurrentStep);
        const fullyUpdatedUserData = { ...userDataSnapshot, ...newDataFromCurrentStep };

        if (nextStepIdToGo) {
            const nextStep = chatFlow[nextStepIdToGo];
            
            if (nextStep && nextStep.action && nextStep.endFlow) {
                const loadingMessageId = crypto.randomUUID();
                upsertMessage({ id: loadingMessageId, sender: 'bot', text: 'Procesando tu solicitud...', isLoadingAction: true });
                
                const finalDataUpdate = await nextStep.action("", fullyUpdatedUserData); 
                setUserDataInStore(finalDataUpdate);

                const finalMessageText = typeof nextStep.message === 'function' ? nextStep.message({...fullyUpdatedUserData, ...finalDataUpdate}) : nextStep.message;
                const finalOptions = typeof nextStep.options === 'function' ? nextStep.options({...fullyUpdatedUserData, ...finalDataUpdate}) : nextStep.options;
                upsertMessage({ id: loadingMessageId, sender: 'bot', text: finalMessageText, buttons: finalOptions, isLoadingAction: false });

                setCurrentStepIdInStore(nextStepIdToGo);
                pushHistoryInStore(nextStepIdToGo);
            } else {
                setCurrentStepIdInStore(nextStepIdToGo);
                pushHistoryInStore(nextStepIdToGo);
                processStep(nextStepIdToGo, fullyUpdatedUserData);
            }
        }
    });
  };

  const handleSubmitInput = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const currentStep = chatFlow[currentStepId];
    if (currentStep?.isUserInput) {
      if (userInput.trim() || (!currentStep.validation || currentStep.validation("", userData) === null)) {
        handleUserResponse(userInput.trim(), false);
      } else if (currentStep.validation) {
        setErrorMessageInStore(currentStep.validation(userInput.trim(), userData));
      }
    }
  };

  const handleOptionClick = (option: ChatButtonOption) => {
    handleUserResponse(option.value || option.label, true);
  };
  
  const handleGoBack = () => {
    const lastStepId = popHistoryFromStore();
    if (lastStepId) {
        const targetStepId = history[history.length - 2]; 
        
        setMessagesDirectlyInStore((prevMessages) => {
            const lastUserIndex = prevMessages.map(m => m.sender).lastIndexOf('user');
            return lastUserIndex !== -1 ? prevMessages.slice(0, lastUserIndex) : prevMessages;
        });

        setErrorMessageInStore(null);
        setCurrentStepIdInStore(targetStepId);
        setTimeout(() => processStep(targetStepId, useChatStore.getState().userData), 50);
    }
  };

  const currentStepDef = chatFlow[currentStepId];
  const canGoBack = history.length > 1;

  const isSubmitDisabled = isPending || (currentStepDef?.isUserInput && !userInput.trim() && !!currentStepDef.validation && currentStepDef.validation("", userData) !== null);

  return (
    <>
      <CardContent ref={chatContainerRef} className="flex-1 overflow-y-auto p-3 sm:p-4 space-y-4 scroll-smooth bg-white dark:bg-gray-900">
        {(messages as ChatMessageWithLoading[]).map((m) => (
          <div key={m.id} className={`flex gap-2.5 ${m.sender === "user" ? "justify-end" : "justify-start"}`}>
            {m.sender === "bot" && (<BotMessageSquare className="h-6 w-6 text-primary flex-shrink-0 mt-1" />)}
            <div className={`max-w-[85%] p-3 rounded-xl shadow-sm break-words ${m.sender === "user" ? "bg-slate-600 text-white rounded-br-none" : "bg-slate-200 text-slate-800 dark:bg-slate-700 dark:text-slate-100 rounded-bl-none"}`}>
              {m.isLoadingAction ? (
                <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-300">
                  <Loader2 className="h-4 w-4 animate-spin" />
                  <span>{m.text}</span>
                </div>
              ) : (
                <p className="text-sm leading-relaxed whitespace-pre-wrap">{m.text}</p>
              )}

              {m.sender === "bot" && m.buttons && m.buttons.length > 0 && !m.isLoadingAction && (
                <div className="mt-3 flex flex-wrap gap-2">
                  {m.buttons.map((button, btnIdx) => ( 
                    <Button key={`${button.value || button.label}-${btnIdx}`} variant="default" size="sm" className="h-auto py-2 px-3 text-sm text-center bg-[#708BA0] hover:bg-[#5c7081] text-white border-0 flex-grow basis-[calc(50%-0.25rem)]" onClick={() => handleOptionClick(button)} disabled={isPending}>
                      {button.label}
                    </Button>
                  ))}
                </div>
              )}
            </div>
            {m.sender === "user" && (<UserCircle2 className="h-6 w-6 text-gray-400 flex-shrink-0 mt-1" />)}
          </div>
        ))}
      </CardContent>
      <CardFooter className="border-t p-3 sm:p-4 bg-gray-50 dark:bg-gray-800 flex-shrink-0 w-full flex flex-col items-start">
        {errorMessage && (<p className="text-red-500 text-xs mb-2 w-full text-left">{errorMessage}</p>)}
        {currentStepDef?.isUserInput ? (
          <form onSubmit={handleSubmitInput} className="flex w-full items-center space-x-2">
            {canGoBack && (<Button type="button" variant="ghost" size="icon" onClick={handleGoBack} aria-label="Atrás" className="flex-shrink-0" disabled={isPending}><ArrowLeft className="h-4 w-4" /></Button>)}
            <Input ref={inputRef} type={currentStepDef.inputType || "text"} value={userInput} onChange={(e) => setUserInput(e.target.value)} placeholder={currentStepDef.inputPlaceholder || "Escribe tu mensaje..."} className="flex-1 h-10 text-[16px] sm:text-sm min-w-0" aria-label="Escribe tu respuesta" disabled={isPending}/>
            <Button type="submit" size="icon" disabled={isSubmitDisabled} aria-label="Enviar respuesta" className="flex-shrink-0 bg-[#708BA0] hover:bg-[#5c7081]"><Send className="h-4 w-4" /></Button>
          </form>
        ) : (canGoBack && (<div className="w-full flex"><Button type="button" variant="outline" onClick={handleGoBack} aria-label="Atrás" className="gap-2" disabled={isPending}><ArrowLeft className="h-4 w-4" /> Atrás</Button></div>))}
      </CardFooter>
    </>
  );
}