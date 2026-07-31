export const MonitoringServiceTypes = {
  API: 'API',
  DATABASE: 'DATABASE',
  CACHE: 'CACHE',
  QUEUE: 'QUEUE',
  WORKER: 'WORKER',
} as const;

export type MonitoringServiceType =
  (typeof MonitoringServiceTypes)[keyof typeof MonitoringServiceTypes];
