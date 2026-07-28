import { Injectable } from '@nestjs/common';

import { SchedulerDefinition } from './scheduler.interface';

@Injectable()
export class SchedulerPriorityManager {
  sort(
    schedulers: SchedulerDefinition[],
  ): SchedulerDefinition[] {
    return [...schedulers].sort(
      (a, b) => b.priority - a.priority,
    );
  }

  highest(
    schedulers: SchedulerDefinition[],
  ): SchedulerDefinition | null {
    if (!schedulers.length) {
      return null;
    }

    return this.sort(schedulers)[0];
  }
}
