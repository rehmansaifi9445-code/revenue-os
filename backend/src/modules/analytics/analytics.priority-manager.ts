import { Injectable } from '@nestjs/common';

import { AnalyticsDefinition } from './analytics.interface';

@Injectable()
export class AnalyticsPriorityManager {
  sort(
    analytics: AnalyticsDefinition[],
  ): AnalyticsDefinition[] {
    return [...analytics].sort(
      (a, b) => b.value - a.value,
    );
  }

  highest(
    analytics: AnalyticsDefinition[],
  ): AnalyticsDefinition | null {
    if (!analytics.length) {
      return null;
    }

    return this.sort(analytics)[0];
  }
}
