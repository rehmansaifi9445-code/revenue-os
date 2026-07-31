import {
  Injectable,
  Logger,
} from '@nestjs/common';

import { AnalyticsDefinition } from './analytics.interface';

@Injectable()
export class AnalyticsAudit {
  private readonly logger = new Logger(
    AnalyticsAudit.name,
  );

  record(
    analytics: AnalyticsDefinition,
  ): void {
    this.logger.log(
      `AUDIT -> ${analytics.metricName} | Value: ${analytics.value}`,
    );
  }
}
