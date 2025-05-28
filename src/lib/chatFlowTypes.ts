export interface UserData {
  name?: string;
  email?: string;
  phone?: string;
  initialOption?: string; 
  faqAnswer?: string | null;
  userQuestion?: string; 
  preferredBodyType?: string;
  budgetMax?: number;
  preferredFuel?: string;
  parsedFiltersForCatalog?: string; 
  userSearchQuery?: string; 
}

export interface ChatButtonOption {
  label: string;
  nextStepId: string; 
  value?: string; 
}

export interface ChatStep {
  id: string;
  message: string | ((userData: UserData) => string);
  isUserInput?: boolean;
  inputType?: 'text' | 'email' | 'tel';
  inputPlaceholder?: string;
  validation?: (input: string, userData: UserData) => string | null;
  action?: (input: string, userData: UserData) => Promise<Partial<UserData>> | Partial<UserData>;
  options?: ChatButtonOption[] | ((userData: UserData) => ChatButtonOption[]);
  nextStepIdAfterInput?: string; 
  endFlow?: boolean;
  previousStepId?: string | ((userData: UserData) => string);
  redirectPath?: string | ((userData: UserData) => string);
  openInNewTab?: boolean;   
  navigateTo?: string | ((userData: UserData) => string);  
}

export interface ChatMessageInStore {
  id: string;
  sender: "user" | "bot";
  text: string;
  buttons?: ChatButtonOption[];
  isTyping?: boolean;
}

export interface ChatState {
  messages: ChatMessageInStore[];
  currentStepId: string;
  userData: UserData;
  history: string[];
  errorMessage: string | null;
  isChatInitialized: boolean;
  addMessageToStore: (sender: "user" | "bot", text: string, buttons?: ChatButtonOption[]) => void;
  setCurrentStepIdInStore: (stepId: string) => void;
  setUserDataInStore: (data: Partial<UserData> | ((prev: UserData) => Partial<UserData>)) => void;
  pushHistoryInStore: (stepId: string) => void;
  popHistoryFromStore: () => string | undefined;
  setHistoryInStore: (newHistory: string[]) => void;
  setErrorMessageInStore: (message: string | null) => void;
  resetChatInStore: () => void;
  clearButtonsFromBotMessagesInStore: () => void;
  setMessagesDirectlyInStore: (messagesUpdater: ChatMessageInStore[] | ((prevMessages: ChatMessageInStore[]) => ChatMessageInStore[])) => void;
  setIsChatInitializedInStore: (isInitialized: boolean) => void;
}