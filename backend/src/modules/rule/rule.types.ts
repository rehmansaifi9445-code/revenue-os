export const RuleTypes = {
  PAYMENT: 'PAYMENT',
  REMINDER: 'REMINDER',
  RECOVERY: 'RECOVERY',
  WORKFLOW: 'WORKFLOW',
  NOTIFICATION: 'NOTIFICATION',
  AUTOMATION: 'AUTOMATION',
  AI: 'AI',
  SYSTEM: 'SYSTEM',
} as const;

export type RuleType =
  (typeof RuleTypes)[keyof typeof RuleTypes];
