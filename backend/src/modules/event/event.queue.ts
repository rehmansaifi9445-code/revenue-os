import { Injectable, Logger } from '@nestjs/common';

import { RevenueFlowEvent } from './event.interface';

@Injectable()
export class EventQueue {
  private readonly logger = new Logger(EventQueue.name);

  private readonly queue: RevenueFlowEvent[] = [];

  enqueue(event: RevenueFlowEvent): void {
    this.logger.log(`Event Queued: ${event.type}`);

    this.queue.push(event);
  }

  dequeue(): RevenueFlowEvent | undefined {
    return this.queue.shift();
  }

  peek(): RevenueFlowEvent | undefined {
    return this.queue[0];
  }

  size(): number {
    return this.queue.length;
  }

  isEmpty(): boolean {
    return this.queue.length === 0;
  }

  clear(): void {
    this.queue.length = 0;
  }

  getAll(): RevenueFlowEvent[] {
    return [...this.queue];
  }
}
