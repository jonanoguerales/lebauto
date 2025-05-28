import type { ChatStep, UserData, ChatButtonOption } from '../chatFlowTypes';

const faqData: Array<{ keywords: string[], answer: string }> = [
  { keywords: ["horario", "abierto", "abre", "cierra", "hora"], answer: "Nuestro horario de atención es de Lunes a Viernes de 9:00 a 20:00 y Sábados de 10:00 a 14:00." },
  { keywords: ["financiacion", "financiar", "pagar plazos", "cuotas"], answer: "Sí, ofrecemos diversas opciones de financiación adaptadas a tus necesidades. Uno de nuestros asesores puede darte más detalles. ¿Te gustaría que te llamemos para hablar sobre ello?" },
  { keywords: ["garantia", "cubre"], answer: "Todos nuestros coches de segunda mano incluyen una garantía mínima legal de 12 meses. Puedes consultar con tu asesor las opciones de ampliación de garantía disponibles." },
  { keywords: ["tasacion", "valorar coche", "tasar mi coche", "vender"], answer: "Claro, puedes solicitar una tasación gratuita y sin compromiso de tu vehículo a través de nuestra sección 'Vender mi coche' en la web, o visitándonos." },
  { keywords: ["cita", "ver coche", "probar"], answer: "Te recomendamos solicitar cita previa para asegurar una atención personalizada y que el vehículo esté disponible. Puedes hacerlo por teléfono o a través del formulario de contacto en nuestra web." },
  { keywords: ["documentacion necesaria", "papeles", "requisitos"], answer: "Para comprar un coche, generalmente necesitarás tu DNI/NIE y justificante de domicilio. Para financiar, se te pedirán documentos adicionales. Un asesor te guiará en el proceso." },
  { keywords: ["electrico", "carga", "autonomia"], answer: "Los coches eléctricos tienen muchas ventajas, como menores costes de mantenimiento y cero emisiones. La autonomía varía por modelo. Ofrecemos asesoramiento en puntos de carga. ¿Te interesa algún modelo en particular?" }
];

const findFAQAnswer = (question: string): string | null => {
  const lowerQuestion = question.toLowerCase().trim();
  if (!lowerQuestion) return null;
  for (const faq of faqData) {
    if (faq.keywords.some(keyword => lowerQuestion.includes(keyword.toLowerCase()))) {
      return faq.answer;
    }
  }
  return null;
};

export { faqData, findFAQAnswer }; 

