import { Injectable, Logger } from '@nestjs/common';

import { RevenueFlowEvent } from './event.interface';

@Injectable()
export class EventDeadLetterQueue {
  private readonly logger = new Logger(
    EventDeadLetterQueue.name,
  );

  private readonly deadLetterQueue: RevenueFlowEvent[] = [];

  enqueue(event: RevenueFlowEvent): void {
    this.logger.error(
      `Event moved to Dead Letter Queue: ${event.type}`,
    );

    this.deadLetterQueue.push(event);
  }

  dequeue(): RevenueFlowEvent | undefined {
    return this.deadLetterQueue.shift();
  }

  peek(): RevenueFlowEvent | undefined {
    return this.deadLetterQueue[0];
  }

  size(): number {
    return this.deadLetterQueue.length;
  }

  isEmpty(): boolean {
    return this.deadLetterQueue.length === 0;
  }

  clear(): void {
    this.deadLetterQueue.length = 0;
  }

  getAll(): RevenueFlowEvent[] {
    return [...this.deadLetterQueue];
  }
}
