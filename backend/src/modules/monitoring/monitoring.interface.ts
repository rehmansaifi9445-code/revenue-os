import { MonitoringServiceType } from './monitoring.types';

export interface MonitoringContext {
  businessId: string;

  module: string;

  payload: Record<string, any>;
}

export interface MonitoringDefinition {
  service: MonitoringServiceType;

  status: string;

  responseTime: number;

  payload: Record<string, any>;

  active: boolean;
}

export interface MonitoringEvaluator {
  evaluate(
    context: MonitoringContext,
    monitoring: MonitoringDefinition,
  ): Promise<boolean>;
}

export interface MonitoringExecutor {
  execute(
    context: MonitoringContext,
    monitoring: MonitoringDefinition,
  ): Promise<void>;
}
