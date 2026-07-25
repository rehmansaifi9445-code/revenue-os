import { Injectable, Logger } from '@nestjs/common';

import { RevenueFlowEvent } from './event.interface';

import { EventDispatcher } from './event.dispatcher';
import { EventRetryQueue } from './event.retry-queue';
import { EventDeadLetterQueue } from './event.dead-letter-queue';

@Injectable()
export class EventProcessor {
  private readonly logger = new Logger(EventProcessor.name);

  constructor(
    private readonly dispatcher: EventDispatcher,
    private readonly retryQueue: EventRetryQueue,
    private readonly deadLetterQueue: EventDeadLetterQueue,
  ) {}

  async process(event: RevenueFlowEvent): Promise<void> {
    try {
      await this.dispatcher.dispatch(event);
    } catch (error) {
      this.logger.error(
        `Processing Failed: ${event.type}`,
      );

      const retryCount = event.retryCount ?? 0;
      const maxRetry = event.maxRetry ?? 3;

      if (retryCount < maxRetry) {
        this.retryQueue.enqueue(event);
      } else {
        this.deadLetterQueue.enqueue(event);
      }
    }
  }
}
