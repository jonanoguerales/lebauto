import type { ChatStep } from '../chatFlowTypes';
import { submitSellCarChatLead, submitPhoneValuationLead } from '@/app/actions/actions';

export const sellCarFlowSteps: Record<string, ChatStep> = {
  sellCar_askName: {
    id: 'sellCar_askName',
    message: '¡Perfecto! Para tasar tu coche, primero dime tu nombre.',
    isUserInput: true,
    inputType: 'text',
    inputPlaceholder: 'Escribe tu nombre...',
    action: async (input) => ({ 
      name: input, 
      initialOption: 'Vender Coche',
      formSubmitted: false 
    }),
    nextStepIdAfterInput: 'sellCar_options',
    previousStepId: 'start',
  },
  sellCar_options: {
    id: "sellCar_options",
    message: (userData) =>
      `Gracias ${userData.name || ""}. ¿Cómo quieres proceder?`,
    options: [
      {
        label: "Iniciar tasación en el chat",
        nextStepId: "sellCar_askBrand",
        value: "start_chat_valuation",
      },
      {
        label: "Prefiero que me llaméis",
        nextStepId: "sellCar_callback_askBrand",
        value: "request_valuation_callback",
      },
      {
        label: "Tengo otra duda",
        nextStepId: "start",
        value: "other_doubt_sell_car",
      },
    ],
    previousStepId: "sellCar_askName",
  },

  // --- Sub-flujo: Tasación en el chat ---
  sellCar_askBrand: {
    id: "sellCar_askBrand",
    message: "Empecemos. ¿Cuál es la marca de tu coche?",
    isUserInput: true,
    inputType: "text",
    inputPlaceholder: "Ej: Audi, BMW...",
    action: async (input) => ({ brand: input }),
    nextStepIdAfterInput: "sellCar_askModel",
    previousStepId: "sellCar_options",
  },
  sellCar_askModel: {
    id: "sellCar_askModel",
    message: (userData) => `Marca: ${userData.brand}. Ahora, dime el modelo.`,
    isUserInput: true,
    inputType: "text",
    inputPlaceholder: "Ej: A4, Serie 3...",
    action: async (input) => ({ model: input }),
    nextStepIdAfterInput: "sellCar_askYear",
    previousStepId: "sellCar_askBrand",
  },
  sellCar_askYear: {
    id: "sellCar_askYear",
    message: (userData) => `Modelo: ${userData.model}. ¿De qué año es?`,
    isUserInput: true,
    inputType: "number",
    inputPlaceholder: "Ej: 2020",
    validation: (input) => {
      const year = Number(input);
      if (isNaN(year) || year < 1980 || year > new Date().getFullYear() + 1) {
        return "Por favor, introduce un año válido.";
      }
      return null;
    },
    action: async (input) => ({ year: input }),
    nextStepIdAfterInput: "sellCar_askKilometers",
    previousStepId: "sellCar_askModel",
  },
  sellCar_askKilometers: {
    id: "sellCar_askKilometers",
    message: (userData) => `Año: ${userData.year}. ¿Cuántos kilómetros tiene?`,
    isUserInput: true,
    inputType: "number",
    inputPlaceholder: "Ej: 80000",
    action: async (input) => ({ kilometers: input }),
    nextStepIdAfterInput: "sellCar_askFuel",
    previousStepId: "sellCar_askYear",
  },
  sellCar_askFuel: {
    id: "sellCar_askFuel",
    message: (userData) =>
      `Kilómetros: ${Number(userData.kilometers || 0).toLocaleString(
        "es-ES"
      )} km. ¿Qué tipo de combustible usa?`,
    options: ["Gasolina", "Diésel", "Híbrido", "Eléctrico", "GLP", "Otro"].map(
      (fuel) => ({
        label: fuel,
        nextStepId: "sellCar_askComments",
        value: fuel,
      })
    ),
    action: async (value) => ({ fuel: value }),
    previousStepId: "sellCar_askKilometers",
  },
  sellCar_askComments: {
    id: "sellCar_askComments",
    message: (userData) =>
      `Combustible: ${userData.fuel}. Por último, ¿quieres añadir algún comentario sobre el estado o equipamiento? (Opcional)`,
    isUserInput: true,
    inputType: "text",
    inputPlaceholder: "Escribe aquí o pulsa enviar para omitir...",
    action: async (input) => ({ comments: input }),
    nextStepIdAfterInput: "sellCar_askContactInfo",
    previousStepId: "sellCar_askFuel",
  },
 sellCar_askContactInfo: {
    id: 'sellCar_askContactInfo',
    message: '¡Genial! Ya casi hemos terminado. Necesito tu email y teléfono para enviarte la tasación.',
    isUserInput: true,
    inputType: 'email',
    inputPlaceholder: 'tu@email.com',
    validation: (input) => {
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input)) {
        return 'Por favor, introduce un formato de email válido (ej: tu@email.com).';
      }
      return null;
    },
    action: async (input) => ({ email: input }),
    nextStepIdAfterInput: 'sellCar_askPhoneContact',
    previousStepId: 'sellCar_askComments',
  },
  sellCar_askPhoneContact: {
    id: 'sellCar_askPhoneContact',
    message: `Email guardado. Ahora, tu teléfono de contacto.`,
    isUserInput: true,
    inputType: 'tel',
    inputPlaceholder: '+34 6XX XXX XXX',
    validation: (input) => {
      if (!/^\+?[\d\s-]{9,}$/.test(input.replace(/[\s-]/g, ''))) {
          return 'El teléfono debe tener al menos 9 dígitos.';
      }
      return null;
    },
    action: async (input) => ({ phone: input }),
    nextStepIdAfterInput: 'sellCar_confirmAndSend',
    previousStepId: 'sellCar_askContactInfo',
  },

  sellCar_confirmAndSend: {
    id: 'sellCar_confirmAndSend',
    message: (userData) => `¡Perfecto! Por favor, revisa que todos los datos sean correctos antes de enviar:\n
- **Coche:** ${userData.brand} ${userData.model} (${userData.year})
- **Km:** ${Number(userData.kilometers || 0).toLocaleString('es-ES')}
- **Combustible:** ${userData.fuel}
- **Contacto:** ${userData.email} / ${userData.phone}
- **Comentarios:** ${userData.comments || 'No'}\n
Si todo está bien, pulsa confirmar. Si necesitas corregir algo, usa el botón "Atrás".`,
    options: [
        { label: '✅ Confirmar y Enviar', nextStepId: 'sellCar_finalThankYou', value: 'confirm_valuation' },
    ],
    previousStepId: 'sellCar_askPhoneContact',
  },

  sellCar_finalThankYou: {
      id: 'sellCar_finalThankYou',
      message: '¡Gracias! Hemos recibido tu solicitud de tasación. Nuestro equipo se pondrá en contacto contigo muy pronto.',
      endFlow: true,
      action: async (input, userData) => {
        if (userData.formSubmitted) {
            console.log("El formulario ya fue enviado, evitando envío duplicado.");
            return {}; 
        }
        await submitSellCarChatLead(userData);
        return { formSubmitted: true }; 
      },
      options: [
          { label: 'Hacer otra consulta', nextStepId: 'start', value: 'new_query_after_valuation' }
      ],
      previousStepId: 'sellCar_confirmAndSend'
  },

  // --- Sub-flujo: "Prefiero que me llaméis" para tasación ---
  sellCar_callback_askBrand: {
    id: "sellCar_callback_askBrand",
    message:
      "Entendido. Para adelantar trabajo a nuestro tasador, ¿cuál es la marca de tu coche?",
    isUserInput: true,
    inputType: "text",
    inputPlaceholder: "Ej: Audi, BMW...",
    action: async (input) => ({ brand: input }),
    nextStepIdAfterInput: "sellCar_callback_askModel",
    previousStepId: "sellCar_options",
  },
  sellCar_callback_askModel: {
    id: "sellCar_callback_askModel",
    message: (userData) => `Marca: ${userData.brand}. Y ¿el modelo?`,
    isUserInput: true,
    inputType: "text",
    inputPlaceholder: "Ej: A4, Serie 3...",
    action: async (input) => ({ model: input }),
    nextStepIdAfterInput: "sellCar_callback_askPhone",
    previousStepId: "sellCar_callback_askBrand",
  },
  sellCar_callback_askPhone: {
    id: 'sellCar_callback_askPhone',
    message: (userData) => `¡Genial! Para que un asesor te llame y te de una tasación para tu ${userData.brand} ${userData.model}, ¿cuál es tu número de teléfono?`,
    isUserInput: true,
    inputType: 'tel',
    inputPlaceholder: '+34 6XX XXX XXX',
    validation: (input) => (!/^\+?[0-9\s-]{7,15}$/.test(input) ? 'Por favor, introduce un teléfono válido.' : null),
    action: async (input) => ({ phone: input }),
    nextStepIdAfterInput: 'sellCar_callback_confirmPhone', 
    previousStepId: 'sellCar_callback_askModel',
  },

  sellCar_callback_confirmPhone: {
    id: 'sellCar_callback_confirmPhone',
    message: (userData) => `Has introducido el número: ${userData.phone}. ¿Es correcto?`,
    options: [
      { label: 'Sí, es correcto', nextStepId: 'sellCar_callback_finalThankYou', value: 'phone_confirm_yes' },
      { label: 'No, quiero cambiarlo', nextStepId: 'sellCar_callback_askPhone', value: 'phone_confirm_no' },
    ],
    previousStepId: 'sellCar_callback_askPhone',
  },

  sellCar_callback_finalThankYou: {
      id: 'sellCar_callback_finalThankYou',
      message: (userData) => `¡Perfecto, ${userData.name || ''}! Hemos avisado a nuestro equipo...`,
      endFlow: true, 
      action: async (input, userData) => {
          if (userData.formSubmitted) {
            console.log("La solicitud de llamada ya fue enviada, evitando duplicados.");
            return {};
          }
          await submitPhoneValuationLead(userData);
          return { formSubmitted: true }; 
      },
      options: [
          { label: 'Hacer otra consulta', nextStepId: 'start' }
      ],
      previousStepId: 'sellCar_callback_askPhone'
  }
};
