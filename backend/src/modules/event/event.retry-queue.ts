import { Injectable, Logger } from '@nestjs/common';

import { RevenueFlowEvent } from './event.interface';

@Injectable()
export class EventRetryQueue {
  private readonly logger = new Logger(EventRetryQueue.name);

  private readonly retryQueue: RevenueFlowEvent[] = [];

  enqueue(event: RevenueFlowEvent): void {
    this.logger.warn(
      `Event Added To Retry Queue: ${event.type}`,
    );

    this.retryQueue.push({
      ...event,
      retryCount: (event.retryCount ?? 0) + 1,
    });
  }

  dequeue(): RevenueFlowEvent | undefined {
    return this.retryQueue.shift();
  }

  peek(): RevenueFlowEvent | undefined {
    return this.retryQueue[0];
  }

  size(): number {
    return this.retryQueue.length;
  }

  isEmpty(): boolean {
    return this.retryQueue.length === 0;
  }

  clear(): void {
    this.retryQueue.length = 0;
  }

  getAll(): RevenueFlowEvent[] {
    return [...this.retryQueue];
  }
}
