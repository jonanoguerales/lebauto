import type { ChatStep } from '../chatFlowTypes';

const parseBuyCarQueryToFilters = (query: string, existingFiltersString?: string): string => {
  const lowerQuery = query.toLowerCase();
  const currentParams = new URLSearchParams(existingFiltersString?.startsWith("?") ? existingFiltersString.substring(1) : existingFiltersString || "");
  const filtersFromParams: Record<string, string | string[]> = {};
  currentParams.forEach((value,key) => { filtersFromParams[key] = value; }); 

  const newFilters: Record<string, string> = {}; 
  
  const fuelKeywords: Record<string, string> = { "electrico": "Eléctrico", "eléctrico": "Eléctrico", "diesel": "Diésel", "diésel": "Diésel", "gasolina": "Gasolina" };
  for (const keyword in fuelKeywords) { if (lowerQuery.includes(keyword)) newFilters.fuel = fuelKeywords[keyword]; }

  const bodyTypeKeywords: Record<string, string> = { "suv": "SUV", "berlina": "Berlina", "compacto": "Compacto" };
  for (const keyword in bodyTypeKeywords) { if (lowerQuery.includes(keyword)) newFilters.bodyType = bodyTypeKeywords[keyword]; }
  
  const colorKeywords: Record<string, string> = { "rojo": "Rojo", "negro": "Negro", "blanco": "Blanco", "azul": "Azul", "gris": "Gris / Plata"};
  for (const keyword in colorKeywords) { if (lowerQuery.includes(keyword)) newFilters.color = colorKeywords[keyword]; }

  const priceMatch = lowerQuery.match(/(?:menos de|hasta|presupuesto)\s*(\d+)/i);
  if (priceMatch && priceMatch[1]) newFilters.maxPrice = priceMatch[1];
  
  const knownBrands = ["audi", "bmw", "mercedes", "tesla", "seat", "peugeot", "renault"];
  for (const brand of knownBrands) { if (lowerQuery.includes(brand)) { newFilters.brand = brand.charAt(0).toUpperCase() + brand.slice(1); break; } }
  
  const combinedFilters = { ...filtersFromParams, ...newFilters };

  let queryString = "";
  for (const key in combinedFilters) {
    const value = combinedFilters[key];
    queryString += `${key}=${encodeURIComponent(String(value))}&`;
  }
  return queryString.endsWith('&') ? queryString.slice(0, -1) : queryString;
};

