export const EVENT_MODULE = 'EVENT_ENGINE';

export const DEFAULT_EVENT_STATUS = 'PENDING';

export const DEFAULT_MAX_RETRY = 3;

export const DEFAULT_RETRY_DELAY = 60000; // 1 Minute

export const DEFAULT_EVENT_VERSION = '1.0';

export const EVENT_PRIORITY = {
  LOW: 'LOW',
  MEDIUM: 'MEDIUM',
  HIGH: 'HIGH',
  CRITICAL: 'CRITICAL',
} as const;

export type EventPriority =
  (typeof EVENT_PRIORITY)[keyof typeof EVENT_PRIORITY];

export const EVENT_SOURCE = {
  API: 'API',
  WORKFLOW: 'WORKFLOW',
  AUTOMATION: 'AUTOMATION',
  SCHEDULER: 'SCHEDULER',
  AI: 'AI',
  SYSTEM: 'SYSTEM',
} as const;

export type EventSource =
  (typeof EVENT_SOURCE)[keyof typeof EVENT_SOURCE];

export const EVENT_RESULT = {
  SUCCESS: 'SUCCESS',
  FAILED: 'FAILED',
  RETRY: 'RETRY',
  SKIPPED: 'SKIPPED',
} as const;

export type EventResult =
  (typeof EVENT_RESULT)[keyof typeof EVENT_RESULT];
