import { create } from 'zustand';
import { ChatState } from './chatFlowTypes';

const initialChatStoreState: Omit<ChatState, 
  'addMessageToStore' | 
  'setCurrentStepIdInStore' | 
  'setUserDataInStore' | 
  'pushHistoryInStore' |
  'popHistoryFromStore' |
  'setHistoryInStore' |
  'setErrorMessageInStore' |
  'resetChatInStore' |
  'clearButtonsFromBotMessagesInStore' |
  'setMessagesDirectlyInStore' |
  'setIsChatInitializedInStore'
> = {
  messages: [],
  currentStepId: 'start',
  userData: {},
  history: ['start'],
  errorMessage: null,
  isChatInitialized: false,
};

export const useChatStore = create<ChatState>((set, get) => ({
  ...initialChatStoreState,

  addMessageToStore: (sender, text, buttons) => set(state => {
    const id = crypto.randomUUID();
    let prevMessagesCleaned = state.messages;
    if (sender === 'bot' && buttons && buttons.length > 0) {
        prevMessagesCleaned = state.messages.map(msg => 
            (msg.sender === 'bot' && msg.buttons) ? { ...msg, buttons: undefined } : msg
        );
    }
    return { messages: [...prevMessagesCleaned, { id, sender, text, buttons, isTyping: false }] };
  }),

  setCurrentStepIdInStore: (stepId) => set({ currentStepId: stepId }),

  setUserDataInStore: (data) => set(state => ({
    userData: typeof data === 'function' ? { ...state.userData, ...data(state.userData) } : { ...state.userData, ...data }
  })),

  pushHistoryInStore: (stepId) => set(state => ({ history: [...state.history, stepId] })),

  popHistoryFromStore: () => {
    let previousStepId: string | undefined;
    set(state => {
        if (state.history.length <= 1) {
            previousStepId = state.history[0] || 'start'; 
            return { history: state.history };
        }
        const newHistory = [...state.history];
        newHistory.pop(); 
        previousStepId = newHistory[newHistory.length - 1];
        return { history: newHistory };
    });
    return previousStepId;
  },

  setHistoryInStore: (newHistory) => set({ history: newHistory}),
  setErrorMessageInStore: (message) => set({ errorMessage: message }),
  setIsChatInitializedInStore: (isInitialized) => set({ isChatInitialized: isInitialized }),
  clearButtonsFromBotMessagesInStore: () => set(state => ({
    messages: state.messages.map(msg => 
        (msg.sender === 'bot' && msg.buttons) ? { ...msg, buttons: undefined } : msg
    )
  })),
  setMessagesDirectlyInStore: (messagesUpdater) => set(state => ({
    messages: typeof messagesUpdater === 'function' ? messagesUpdater(state.messages) : messagesUpdater
  })),
  resetChatInStore: () => {
    set(initialChatStoreState);
    set({ isChatInitialized: false });
  },
}));