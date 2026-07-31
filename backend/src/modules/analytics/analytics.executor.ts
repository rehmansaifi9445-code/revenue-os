import { Injectable, Logger } from '@nestjs/common';

import {
  AnalyticsContext,
  AnalyticsDefinition,
  AnalyticsExecutor as IAnalyticsExecutor,
} from './analytics.interface';

@Injectable()
export class AnalyticsExecutor
  implements IAnalyticsExecutor
{
  private readonly logger = new Logger(
    AnalyticsExecutor.name,
  );

  async execute(
    context: AnalyticsContext,
    analytics: AnalyticsDefinition,
  ): Promise<void> {
    this.logger.log(
      `Analytics Metric Executed: ${analytics.metricName}`,
    );
  }
}
