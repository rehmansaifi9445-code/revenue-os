export const SCHEDULER_ENGINE = 'SCHEDULER_ENGINE';

export const SCHEDULER_STATUS = {
  PENDING: 'PENDING',
  RUNNING: 'RUNNING',
  COMPLETED: 'COMPLETED',
  FAILED: 'FAILED',
} as const;

export type SchedulerStatus =
  (typeof SCHEDULER_STATUS)[keyof typeof SCHEDULER_STATUS];
