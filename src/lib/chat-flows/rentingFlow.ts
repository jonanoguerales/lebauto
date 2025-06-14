import type { ChatStep } from '../chatFlowTypes';
export const rentingFlowSteps: Record<string, ChatStep> = {
    renting_askName: { 
        id: 'renting_askName', 
        message: 'Interesado en renting, ¡genial! Para empezar, ¿tu nombre?',
        isUserInput: true, inputType: 'text',
        action: async (input) => ({ 
            name: input, 
            initialOption: 'Renting',
            formSubmitted: false
        }),
        nextStepIdAfterInput: 'askPhoneForRenting', 
        previousStepId: 'start'
    },
    askPhoneForRenting: {
        id: 'askPhoneForRenting', message: (userData) => `Gracias ${userData.name || ''}. ¿A qué teléfono te llamamos para el renting?`,
        isUserInput: true, inputType: 'tel',
        validation: (input) => (!/^\+?[0-9\s-]{7,15}$/.test(input) ? 'Teléfono inválido.' : null),
        action: async (input) => ({ phone: input }),
        nextStepIdAfterInput: 'thankYouLeadGeneral',
        previousStepId: 'renting_askName',
    },
};