import { Injectable } from '@nestjs/common';

import { EventPublisher } from '../event/event.publisher';

import { AutomationDefinition } from './automation.interface';

@Injectable()
export class AutomationEventPublisher {
  constructor(
    private readonly eventPublisher: EventPublisher,
  ) {}

  async publish(
    automation: AutomationDefinition,
  ): Promise<void> {
    await this.eventPublisher.publish({
      type: 'AUTOMATION_COMPLETED',

      payload: {
        automation,
      },
    });
  }
}
