import { Injectable } from '@nestjs/common';

import { EventPublisher } from '../event/event.publisher';

import { SchedulerDefinition } from './scheduler.interface';

@Injectable()
export class SchedulerEventPublisher {
  constructor(
    private readonly eventPublisher: EventPublisher,
  ) {}

  async publish(
    scheduler: SchedulerDefinition,
  ): Promise<void> {
    await this.eventPublisher.publish({
      type: 'SCHEDULER_EXECUTED',

      payload: {
        scheduler,
      },
    });
  }
}
