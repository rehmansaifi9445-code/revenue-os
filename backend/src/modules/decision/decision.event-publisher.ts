import { Injectable } from '@nestjs/common';

import { EventPublisher } from '../event/event.publisher';

import { DecisionDefinition } from './decision.interface';

@Injectable()
export class DecisionEventPublisher {
  constructor(
    private readonly eventPublisher: EventPublisher,
  ) {}

  async publish(
    decision: DecisionDefinition,
  ): Promise<void> {
    await this.eventPublisher.publish({
      type: 'DECISION_COMPLETED',

      payload: {
        decision,
      },
    });
  }
}
