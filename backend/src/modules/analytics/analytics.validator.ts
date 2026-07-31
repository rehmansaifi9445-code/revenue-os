import { Injectable } from '@nestjs/common';

import { AnalyticsDefinition } from './analytics.interface';

@Injectable()
export class AnalyticsValidator {
  validate(
    analytics: AnalyticsDefinition,
  ): boolean {
    if (!analytics.metricName) {
      return false;
    }

    if (!analytics.metricType) {
      return false;
    }

    if (
      analytics.value === undefined ||
      analytics.value === null
    ) {
      return false;
    }

    return true;
  }
}
