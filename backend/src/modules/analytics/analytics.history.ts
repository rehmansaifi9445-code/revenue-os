import { Injectable } from '@nestjs/common';

import { AnalyticsDefinition } from './analytics.interface';

@Injectable()
export class AnalyticsHistory {
  private readonly history: AnalyticsDefinition[] = [];

  add(
    analytics: AnalyticsDefinition,
  ): void {
    this.history.push(analytics);
  }

  getAll(): AnalyticsDefinition[] {
    return [...this.history];
  }

  clear(): void {
    this.history.length = 0;
  }
}