export const buyCarFlowSteps: Record<string, ChatStep> = {
  buyCar_start: {
    id: 'buyCar_start',
    message: '¡Genial que quieras comprar un coche! ¿Tienes algún modelo o tipo en mente, o prefieres que te ayude a encontrar uno?',
    options: [
      { label: 'Tengo una idea', nextStepId: 'buyCar_askPreferences', value: 'buy_have_idea'},
      { label: 'Ayúdame a elegir', nextStepId: 'recommend_start', value: 'buy_need_help_choosing'},
      { label: 'Ver coches eléctricos', nextStepId: 'showElectricCarsCatalog', value: 'buy_see_electric'},
      { label: 'Ver todo el catálogo', nextStepId: 'showAllCarsCatalog', value: 'buy_see_all'},
      { label: 'Volver', nextStepId: 'start', value: 'back_to_main_from_buy'}
    ],
    previousStepId: 'start'
  },
  buyCar_askPreferences: {
    id: 'buyCar_askPreferences',
    message: 'Perfecto. Dime qué características buscas (ej: marca, tipo, presupuesto, color, combustible...).',
    isUserInput: true,
    inputPlaceholder: 'Ej: SUV negro diésel hasta 25000€',
    action: async (input, userData) => {
        const parsedQueryString = parseBuyCarQueryToFilters(input); 
        return { 
            userSearchQuery: input,
            parsedFiltersForCatalog: parsedQueryString
        };
    },
    nextStepIdAfterInput: 'buyCar_showFilteredCatalog',
    previousStepId: 'buyCar_start'
  },
  buyCar_showFilteredCatalog: {
    id: 'buyCar_showFilteredCatalog',
    message: (userData) => 
        `Entendido. Buscando coches con características similares a: "${userData.userSearchQuery || 'tus preferencias'}". Te mostraré lo que encuentre.`,
    navigateTo: (userData) => 
        `/coches-segunda-mano${userData.parsedFiltersForCatalog ? `?${userData.parsedFiltersForCatalog}` : ''}`,
    options: [
        {label: 'Refinar búsqueda', nextStepId: 'buyCar_refineSearch', value: 'refine_search'},
        {label: 'Ayuda para elegir (guiado)', nextStepId: 'recommend_start', value: 'go_to_recommendation_flow'},
        {label: 'Volver a opciones de compra', nextStepId: 'buyCar_start', value: 'back_to_buy_options'}
    ],
    previousStepId: 'buyCar_askPreferences'
  },
  buyCar_refineSearch: {
    id: 'buyCar_refineSearch',
    message: (userData) => `De acuerdo. Búsqueda actual: "${userData.userSearchQuery || 'ninguna'}". ¿Qué quieres cambiar o añadir?`,
    isUserInput: true, inputPlaceholder: 'Ej: añadir "automático"',
    action: async (input, userData) => {
        const newParsedQueryString = parseBuyCarQueryToFilters(input, userData.parsedFiltersForCatalog);
        return { 
            userSearchQuery: `${userData.userSearchQuery || ''}; refinado con: ${input}`,
            parsedFiltersForCatalog: newParsedQueryString 
        };
    },
    nextStepIdAfterInput: 'buyCar_showFilteredCatalog',
    previousStepId: 'buyCar_showFilteredCatalog' 
  },
  askName_buyCar: {
    id: 'askName_buyCar', message: 'Si quieres que un asesor te ayude personalmente, ¿cuál es tu nombre?',
    isUserInput: true, inputType: 'text', inputPlaceholder: 'Nombre completo',
    action: async (input, userData) => ({ name: input, initialOption: userData.initialOption || 'comprar_coche' }),
    nextStepIdAfterInput: 'askEmail_buyCar',
    previousStepId: 'buyCar_start',
  },
  askEmail_buyCar: { 
    id: 'askEmail_buyCar', message: (userData) => `Gracias ${userData.name || ''}. ¿Y tu email?`,
    isUserInput: true, inputType: 'email', inputPlaceholder: 'tu@email.com',
    validation: (input) => (!/^\S+@\S+\.\S+$/.test(input) ? 'Email inválido.' : null),
    action: async (input) => ({ email: input }),
    nextStepIdAfterInput: 'askPhone_buyCar',
    previousStepId: 'askName_buyCar',
  },
  askPhone_buyCar: {
    id: 'askPhone_buyCar', message: (userData) => `Perfecto ${userData.name || ''}. ¿Tu teléfono?`,
    isUserInput: true, inputType: 'tel', inputPlaceholder: '+34...',
    validation: (input) => (!/^\+?[0-9\s-]{7,15}$/.test(input) ? 'Teléfono inválido.' : null),
    action: async (input) => ({ phone: input }),
    nextStepIdAfterInput: 'thankYou_buyCar',
    previousStepId: 'askEmail_buyCar',
  },
  thankYou_buyCar: {
    id: 'thankYou_buyCar', message: (userData) => `¡Gracias ${userData.name || ''}! Un asesor te contactará sobre tu interés en comprar un coche.`,
    options: [ { label: 'Tengo otra duda', nextStepId: 'start' }, { label: 'Finalizar chat', nextStepId: 'endChat' } ],
    endFlow: true, previousStepId: 'askPhone_buyCar',
    action: async (input, userData) => { console.log("Lead Compra Coche (contacto):", userData); return {}; }
  },
};