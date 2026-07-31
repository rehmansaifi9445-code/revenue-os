export const ANALYTICS_ENGINE = 'ANALYTICS_ENGINE';

export const ANALYTICS_STATUS = {
  ACTIVE: 'ACTIVE',
  DISABLED: 'DISABLED',
} as const;

export type AnalyticsStatus =
  (typeof ANALYTICS_STATUS)[keyof typeof ANALYTICS_STATUS];
