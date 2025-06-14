import {
  submitSupportCallbackLead,
  submitSupportEmailLead,
} from "@/app/actions/actions";
import type { ChatStep, UserData, ChatButtonOption } from "../chatFlowTypes";

const faqData: Array<{ keywords: string[]; answer: string }> = [
  {
    keywords: ["horario", "abierto", "abre", "cierra", "hora"],
    answer:
      "Nuestro horario de atención es de Lunes a Viernes de 9:00 a 20:00 y Sábados de 10:00 a 14:00.",
  },
  {
    keywords: ["financiacion", "financiar", "pagar plazos", "cuotas"],
    answer:
      "Sí, ofrecemos diversas opciones de financiación adaptadas a tus necesidades. Uno de nuestros asesores puede darte más detalles. ¿Te gustaría que te llamemos para hablar sobre ello?",
  },
  {
    keywords: ["garantia", "cubre"],
    answer:
      "Todos nuestros coches de segunda mano incluyen una garantía mínima legal de 12 meses. Puedes consultar con tu asesor las opciones de ampliación de garantía disponibles.",
  },
  {
    keywords: ["tasacion", "valorar coche", "tasar mi coche", "vender"],
    answer:
      "Claro, puedes solicitar una tasación gratuita y sin compromiso de tu vehículo a través de nuestra sección 'Vender mi coche' en la web, o visitándonos.",
  },
  {
    keywords: ["cita", "ver coche", "probar"],
    answer:
      "Te recomendamos solicitar cita previa para asegurar una atención personalizada y que el vehículo esté disponible. Puedes hacerlo por teléfono o a través del formulario de contacto en nuestra web.",
  },
  {
    keywords: ["documentacion necesaria", "papeles", "requisitos"],
    answer:
      "Para comprar un coche, generalmente necesitarás tu DNI/NIE y justificante de domicilio. Para financiar, se te pedirán documentos adicionales. Un asesor te guiará en el proceso.",
  },
  {
    keywords: ["electrico", "carga", "autonomia"],
    answer:
      "Los coches eléctricos tienen muchas ventajas, como menores costes de mantenimiento y cero emisiones. La autonomía varía por modelo. Ofrecemos asesoramiento en puntos de carga. ¿Te interesa algún modelo en particular?",
  },
];

