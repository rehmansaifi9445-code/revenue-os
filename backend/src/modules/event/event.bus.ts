import { Injectable } from '@nestjs/common';

import { RevenueFlowEvent } from './event.interface';

import { EventQueue } from './event.queue';
import { EventDispatcher } from './event.dispatcher';
import { EventPublisher } from './event.publisher';

@Injectable()
export class EventBus {
  constructor(
    private readonly publisher: EventPublisher,
    private readonly queue: EventQueue,
    private readonly dispatcher: EventDispatcher,
  ) {}

  async publish(event: RevenueFlowEvent): Promise<void> {
    await this.publisher.publish(event);

    this.queue.enqueue(event);
  }

  async process(): Promise<void> {
    while (!this.queue.isEmpty()) {
      const event = this.queue.dequeue();

      if (!event) {
        continue;
      }

      await this.dispatcher.dispatch(event);
    }
  }
}
