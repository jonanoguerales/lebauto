import type { ChatStep, UserData, ChatButtonOption } from './chatFlowTypes';
import { generalFlowSteps, initialChatOptionsBase } from './chat-flows/generalSteps';
import { buyCarFlowSteps } from './chat-flows/buyCarFlow';
import { sellCarFlowSteps } from './chat-flows/sellCarFlow';
import { rentingFlowSteps } from './chat-flows/rentingFlow';
import { supportFlowSteps, faqData as supportFaqData, findFAQAnswer as supportFindFAQAnswer } from './chat-flows/supportFlow';
import { recommendationFlowSteps } from './chat-flows/recommendationFlow';

export type { UserData, ChatButtonOption, ChatStep };
export { initialChatOptionsBase, supportFaqData, supportFindFAQAnswer }; 

export const chatFlow: Record<string, ChatStep> = {
  ...generalFlowSteps,
  ...buyCarFlowSteps,
  ...sellCarFlowSteps,
  ...rentingFlowSteps,
  ...supportFlowSteps,
  ...recommendationFlowSteps,
};