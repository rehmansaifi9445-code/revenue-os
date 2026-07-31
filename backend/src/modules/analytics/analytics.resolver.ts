import { Injectable } from '@nestjs/common';

import { AnalyticsDefinition } from './analytics.interface';
import { AnalyticsStrategy } from './analytics.strategy';

@Injectable()
export class AnalyticsResolver {
  constructor(
    private readonly strategy: AnalyticsStrategy,
  ) {}

  resolve(
    analytics: AnalyticsDefinition[],
  ): AnalyticsDefinition | null {
    return this.strategy.select(analytics);
  }
}
