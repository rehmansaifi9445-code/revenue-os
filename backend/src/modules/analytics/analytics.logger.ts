import {
  Injectable,
  Logger,
} from '@nestjs/common';

import { AnalyticsDefinition } from './analytics.interface';

@Injectable()
export class AnalyticsLogger {
  private readonly logger = new Logger(
    AnalyticsLogger.name,
  );

  created(
    analytics: AnalyticsDefinition,
  ): void {
    this.logger.log(
      `Analytics Created: ${analytics.metricName}`,
    );
  }

  executed(
    analytics: AnalyticsDefinition,
  ): void {
    this.logger.log(
      `Analytics Executed: ${analytics.metricName}`,
    );
  }

  failed(
    analytics: AnalyticsDefinition,
    error: unknown,
  ): void {
    this.logger.error(
      `Analytics Failed: ${analytics.metricName}`,
      error instanceof Error
        ? error.stack
        : String(error),
    );
  }
}
