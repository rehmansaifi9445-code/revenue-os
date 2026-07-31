export const MONITORING_ENGINE = 'MONITORING_ENGINE';

export const MONITORING_STATUS = {
  HEALTHY: 'HEALTHY',
  WARNING: 'WARNING',
  CRITICAL: 'CRITICAL',
} as const;

export type MonitoringStatus =
  (typeof MONITORING_STATUS)[keyof typeof MONITORING_STATUS];