export const supportFlowSteps: Record<string, ChatStep> = {
  support_entry: { 
    id: 'support_entry', 
    message: 'Entendido, necesitas soporte. ¿Cómo prefieres que te ayudemos?', 
    options: [ 
      { label: 'Quiero que me llaméis', nextStepId: 'support_askCallbackName', value: 'callback_support' }, 
      { label: 'Tengo una pregunta', nextStepId: 'support_askQuestion', value: 'ask_support_question' }, 
      { label: 'Volver al inicio', nextStepId: 'start', value: 'back_to_start_from_support' }, 
    ], 
    previousStepId: 'start' 
  },
  support_askCallbackName: { 
    id: 'support_askCallbackName', 
    message: 'De acuerdo. Para poder llamarte, ¿me indicas tu nombre?', 
    isUserInput: true, inputType: 'text', inputPlaceholder: 'Escribe tu nombre...', 
    action: async (input) => ({ name: input }), 
    nextStepIdAfterInput: 'support_askCallbackPhone', 
    previousStepId: 'support_entry' 
  },
  support_askCallbackPhone: { 
    id: 'support_askCallbackPhone', 
    message: (userData) => `Gracias ${userData.name || ''}. ¿A qué número de teléfono podemos contactarte para ayudarte con tu consulta de soporte?`, 
    isUserInput: true, inputType: 'tel', inputPlaceholder: '+34 6XX XXX XXX', 
    validation: (input) => (!/^\+?[0-9\s-]{7,15}$/.test(input) ? 'Por favor, introduce un teléfono válido.' : null), 
    action: async (input) => ({ phone: input }), 
    nextStepIdAfterInput: 'support_callbackThankYou', 
    previousStepId: 'support_askCallbackName' 
  },
  support_callbackThankYou: { 
    id: 'support_callbackThankYou', 
    message: (userData) => `¡Entendido ${userData.name || ''}! Hemos registrado tu solicitud con el teléfono ${userData.phone || ''}. Un miembro de nuestro equipo de soporte te llamará lo antes posible.`, 
    options: [ 
      { label: 'Hacer otra consulta', nextStepId: 'start', value: 'other_doubt_after_support_cb' }, 
      { label: 'Finalizar chat', nextStepId: 'endChat', value: 'end_after_support_cb' }, 
    ], 
    endFlow: true, 
    previousStepId: 'support_askCallbackPhone', 
    action: async (input, userData) => { console.log("LEAD SOPORTE (Callback):", { ...userData, type: "Soporte - Llamada solicitada" }); return {}; } 
  },
  support_askQuestion: { 
    id: 'support_askQuestion', 
    message: 'Claro, escribe tu pregunta. Intentaré responderla.',
    isUserInput: true, inputType: 'text', inputPlaceholder: 'Escribe tu duda aquí...',
    action: async (input) => ({ faqAnswer: findFAQAnswer(input), userQuestion: input }), 
    nextStepIdAfterInput: 'support_showAnswerOrContactOptions', 
    previousStepId: 'support_entry',
  },
  support_showAnswerOrContactOptions: { 
    id: 'support_showAnswerOrContactOptions', 
    message: (userData: UserData) => (userData.faqAnswer ? `Sobre tu pregunta "${userData.userQuestion || ''}":\n\n${userData.faqAnswer}\n\n¿Esta información te ha sido útil?` : `Lo siento, no tengo información para tu pregunta: "${userData.userQuestion || ''}".\n¿Cómo prefieres que te ayudemos con esto?`), 
    options: (userData: UserData): ChatButtonOption[] => (userData.faqAnswer ? 
      [ { label: 'Sí, ¡gracias!', nextStepId: 'support_anotherQuestion_or_end', value: 'faq_util' }, { label: 'No me sirvió', nextStepId: 'support_offerContactNoAnswer', value: 'faq_not_useful_contact' }, { label: 'Otra pregunta', nextStepId: 'support_askQuestion', value: 'ask_another_faq' }, { label: 'Volver', nextStepId: 'start', value: 'back_to_start_after_faq' }, ] : 
      [ { label: 'Contactar por Email', nextStepId: 'support_collectEmail_name', value: 'contact_via_email' }, { label: 'Solicitar una llamada', nextStepId: 'support_collectCallback_name_noFaq', value: 'request_call_no_faq' }, { label: 'Otra pregunta', nextStepId: 'support_askQuestion', value: 'try_another_faq_no_answer' }, { label: 'Volver', nextStepId: 'start', value: 'back_to_start_no_answer' }, ]
    ), 
    previousStepId: 'support_askQuestion' 
  },
  support_offerContactNoAnswer: { 
    id: 'support_offerContactNoAnswer', 
    message: 'Entendido. ¿Cómo prefieres que te ayudemos con tu consulta original?', 
    options: [ 
      { label: 'Contactar por Email', nextStepId: 'support_collectEmail_name', value: 'contact_via_email_after_failed_faq' }, 
      { label: 'Solicitar una llamada', nextStepId: 'support_collectCallback_name_noFaq', value: 'request_call_after_failed_faq' }, 
      { label: 'Volver al inicio', nextStepId: 'start', value: 'back_to_start_after_failed_faq' }, 
    ], 
    previousStepId: 'support_showAnswerOrContactOptions' 
  },
  support_collectEmail_name: { 
    id: 'support_collectEmail_name', 
    message: 'Para contactarte por email, ¿tu nombre y apellidos?', 
    isUserInput: true, inputType: 'text', inputPlaceholder: 'Nombre y Apellidos', 
    action: async (input) => ({ name: input }), 
    nextStepIdAfterInput: 'support_collectEmail_email', 
    previousStepId: 'support_showAnswerOrContactOptions' 
  },
  support_collectEmail_email: { 
    id: 'support_collectEmail_email', 
    message: (userData) => `Gracias ${userData.name || ''}. Ahora, ¿tu email?`, 
    isUserInput: true, inputType: 'email', inputPlaceholder: 'tu@email.com', 
    validation: (input) => (!/^\S+@\S+\.\S+$/.test(input) ? 'Email inválido.' : null), 
    action: async (input) => ({ email: input }), 
    nextStepIdAfterInput: 'support_collectEmail_phone', 
    previousStepId: 'support_collectEmail_name' 
  },
  support_collectEmail_phone: { 
    id: 'support_collectEmail_phone', 
    message: (userData) => `Perfecto. Si quieres, déjanos un teléfono (Opcional).`, 
    isUserInput: true, inputType: 'tel', inputPlaceholder: '+34 ... (Opcional)', 
    validation: (input) => (input.trim() && !/^\+?[0-9\s-]{7,15}$/.test(input) ? 'Teléfono inválido.' : null), 
    action: async (input) => (input.trim() ? { phone: input } : {}), 
    nextStepIdAfterInput: 'support_emailLeadThankYou', 
    previousStepId: 'support_collectEmail_email' 
  },
  support_emailLeadThankYou: { 
    id: 'support_emailLeadThankYou', 
    message: (userData) => `¡Gracias ${userData.name || ''}! Te responderemos a ${userData.email} sobre "${userData.userQuestion || 'tu consulta'}" pronto.`, 
    options: [{ label: 'Otra consulta', nextStepId: 'start' }, { label: 'Finalizar', nextStepId: 'endChat' }], 
    endFlow: true, 
    previousStepId: 'support_collectEmail_phone', 
    action: async (input, userData) => { console.log("LEAD SOPORTE (Email):", userData); return {}; } 
  },
  support_collectCallback_name_noFaq: { 
    id: 'support_collectCallback_name_noFaq', 
    message: 'Entendido, te llamaremos. ¿Tu nombre y apellidos?', 
    isUserInput: true, inputType: 'text', inputPlaceholder: 'Nombre y Apellidos', 
    action: async (input) => ({ name: input }), 
    nextStepIdAfterInput: 'support_collectCallback_phone_noFaq', 
    previousStepId: 'support_showAnswerOrContactOptions' 
  },
  support_collectCallback_phone_noFaq: { 
    id: 'support_collectCallback_phone_noFaq', 
    message: (userData) => `Gracias ${userData.name || ''}. ¿A qué teléfono te llamamos sobre "${userData.userQuestion || 'tu consulta'}"?`, 
    isUserInput: true, inputType: 'tel', inputPlaceholder: '+34 ...', 
    validation: (input) => (!/^\+?[0-9\s-]{7,15}$/.test(input) ? 'Teléfono inválido.' : null), 
    action: async (input) => ({ phone: input }), 
    nextStepIdAfterInput: 'support_callbackThankYou_noFaq', 
    previousStepId: 'support_collectCallback_name_noFaq' 
  },
  support_callbackThankYou_noFaq: { 
    id: 'support_callbackThankYou_noFaq', 
    message: (userData) => `¡Entendido ${userData.name || ''}! Te llamaremos al ${userData.phone || ''}.`, 
    options: [{ label: 'Otra consulta', nextStepId: 'start' }, { label: 'Finalizar', nextStepId: 'endChat' }], 
    endFlow: true, 
    previousStepId: 'support_collectCallback_phone_noFaq', 
    action: async (input, userData) => { console.log("LEAD SOPORTE (Callback sin FAQ):", userData); return {}; } 
  },
  support_anotherQuestion_or_end: { 
    id: 'support_anotherQuestion_or_end', 
    message: '¡Estupendo! ¿Tienes alguna otra duda de soporte o puedo ayudarte con algo más general?', 
    options: [ 
      { label: 'Otra pregunta de soporte', nextStepId: 'support_askQuestion', value: 'another_support_q' }, 
      { label: 'Necesito ayuda con otra cosa', nextStepId: 'start', value: 'other_general_help' }, 
      { label: 'No, gracias (Finalizar)', nextStepId: 'endChat', value: 'end_after_support_helpful' }, 
    ], 
    previousStepId: 'support_showAnswerOrContactOptions' 
  },
};