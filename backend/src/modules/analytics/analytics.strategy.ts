import { Injectable } from '@nestjs/common';

import { AnalyticsDefinition } from './analytics.interface';

@Injectable()
export class AnalyticsStrategy {
  select(
    analytics: AnalyticsDefinition[],
  ): AnalyticsDefinition | null {
    if (!analytics.length) {
      return null;
    }

    return analytics.reduce((best, current) =>
      current.value > best.value ? current : best,
    );
  }
}
