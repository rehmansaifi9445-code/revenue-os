import { AnalyticsMetricType } from './analytics.types';

export interface AnalyticsContext {
  businessId: string;

  module: string;

  payload: Record<string, any>;
}

export interface AnalyticsDefinition {
  metricName: string;

  metricType: AnalyticsMetricType;

  value: number;

  payload: Record<string, any>;

  active: boolean;
}

export interface AnalyticsEvaluator {
  evaluate(
    context: AnalyticsContext,
    analytics: AnalyticsDefinition,
  ): Promise<boolean>;
}

export interface AnalyticsExecutor {
  execute(
    context: AnalyticsContext,
    analytics: AnalyticsDefinition,
  ): Promise<void>;
}