const findFAQAnswer = (question: string): string | null => {
  const lowerQuestion = question.toLowerCase().trim();
  if (!lowerQuestion) return null;
  for (const faq of faqData) {
    if (
      faq.keywords.some((keyword) =>
        lowerQuestion.includes(keyword.toLowerCase())
      )
    ) {
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
    action: async () => ({ formSubmitted: false }), 
    options: [ 
      { label: 'Quiero que me llaméis', nextStepId: 'support_callback_askName', value: 'callback_support' }, 
      { label: 'Tengo una pregunta', nextStepId: 'support_askQuestion', value: 'ask_support_question' }, 
      { label: 'Volver al inicio', nextStepId: 'start', value: 'back_to_start_from_support' }, 
    ], 
    previousStepId: 'start' 
  },
  
  // --- FLUJO "Quiero que me llaméis" ---
  support_callback_askName: { 
    id: 'support_callback_askName', 
    message: 'De acuerdo. Para poder llamarte, ¿me indicas tu nombre?', 
    isUserInput: true, inputType: 'text', inputPlaceholder: 'Escribe tu nombre...', 
    action: async (input) => ({ name: input, initialOption: 'Soporte - Callback' }), 
    nextStepIdAfterInput: 'support_callback_askPhone', 
    previousStepId: 'support_entry' 
  },
  support_callback_askPhone: { 
    id: 'support_callback_askPhone', 
    message: (userData) => `Gracias ${userData.name || ''}. ¿A qué número de teléfono podemos contactarte?`, 
    isUserInput: true, inputType: 'tel', inputPlaceholder: '+34 6XX XXX XXX', 
    validation: (input) => (!/^\+?[0-9\s-]{9,}$/.test(input.replace(/[\s-]/g, '')) ? 'El teléfono debe tener al menos 9 dígitos.' : null), 
    action: async (input) => ({ phone: input }), 
    nextStepIdAfterInput: 'support_callback_askEmail',
    previousStepId: 'support_callback_askName' 
  },
  support_callback_askEmail: {
    id: 'support_callback_askEmail',
    message: 'Y por último, ¿tu email para enviarte una confirmación de la solicitud?',
    isUserInput: true, inputType: 'email', inputPlaceholder: 'tu@email.com',
    validation: (input) => (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input) ? 'Email inválido.' : null),
    action: async (input) => ({ email: input }),
    nextStepIdAfterInput: 'support_callback_askReason',
    previousStepId: 'support_callback_askPhone'
  },
  support_callback_askReason: {
    id: 'support_callback_askReason',
    message: 'Perfecto. Para dar la información completa al asesor, ¿podrías resumir brevemente tu consulta?',
    isUserInput: true, inputType: 'text', inputPlaceholder: 'Ej: Duda sobre la garantía...',
    action: async (input) => ({ userQuestion: input }),
    nextStepIdAfterInput: 'support_callback_finalThankYou',
    previousStepId: 'support_callback_askEmail'
  },
  support_callback_finalThankYou: { 
    id: 'support_callback_finalThankYou', 
    message: (userData) => `¡Entendido ${userData.name || ''}! Hemos registrado tu solicitud. Un miembro de nuestro equipo te llamará al ${userData.phone} sobre tu consulta lo antes posible. También recibirás una confirmación en ${userData.email}.`, 
    endFlow: true, 
    action: async (input, userData) => {
        if (userData.formSubmitted) return {};
        await submitSupportCallbackLead(userData);
        return { formSubmitted: true };
    },
    options: [{ label: 'Hacer otra consulta', nextStepId: 'start' }, { label: 'Finalizar chat', nextStepId: 'endChat' }], 
    previousStepId: 'support_callback_askReason',
  },

  // --- FLUJO: "Tengo una pregunta" ---
  support_askQuestion: { 
    id: 'support_askQuestion', 
    message: 'Claro, escribe tu pregunta. Intentaré responderla.',
    isUserInput: true, inputType: 'text', inputPlaceholder: 'Escribe tu duda aquí...',
    action: async (input) => ({ faqAnswer: findFAQAnswer(input), userQuestion: input, formSubmitted: false }), 
    nextStepIdAfterInput: 'support_showAnswerOrContactOptions', 
    previousStepId: 'support_entry',
  },
  
  support_showAnswerOrContactOptions: { 
    id: 'support_showAnswerOrContactOptions', 
    message: (userData) => (userData.faqAnswer ? `Sobre tu pregunta "${userData.userQuestion || ''}":\n\n${userData.faqAnswer}\n\n¿Te ha sido útil?` : `Lo siento, no tengo una respuesta para "${userData.userQuestion || ''}".\n¿Cómo prefieres que te ayudemos?`), 
    options: (userData): ChatButtonOption[] => (userData.faqAnswer ? 
      [ { label: 'Sí, ¡gracias!', nextStepId: 'support_anotherQuestion_or_end' }, { label: 'No, necesito más ayuda', nextStepId: 'support_offerContactAfterFaq' } ] : 
      [ 
        { label: 'Contactar por Email', nextStepId: 'support_collectEmail_name', value: 'contact_via_email' }, 
        { label: 'Solicitar una llamada', nextStepId: 'support_collectCallback_name_noFaq', value: 'request_call_no_faq' }, 
        { label: 'Volver al inicio', nextStepId: 'start', value: 'back_to_start_no_answer' } 
      ]
    ), 
    previousStepId: 'support_askQuestion' 
  },

  support_offerContactAfterFaq: {
    id: "support_offerContactAfterFaq",
    message:
      "Entendido. ¿Cómo prefieres que te ayudemos con tu consulta original?",
    options: [
      { label: "Contactar por Email", nextStepId: "support_collectEmail_name" },
      {
        label: "Solicitar una llamada",
        nextStepId: "support_collectCallback_name_noFaq",
      },
    ],
    previousStepId: "support_showAnswerOrContactOptions",
  },

  // --- Sub-flujo: Recolectar datos para Email (si no hubo respuesta a FAQ) ---
  support_collectEmail_name: { 
    id: 'support_collectEmail_name', 
    message: 'Claro. Para que un asesor te escriba, ¿cuál es tu nombre y apellidos?', 
    isUserInput: true, inputType: 'text', inputPlaceholder: 'Nombre y Apellidos', 
    action: async (input) => ({ name: input }), 
    nextStepIdAfterInput: 'support_collectEmail_email', 
    previousStepId: 'support_showAnswerOrContactOptions' 
  },
  support_collectEmail_email: { 
    id: 'support_collectEmail_email', 
    message: (userData) => `Gracias ${userData.name || ''}. Ahora, ¿tu email?`, 
    isUserInput: true, inputType: 'email', inputPlaceholder: 'tu@email.com', 
    validation: (input) => (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input) ? 'Email inválido.' : null), 
    action: async (input) => ({ email: input }), 
    nextStepIdAfterInput: 'support_collectEmail_phone', 
    previousStepId: 'support_collectEmail_name' 
  },
  support_collectEmail_phone: { 
    id: 'support_collectEmail_phone', 
    message: `Perfecto. Si quieres, déjanos también un teléfono (Opcional).`, 
    isUserInput: true, inputType: 'tel', inputPlaceholder: 'Pulsa enviar para omitir...', 
    validation: (input) => {
        if (input.trim() === "") return null;
        if (!/^\+?[\d\s-]{9,}$/.test(input.replace(/[\s-]/g, ''))) {
            return 'El teléfono debe tener al menos 9 dígitos.';
        }
        return null;
    },
    action: async (input) => (input.trim() ? { phone: input } : {}), 
    nextStepIdAfterInput: 'support_confirmEmailQuestion',
    previousStepId: 'support_collectEmail_email' 
  },
  
  support_collectCallback_phone_noFaq: { 
    id: 'support_collectCallback_phone_noFaq', 
    message: (userData) => `Gracias ${userData.name || ''}. ¿A qué teléfono te llamamos sobre tu consulta?`, 
    isUserInput: true, inputType: 'tel', inputPlaceholder: '+34 ...', 
    validation: (input) => {
      if (!/^\+?[\d\s-]{9,}$/.test(input.replace(/[\s-]/g, ''))) {
          return 'El teléfono debe tener al menos 9 dígitos.';
      }
      return null;
    },
    action: async (input) => ({ phone: input }), 
    nextStepIdAfterInput: 'support_confirmCallbackQuestion', 
    previousStepId: 'support_collectCallback_name_noFaq' 
  },
  support_confirmEmailQuestion: {
    id: 'support_confirmEmailQuestion',
    message: (userData) => `Vamos a enviar la siguiente consulta a nuestro equipo:\n\n_"${userData.userQuestion || 'Tu consulta anterior'}"_\n\n¿Es correcto o quieres modificarla?`,
    options: [
        { label: "Es correcto, enviar", nextStepId: 'support_emailLeadThankYou', value: 'email_question_confirm' },
        { label: "Quiero modificarla", nextStepId: 'support_rewriteQuestionForEmail', value: 'email_question_rewrite' }
    ],
    previousStepId: 'support_collectEmail_phone'
  },
  support_rewriteQuestionForEmail: {
    id: 'support_rewriteQuestionForEmail',
    message: "De acuerdo, escribe de nuevo tu consulta para que la enviemos.",
    isUserInput: true, inputType: 'text', inputPlaceholder: 'Escribe aquí tu consulta final...',
    action: async (input) => ({ userQuestion: input }),
    nextStepIdAfterInput: 'support_emailLeadThankYou',
    previousStepId: 'support_confirmEmailQuestion'
  },
  support_emailLeadThankYou: { 
    id: 'support_emailLeadThankYou', 
    message: (userData) => `¡Gracias ${userData.name || ''}! Hemos recibido tu consulta. Te responderemos a ${userData.email} lo antes posible.`, 
    endFlow: true, 
    action: async (input, userData) => { 
        if(userData.formSubmitted) { return {}; }
        await submitSupportEmailLead(userData);
        return { formSubmitted: true };
    },
    options: [{ label: 'Otra consulta', nextStepId: 'start' }, { label: 'Finalizar', nextStepId: 'endChat' }],
    previousStepId: 'support_confirmEmailQuestion',
  },
  
  support_collectCallback_name_noFaq: { 
    id: 'support_collectCallback_name_noFaq', 
    message: 'Entendido, te llamaremos. Para ello, ¿tu nombre y apellidos?', 
    isUserInput: true, inputType: 'text', inputPlaceholder: 'Nombre y Apellidos', 
    action: async (input) => ({ name: input }), 
    nextStepIdAfterInput: 'support_collectCallback_phone_noFaq', 
    previousStepId: 'support_showAnswerOrContactOptions' 
  },
  support_confirmCallbackQuestion: {
    id: 'support_confirmCallbackQuestion',
    message: (userData) => `El motivo de la llamada será sobre esta consulta:\n\n_"${userData.userQuestion || 'Tu duda anterior'}"_\n\n¿Es correcto o quieres especificar otro motivo?`,
    options: [
        { label: "Sí, es ese el motivo", nextStepId: 'support_callbackThankYou_noFaq', value: 'callback_question_confirm' },
        { label: "Quiero especificar otro", nextStepId: 'support_rewriteQuestionForCallback', value: 'callback_question_rewrite' }
    ],
    previousStepId: 'support_collectCallback_phone_noFaq'
  },
  support_rewriteQuestionForCallback: {
    id: 'support_rewriteQuestionForCallback',
    message: "De acuerdo. Escribe el motivo por el que quieres que te llamemos.",
    isUserInput: true, inputType: 'text', inputPlaceholder: 'Ej: Información sobre renting...',
    action: async (input) => ({ userQuestion: input }),
    nextStepIdAfterInput: 'support_callbackThankYou_noFaq',
    previousStepId: 'support_confirmCallbackQuestion'
  },
  support_callbackThankYou_noFaq: { 
    id: 'support_callbackThankYou_noFaq', 
    message: (userData) => `¡Entendido ${userData.name || ''}! Te llamaremos al ${userData.phone} para hablar sobre tu consulta.`, 
    endFlow: true, 
    action: async (input, userData) => { 
        if(userData.formSubmitted) { return {}; }
        await submitSupportCallbackLead(userData);
        return { formSubmitted: true };
    },
    options: [{ label: 'Otra consulta', nextStepId: 'start' }, { label: 'Finalizar', nextStepId: 'endChat' }], 
    previousStepId: 'support_confirmCallbackQuestion',
  },
};