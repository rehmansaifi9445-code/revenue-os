export const AUTOMATION_ENGINE = 'AUTOMATION_ENGINE';

export const AUTOMATION_STATUS = {
  PENDING: 'PENDING',
  RUNNING: 'RUNNING',
  SUCCESS: 'SUCCESS',
  FAILED: 'FAILED',
} as const;

export type AutomationStatus =
  (typeof AUTOMATION_STATUS)[keyof typeof AUTOMATION_STATUS];
