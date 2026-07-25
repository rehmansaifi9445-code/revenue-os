import { EventPriority } from './event.constants';
import { EventType } from './event.types';

export interface EventContext {
  businessId: string;
  userId?: string;

  correlationId?: string;
  traceId?: string;

  source: string;
  module: string;

  timestamp: Date;
}

export interface EventPayload {
  [key: string]: any;
}

export interface RevenueFlowEvent {
  id?: string;

  type: EventType;

  priority: EventPriority;

  payload: EventPayload;

  context: EventContext;

  version?: string;

  retryCount?: number;

  maxRetry?: number;

  scheduledAt?: Date;

  processedAt?: Date;

  createdAt?: Date;
}

export interface EventHandler {
  handle(event: RevenueFlowEvent): Promise<void>;
}

export interface EventPublisher {
  publish(event: RevenueFlowEvent): Promise<void>;
}

export interface EventSubscriber {
  subscribe(
    eventType: EventType,
    handler: EventHandler,
  ): void;

  unsubscribe(
    eventType: EventType,
    handler: EventHandler,
  ): void;
}
