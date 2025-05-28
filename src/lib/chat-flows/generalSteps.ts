import type { ChatStep, ChatButtonOption } from '../chatFlowTypes';

export const initialChatOptionsBase: ChatButtonOption[] = [
  { label: 'Comprar un coche', nextStepId: 'buyCar_start', value: 'comprar_coche' },
  { label: 'Vender mi coche', nextStepId: 'sellCar_askName', value: 'vender_coche' },
  { label: 'Renting', nextStepId: 'renting_askName', value: 'renting' },
  { label: 'Soporte al cliente', nextStepId: 'support_entry', value: 'soporte' },
];

export const generalFlowSteps: Record<string, ChatStep> = {
  start: {
    id: 'start',
    message: '¡Hola! Soy Lebi, tu asistente virtual de Lebauto. ¿Cómo te podemos ayudar?',
    options: initialChatOptionsBase,
  },
  endChat: {
    id: 'endChat',
    message: '¡Gracias por chatear con Lebi! Que tengas un buen día.',
    options: [ { label: 'Iniciar nueva consulta', nextStepId: 'start', value: 'restart_chat' } ],
  },
  redirectToTasacion: {
    id: 'redirectToTasacion', 
    message: 'Un momento, te estoy redirigiendo a nuestra página de tasación de vehículos...', 
    redirectPath: '/gestion-de-venta', 
    openInNewTab: true,
    options: [ 
        { label: 'Tengo otra duda', nextStepId: 'start', value: 'other_doubt_after_redirect_tasacion' },
        { label: 'Finalizar chat', nextStepId: 'endChat', value: 'end_after_redirect_tasacion' },
    ],
    previousStepId: 'sellCar_thankYou',
    action: async () => { console.log("Redir. tasación solicitada"); return {}; }
  },
  redirectToRentingPage: {
    id: 'redirectToRentingPage', 
    message: 'Perfecto, te llevaré a nuestras ofertas de renting...', 
    redirectPath: '/renting', 
    openInNewTab: true,      
    options: [ 
        { label: 'Tengo otra duda', nextStepId: 'start', value: 'other_doubt_after_redirect_renting' },
        { label: 'Finalizar chat', nextStepId: 'endChat', value: 'end_after_redirect_renting' },
    ],
    previousStepId: 'renting_thankYou', 
    action: async () => { console.log("Redir. renting solicitada"); return {}; }
  },
  showElectricCarsCatalog: {
    id: 'showElectricCarsCatalog', 
    message: '¡Claro! Te mostraré nuestros coches eléctricos.', 
    navigateTo: '/coches-segunda-mano?fuel=Eléctrico',
    options: [ 
        {label: '¿Qué características tienen?', nextStepId: 'askAboutElectricFeatures'}, 
        {label: 'Volver', nextStepId: 'buyCar_start'} 
    ],
    previousStepId: 'buyCar_start' 
  },
  showAllCarsCatalog: { 
    id: 'showAllCarsCatalog', 
    message: 'Perfecto, aquí tienes nuestro catálogo completo.', 
    navigateTo: '/coches-segunda-mano',
    options: [ 
        {label: '¿Buscas algo específico?', nextStepId: 'buyCar_askPreferences'},
        {label: 'Volver', nextStepId: 'buyCar_start'} 
    ],
    previousStepId: 'buyCar_start'
  },
   error_unknown_prev_for_askname: { 
    id: 'error_unknown_prev_for_askname',
    message: "Error: No se pudo determinar el paso anterior. Volviendo al inicio.",
    options: [{label: "Ok", nextStepId: "start"}]
  }
};