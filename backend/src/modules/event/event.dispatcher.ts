import { Injectable, Logger } from '@nestjs/common';

import {
  RevenueFlowEvent,
  EventHandler,
} from './event.interface';

@Injectable()
export class EventDispatcher {
  private readonly logger = new Logger(EventDispatcher.name);

  private readonly handlers = new Map<
    string,
    EventHandler[]
  >();

  register(
    eventType: string,
    handler: EventHandler,
  ): void {
    const existing =
      this.handlers.get(eventType) ?? [];

    existing.push(handler);

    this.handlers.set(eventType, existing);
  }

  unregister(
    eventType: string,
    handler: EventHandler,
  ): void {
    const existing =
      this.handlers.get(eventType) ?? [];

    this.handlers.set(
      eventType,
      existing.filter(h => h !== handler),
    );
  }

  async dispatch(
    event: RevenueFlowEvent,
  ): Promise<void> {
    this.logger.log(
      `Dispatching Event: ${event.type}`,
    );

    const handlers =
      this.handlers.get(event.type) ?? [];

    for (const handler of handlers) {
      await handler.handle(event);
    }
  }
}
