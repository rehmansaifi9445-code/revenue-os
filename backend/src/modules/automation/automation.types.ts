export const AutomationTypes = {
  REMINDER: 'REMINDER',
  EMAIL: 'EMAIL',
  WHATSAPP: 'WHATSAPP',
  SMS: 'SMS',
  RECOVERY: 'RECOVERY',
  AI: 'AI',
  WORKFLOW: 'WORKFLOW',
} as const;

export type AutomationType =
  (typeof AutomationTypes)[keyof typeof AutomationTypes];
