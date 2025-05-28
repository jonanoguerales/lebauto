"use client";
import React, { useEffect, useRef, useCallback, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CardContent, CardFooter } from "@/components/ui/card";
import { Send, UserCircle2, ArrowLeft, BotMessageSquare } from "lucide-react";
import { useRouter } from 'next/navigation';
import {
  chatFlow,
  type UserData,
  type ChatButtonOption,
} from "@/lib/chatFlow";
import { useChatStore } from '@/lib/chatStore';
import { useFilterStore as useGlobalFilterStore } from '@/lib/store';
import type { FiltersData, ArrayFilterKey, NumberFilterKey } from '@/lib/definitions';
import { ChatMessageInStore } from "@/lib/chatFlowTypes";


export default function ChatBotInternal() {
  const router = useRouter();
  const {
    messages,
    currentStepId,
    userData,
    history,
    errorMessage,
    isChatInitialized,
    addMessageToStore,
    setCurrentStepIdInStore,
    setUserDataInStore,
    pushHistoryInStore,
    popHistoryFromStore,
    setHistoryInStore,
    setErrorMessageInStore,
    setMessagesDirectlyInStore,
    clearButtonsFromBotMessagesInStore,
    setIsChatInitializedInStore,
  } = useChatStore();

  const globalSetFilter = useGlobalFilterStore((state) => state.setFilter);
  const globalClearFilters = useGlobalFilterStore(
    (state) => state.clearFilters
  );

  const [userInput, setUserInput] = useState("");

  const chatContainerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const addMessage = useCallback((sender: "user" | "bot", text: string, buttons?: ChatButtonOption[]) => {
    if (sender === 'bot' && buttons && buttons.length > 0) {
        clearButtonsFromBotMessagesInStore();
    }
    addMessageToStore(sender, text, buttons);
  }, [addMessageToStore, clearButtonsFromBotMessagesInStore]);

  const processStep = useCallback(
    (stepId: string, currentData: UserData) => {
      const step = chatFlow[stepId];
      if (!step) {
        console.error(`Error: No se encontró el paso con ID "${stepId}"`);
        addMessage("bot", "Lo siento, ha ocurrido un error interno. Volviendo al inicio.");
        setCurrentStepIdInStore("start");
        setHistoryInStore(["start"]);
        setTimeout(() => processStep("start", {}), 0);
        return;
      }

      const botMessageText = typeof step.message === "function" ? step.message(currentData) : step.message;
      let stepOptions = typeof step.options === "function" ? step.options(currentData) : step.options;
      
      const prevIdFunc = step.previousStepId;
      const prevId = typeof prevIdFunc === 'function' ? prevIdFunc(currentData) : prevIdFunc;

      if (!stepOptions && prevId && step.id !== 'start' && !step.isUserInput && step.id !== 'endChat') {
          if (prevId) { 
              stepOptions = [{label: "Atrás", nextStepId: prevId, value: `internal_back_to_${prevId}`}];
          }
      }

      addMessage("bot", botMessageText, stepOptions);

      if (step.isUserInput && inputRef.current) {
        setTimeout(() => inputRef.current?.focus(), 50);
      }
      
      const navigateToPath = typeof step.navigateTo === 'function' ? step.navigateTo(currentData) : step.navigateTo;
      const redirectPathValue = typeof step.redirectPath === 'function' ? step.redirectPath(currentData) : step.redirectPath;

      if (navigateToPath) {
        if (step.action) { step.action("", currentData); }

        if (navigateToPath.includes("?")) {
          const searchParamsString = navigateToPath.split("?")[1];
          const params = new URLSearchParams(searchParamsString);
          
          globalClearFilters(); 

          params.forEach((value, key) => {
            const filterKey = key as keyof FiltersData;
            const numericKeys: (keyof FiltersData)[] = ["maxPrice", "minPrice", "maxYear", "minYear", "maxKm", "minKm", "doorFrom", "doorTo", "seatFrom", "seatTo", "minPower", "maxPower", "minEngineDisplacement", "maxEngineDisplacement"];
            const arrayKeys: (keyof FiltersData)[] = ["brand", "model", "fuel", "location", "color", "bodyType", "transmission", "environmentalTag", "drivetrain"];

            if (numericKeys.includes(filterKey) && !isNaN(Number(value))) {
              globalSetFilter(filterKey as NumberFilterKey, Number(value)); 
            } else if (arrayKeys.includes(filterKey)) {
              value.split(',').forEach(part => {
                globalSetFilter(filterKey as ArrayFilterKey, part.trim());
              });
            } else {
              if(!numericKeys.includes(filterKey) && !arrayKeys.includes(filterKey)){
                 console.warn(`Clave de filtro no manejada explícitamente o tipo inesperado: ${key} con valor ${value}`);
              } else if (!numericKeys.includes(filterKey) && isNaN(Number(value))) {
                console.warn(`Valor no numérico para clave numérica esperada: ${key} con valor ${value}`);
              }
            }
          });
        } else {
           if (navigateToPath === '/coches-segunda-mano') {
              globalClearFilters();
           }
        }
        router.push(navigateToPath);

      } else if (redirectPathValue) {
         if (step.action) { step.action("", currentData); }
        if (step.openInNewTab !== false) { 
          setTimeout(() => {
            if (typeof window !== "undefined") { window.open(redirectPathValue, '_blank'); }
          }, 1000);
        } else {
          setTimeout(() => router.push(redirectPathValue), 1000);
        }
      } else if (step.action && step.endFlow) { 
        step.action("", currentData);
      }
    },
    [addMessage, router, setCurrentStepIdInStore, setHistoryInStore, globalSetFilter, globalClearFilters]
  );

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

  const handleUserResponse = async (value: string, isButtonClick = false) => {
    const currentStep = chatFlow[currentStepId];
    if (!currentStep) return;

    let responseTextForChat: string = value;
    let nextStepIdToGo: string | undefined;
    let accumulatedUserDataChanges: Partial<UserData> = {};

    if (isButtonClick) {
      const stepOptions = typeof currentStep.options === 'function' ? currentStep.options(userData) : currentStep.options;
      const selectedOption = stepOptions?.find( opt => opt.value === value || opt.label === value ); 
      
      if (selectedOption) {
        responseTextForChat = selectedOption.label;
        nextStepIdToGo = selectedOption.nextStepId;
        if (currentStepId === "start" && selectedOption.value) {
          accumulatedUserDataChanges.initialOption = selectedOption.value;
        }
        if (currentStep.action && !currentStep.isUserInput && selectedOption.value) {
          const dataFromAction = await currentStep.action( selectedOption.value, userData );
          accumulatedUserDataChanges = { ...accumulatedUserDataChanges, ...dataFromAction, };
        }
      } else {
        console.warn("Opción de botón no encontrada para el valor:", value);
        responseTextForChat = value || "Acción no reconocida";
      }
    } else {
      responseTextForChat = value;
      if (currentStep.isUserInput) {
        if (currentStep.validation) {
          const error = currentStep.validation(value, userData);
          if (error) {
            setErrorMessageInStore(error);
            inputRef.current?.focus();
            return;
          }
        }
        setErrorMessageInStore(null);
        if (currentStep.action) {
          const dataFromAction = await currentStep.action(value, userData);
          accumulatedUserDataChanges = { ...accumulatedUserDataChanges, ...dataFromAction, };
        }
        nextStepIdToGo = currentStep.nextStepIdAfterInput;
      }
    }

    addMessage("user", responseTextForChat);
    if (Object.keys(accumulatedUserDataChanges).length > 0) {
      setUserDataInStore(accumulatedUserDataChanges);
    }
    setUserInput("");

    if (nextStepIdToGo) {
      setCurrentStepIdInStore(nextStepIdToGo);
      pushHistoryInStore(nextStepIdToGo);
      processStep(nextStepIdToGo, { ...userData, ...accumulatedUserDataChanges, });
    }
  };

  const handleOptionClick = (option: ChatButtonOption) => {
    handleUserResponse(option.value || option.label, true);
  };

  const handleSubmitInput = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!userInput.trim()) return;
    const currentStep = chatFlow[currentStepId];
    if (currentStep?.isUserInput) {
      handleUserResponse(userInput.trim(), false);
    }
  };

  const handleGoBack = () => {
    const targetPreviousStepId = popHistoryFromStore();
    if (!targetPreviousStepId) return;

    const messagesUpdater = ( prevMessages: ChatMessageInStore[] ): ChatMessageInStore[] => {
      if (prevMessages.length === 0) return [];
      let cutOffIndex = prevMessages.length;
      const lastMessage = prevMessages[prevMessages.length - 1];

      if ( lastMessage?.sender === "user" && prevMessages.length > 1 && prevMessages[prevMessages.length - 2]?.sender === "bot" ) {
        cutOffIndex -= 2;
      } else if (lastMessage?.sender === "bot") {
        cutOffIndex -= 1;
      }

      const newMessages = prevMessages.slice(0, Math.max(0, cutOffIndex));
      if ( targetPreviousStepId === "start" &&
        ((newMessages.length === 0 && prevMessages.length > 0) ||
          (newMessages.length === 1 && newMessages[0]?.text.startsWith("¡Hola! Soy Lebi"))) &&
        prevMessages[0]?.text.startsWith("¡Hola! Soy Lebi")
      ) {
        return [prevMessages[0]];
      }
      return newMessages;
    };

    setMessagesDirectlyInStore(messagesUpdater);

    setCurrentStepIdInStore(targetPreviousStepId);
    setTimeout(() => processStep(targetPreviousStepId, userData), 0);
  };

  const currentStepDef = chatFlow[currentStepId];
  const canGoBack = currentStepDef?.previousStepId && history.length > 1;

  return (
    <>
      <CardContent
        ref={chatContainerRef}
        className="flex-1 overflow-y-auto p-3 sm:p-4 space-y-4 scroll-smooth bg-white dark:bg-gray-900"
      >
        {messages.map((m: ChatMessageInStore) => (
          <div
            key={m.id}
            className={`flex gap-2.5 ${
              m.sender === "user" ? "justify-end" : "justify-start"
            }`}
          >
            {m.sender === "bot" && (
              <BotMessageSquare className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
            )}
            <div
              className={`max-w-[85%] p-3 rounded-xl shadow-sm break-words ${
                m.sender === "user"
                  ? "bg-slate-600 text-white rounded-br-none"
                  : "bg-slate-200 text-slate-800 dark:bg-slate-700 dark:text-slate-100 rounded-bl-none"
              }`}
            >
              <p className="text-sm leading-relaxed whitespace-pre-wrap">
                {m.text}
              </p>
              {m.sender === "bot" && m.buttons && m.buttons.length > 0 && (
                <div className="mt-3 flex flex-wrap gap-2">
                  {m.buttons.map((button, btnIdx) => ( 
                    <Button
                      key={`${button.value || button.label}-${btnIdx}`}
                      variant="default"
                      size="sm"
                      className="h-auto py-2 px-3 text-sm text-center bg-[#708BA0] hover:bg-[#5c7081] text-white border-0 
                                  flex-grow basis-[calc(50%-0.25rem)]"
                      onClick={() => handleOptionClick(button)}
                      tabIndex={0}
                      onKeyDown={(e) => {
                        if (e.key === "Enter" || e.key === " ")
                          handleOptionClick(button);
                      }}
                      aria-label={button.label}
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
      <CardFooter className="border-t p-3 sm:p-4 bg-gray-50 dark:bg-gray-800 flex-shrink-0 w-full flex flex-col items-start">
        {errorMessage && (
          <p className="text-red-500 text-xs mb-2 w-full text-left">
            {errorMessage}
          </p>
        )}
        {currentStepDef?.isUserInput ? (
          <form
            onSubmit={handleSubmitInput}
            className="flex w-full items-center space-x-2"
          >
            {canGoBack && (
              <Button
                type="button"
                variant="ghost"
                size="icon"
                onClick={handleGoBack}
                aria-label="Atrás"
                className="flex-shrink-0"
              >
                <ArrowLeft className="h-4 w-4" />
              </Button>
            )}
            <Input
              ref={inputRef}
              type={currentStepDef.inputType || "text"}
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              placeholder={
                currentStepDef.inputPlaceholder || "Escribe tu mensaje..."
              }
              className="flex-1 h-10 text-[16px] sm:text-sm min-w-0"
              aria-label="Escribe tu respuesta"
            />
            <Button
              type="submit"
              size="icon"
              disabled={!userInput.trim()}
              aria-label="Enviar respuesta"
              className="flex-shrink-0 bg-[#708BA0] hover:bg-[#5c7081]"
            >
              <Send className="h-4 w-4" />
            </Button>
          </form>
        ) : (
          canGoBack && (
            <div className="w-full flex">
              <Button
                type="button"
                variant="outline"
                onClick={handleGoBack}
                aria-label="Atrás"
                className="gap-2"
              >
                <ArrowLeft className="h-4 w-4" /> Atrás
              </Button>
            </div>
          )
        )}
      </CardFooter>
    </>
  );
}