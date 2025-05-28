import type { ChatStep, UserData } from '../chatFlowTypes';

export const recommendationFlowSteps: Record<string, ChatStep> = {
    recommend_start: {
        id: 'recommend_start', 
        message: '¡Claro! Para recomendarte un coche, dime ¿qué tipo de coche buscas?',
        options: [ 
            {label: 'SUV', nextStepId: 'recommend_askBudget', value: 'suv_type_reco'},
            {label: 'Berlina', nextStepId: 'recommend_askBudget', value: 'berlina_type_reco'},
            {label: 'Compacto', nextStepId: 'recommend_askBudget', value: 'compacto_type_reco'},
            {label: 'Eléctrico (cualquier tipo)', nextStepId: 'recommend_askBudget_electric', value: 'electric_any_type_reco'},
            {label: 'No estoy seguro', nextStepId: 'recommend_askUsage', value: 'unsure_type_reco'},
            {label: 'Volver', nextStepId: 'buyCar_start', value: 'back_to_buy_from_reco_start'}
        ],
        action: async (input) => { 
            if(input === 'suv_type_reco') return {preferredBodyType: 'SUV'};
            if(input === 'berlina_type_reco') return {preferredBodyType: 'Berlina'};
            if(input === 'compacto_type_reco') return {preferredBodyType: 'Compacto'};
            if(input === 'electric_any_type_reco') return {preferredFuel: 'Eléctrico'};
            return {};
        },
        previousStepId: 'buyCar_start',
    },
    recommend_askBudget: {
        id: 'recommend_askBudget', 
        message: (ud: UserData) => `Entendido${ud.preferredBodyType ? `, buscas un ${ud.preferredBodyType}` : ''}${ud.preferredFuel ? `, y que sea ${ud.preferredFuel}` : ''}. ¿Cuál es tu presupuesto aproximado?`,
        isUserInput: true, inputType: 'text', inputPlaceholder: 'Ej: 20000',
        action: async (input) => {
            const budget = parseInt(input.replace(/\D/g, ''), 10); 
            return {budgetMax: isNaN(budget) ? undefined : budget};
        },
        nextStepIdAfterInput: 'recommend_generateLink', 
        previousStepId: 'recommend_start'
    },
    recommend_askBudget_electric: {
        id: 'recommend_askBudget_electric', 
        message: "Perfecto, un eléctrico. ¿Cuál es tu presupuesto aproximado?",
        isUserInput: true, inputType: 'text', inputPlaceholder: 'Ej: hasta 30000€',
        action: async (input) => {
            const budget = parseInt(input.replace(/\D/g, ''), 10);
            return { budgetMax: isNaN(budget) ? undefined : budget, preferredFuel: 'Eléctrico' };
        },
        nextStepIdAfterInput: 'recommend_generateLink',
        previousStepId: 'recommend_start'
    },
    recommend_askUsage: { 
        id: 'recommend_askUsage', 
        message: "No hay problema. Cuéntame, ¿para qué usarás el coche principalmente? (ej. ciudad, viajes largos, familia...)",
        isUserInput: true, inputPlaceholder: 'Principalmente para...',
        action: async (input, userData) => ({ ...userData, userSearchQuery: (userData.userSearchQuery || "") + ` Uso: ${input}` }), 
        nextStepIdAfterInput: 'recommend_askBudget', 
        previousStepId: 'recommend_start'
    },
    recommend_generateLink: {
        id: 'recommend_generateLink', 
        message: (ud: UserData) => {
            let filters = "";
            if(ud.preferredBodyType) filters += `bodyType=${ud.preferredBodyType}&`;
            if(ud.preferredFuel) filters += `fuel=${ud.preferredFuel}&`;
            if(ud.budgetMax) filters += `maxPrice=${ud.budgetMax}&`;
            filters = filters.endsWith('&') ? filters.slice(0, -1) : filters;
            (ud as UserData).parsedFiltersForCatalog = filters; // Actualizar para navigateTo
            return `De acuerdo. Basado en tus preferencias, te mostraré algunos coches que podrían interesarte.`;
        },
        navigateTo: (ud: UserData) => `/coches-segunda-mano${ud.parsedFiltersForCatalog ? `?${ud.parsedFiltersForCatalog}` : ''}`,
        options: [
            {label: 'Nueva recomendación', nextStepId: 'recommend_start', value: 'reco_search_again'},
            {label: 'Menú principal', nextStepId: 'start', value: 'reco_main_menu'}
        ],
        previousStepId: (ud: UserData) => ud.preferredFuel === 'Eléctrico' && !ud.preferredBodyType ? 'recommend_askBudget_electric' : 'recommend_askBudget',
    },
    askAboutElectricFeatures: {
        id: 'askAboutElectricFeatures', 
        message: 'Nuestros eléctricos tienen gran autonomía y carga rápida. ¿Algún modelo del catálogo te interesa?',
        isUserInput: true, inputPlaceholder: 'Ej: Tesla Model 3...',
        action: async (input) => ({ userQuestion: input }),
        nextStepIdAfterInput: 'provideSpecificModelInfo', 
        previousStepId: 'showElectricCarsCatalog'
    },
    provideSpecificModelInfo: {
        id: 'provideSpecificModelInfo', 
        message: (userData) => `Entendido. Buscando información sobre "${userData.userQuestion || 'ese modelo'}". (Actualmente, esta es una simulación. Aquí iría la lógica para buscar en la BBDD o FAQs avanzadas sobre ${userData.userQuestion})`,
        options: [ {label: 'Gracias', nextStepId: 'start'}, {label: 'Buscar otro', nextStepId: 'askAboutElectricFeatures'} ],
        previousStepId: 'askAboutElectricFeatures'
    },
};