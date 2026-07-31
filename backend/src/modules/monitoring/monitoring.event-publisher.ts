import { Injectable } from '@nestjs/common';

import { EventPublisher } from '../event/event.publisher';

import { MonitoringDefinition } from './monitoring.interface';

@Injectable()
export class MonitoringEventPublisher {
  constructor(
    private readonly eventPublisher: EventPublisher,
  ) {}

  async publish(
    monitoring: MonitoringDefinition,
  ): Promise<void> {
    await this.eventPublisher.publish({
      type: 'MONITORING_CHECKED',

      payload: {
        monitoring,
      },
    });
  }
}
