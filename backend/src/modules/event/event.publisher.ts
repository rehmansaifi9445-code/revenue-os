import { Injectable, Logger } from '@nestjs/common';

import {
  EventPublisher as IEventPublisher,
  RevenueFlowEvent,
} from './event.interface';

@Injectable()
export class EventPublisher implements IEventPublisher {
  private readonly logger = new Logger(EventPublisher.name);

  async publish(event: RevenueFlowEvent): Promise<void> {
    this.logger.log(
      `Publishing Event: ${event.type}`,
    );

    /**
     * Stage-2
     * Dispatch Event
     * Queue Event
     * Audit Event
     * Analytics Event
     * AI Learning
     */

    return;
  }
}
