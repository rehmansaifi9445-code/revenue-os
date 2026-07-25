import { Injectable, Logger } from '@nestjs/common';

import {
  EventSubscriber as IEventSubscriber,
  EventHandler,
  EventType,
} from './event.interface';

import { EventDispatcher } from './event.dispatcher';

@Injectable()
export class EventSubscriber implements IEventSubscriber {
  private readonly logger = new Logger(EventSubscriber.name);

  constructor(
    private readonly dispatcher: EventDispatcher,
  ) {}

  subscribe(
    eventType: EventType,
    handler: EventHandler,
  ): void {
    this.logger.log(
      `Subscribed to Event: ${eventType}`,
    );

    this.dispatcher.register(eventType, handler);
  }

  unsubscribe(
    eventType: EventType,
    handler: EventHandler,
  ): void {
    this.logger.log(
      `Unsubscribed from Event: ${eventType}`,
    );

    this.dispatcher.unregister(eventType, handler);
  }
}
