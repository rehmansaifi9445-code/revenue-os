import { Injectable } from '@nestjs/common';

import { EventPublisher } from '../event/event.publisher';

import { AnalyticsDefinition } from './analytics.interface';

@Injectable()
export class AnalyticsEventPublisher {
  constructor(
    private readonly eventPublisher: EventPublisher,
  ) {}

  async publish(
    analytics: AnalyticsDefinition,
  ): Promise<void> {
    await this.eventPublisher.publish({
      type: 'ANALYTICS_CALCULATED',

      payload: {
        analytics,
      },
    });
  }
}
