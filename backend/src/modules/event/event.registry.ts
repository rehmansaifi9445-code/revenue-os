import { Injectable } from '@nestjs/common';

import { EventHandler, EventType } from './event.interface';

@Injectable()
export class EventRegistry {
  private readonly registry = new Map<
    EventType,
    EventHandler[]
  >();

  register(
    eventType: EventType,
    handler: EventHandler,
  ): void {
    const handlers =
      this.registry.get(eventType) ?? [];

    handlers.push(handler);

    this.registry.set(eventType, handlers);
  }

  unregister(
    eventType: EventType,
    handler: EventHandler,
  ): void {
    const handlers =
      this.registry.get(eventType) ?? [];

    this.registry.set(
      eventType,
      handlers.filter(h => h !== handler),
    );
  }

  getHandlers(
    eventType: EventType,
  ): EventHandler[] {
    return this.registry.get(eventType) ?? [];
  }

  hasHandlers(
    eventType: EventType,
  ): boolean {
    return this.registry.has(eventType);
  }

  getRegisteredEvents(): EventType[] {
    return Array.from(this.registry.keys());
  }

  clear(): void {
    this.registry.clear();
  }
}
