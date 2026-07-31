import { Injectable } from '@nestjs/common';

import { AnalyticsDefinition } from './analytics.interface';

@Injectable()
export class AnalyticsRegistry {
  private readonly registry = new Map<
    string,
    AnalyticsDefinition
  >();

  register(
    analytics: AnalyticsDefinition,
  ): void {
    this.registry.set(
      analytics.metricName,
      analytics,
    );
  }

  unregister(metricName: string): void {
    this.registry.delete(metricName);
  }

  get(
    metricName: string,
  ): AnalyticsDefinition | undefined {
    return this.registry.get(metricName);
  }

  getAll(): AnalyticsDefinition[] {
    return Array.from(this.registry.values());
  }

  clear(): void {
    this.registry.clear();
  }
}
