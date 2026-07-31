export const AnalyticsMetricTypes = {
  COUNT: 'COUNT',
  SUM: 'SUM',
  AVERAGE: 'AVERAGE',
  PERCENTAGE: 'PERCENTAGE',
  SCORE: 'SCORE',
} as const;

export type AnalyticsMetricType =
  (typeof AnalyticsMetricTypes)[keyof typeof AnalyticsMetricTypes];
