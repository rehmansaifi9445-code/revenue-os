import { Injectable } from '@nestjs/common';

import { AnalyticsDefinition } from './analytics.interface';

@Injectable()
export class AnalyticsCache {
  private readonly cache = new Map<
    string,
    AnalyticsDefinition
  >();

  set(
    analytics: AnalyticsDefinition,
  ): void {
    this.cache.set(
      analytics.metricName,
      analytics,
    );
  }

  get(
    metricName: string,
  ): AnalyticsDefinition | undefined {
    return this.cache.get(metricName);
  }

  has(metricName: string): boolean {
    return this.cache.has(metricName);
  }

  remove(metricName: string): void {
    this.cache.delete(metricName);
  }

  clear(): void {
    this.cache.clear();
  }

  getAll(): AnalyticsDefinition[] {
    return Array.from(this.cache.values());
  }
}
