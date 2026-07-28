export const SchedulerJobTypes = {
  PAYMENT_REMINDER: 'PAYMENT_REMINDER',
  AI_RECOVERY: 'AI_RECOVERY',
  EMAIL: 'EMAIL',
  SMS: 'SMS',
  WHATSAPP: 'WHATSAPP',
  WORKFLOW: 'WORKFLOW',
} as const;

export type SchedulerJobType =
  (typeof SchedulerJobTypes)[keyof typeof SchedulerJobTypes];
