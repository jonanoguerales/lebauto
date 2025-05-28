import type { ChatStep, UserData } from '../chatFlowTypes';

export const sellCarFlowSteps: Record<string, ChatStep> = {
  sellCar_askName: {
    id: 'sellCar_askName',
    message: '¡Perfecto! Para tasar tu coche, primero dime tu nombre.',
    isUserInput: true,
    inputType: 'text',
    inputPlaceholder: 'Escribe tu nombre...',
    action: async (input) => ({ name: input, initialOption: 'Vender Coche' }),
    nextStepIdAfterInput: 'sellCar_thankYou',
    previousStepId: 'start',
  },
  sellCar_thankYou: {
    id: 'sellCar_thankYou',
    message: (userData) => `Gracias ${userData.name || ''}. ¿Prefieres ir a la tasación online o que te llamemos para gestionarlo?`,
    options: [
      { label: 'Ir a tasación online', nextStepId: 'redirectToTasacion', value: 'go_to_valuation' }, 
      { label: 'Prefiero que me llaméis', nextStepId: 'askPhoneForSell', value: 'request_call_sell' },
      { label: 'Tengo otra duda', nextStepId: 'start' },
    ],
    previousStepId: 'sellCar_askName',
  },
  askPhoneForSell: {
    id: 'askPhoneForSell',
    message: (userData) => `Entendido ${userData.name || ''}. ¿A qué teléfono te llamamos para la tasación?`,
    isUserInput: true, inputType: 'tel', inputPlaceholder: '+34 ...',
    validation: (input) => (!/^\+?[0-9\s-]{7,15}$/.test(input) ? 'Teléfono inválido.' : null),
    action: async (input) => ({ phone: input }),
    nextStepIdAfterInput: 'thankYouLeadGeneral_sell', 
    previousStepId: 'sellCar_thankYou',
  },
  thankYouLeadGeneral_sell: { 
    id: 'thankYouLeadGeneral_sell',
    message: (userData) => `¡Gracias ${userData.name || ''}! Un asesor se pondrá en contacto contigo sobre la venta de tu coche.`,
    options: [ { label: 'Tengo otra duda', nextStepId: 'start' }, { label: 'Finalizar chat', nextStepId: 'endChat' } ],
    endFlow: true, previousStepId: 'askPhoneForSell',
    action: async (input, userData) => { console.log("Lead Venta Coche (contacto):", userData); return {}; }
  },
};