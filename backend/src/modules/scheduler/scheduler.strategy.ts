import { Injectable } from '@nestjs/common';

import { SchedulerDefinition } from './scheduler.interface';

@Injectable()
export class SchedulerStrategy {
  select(
    schedulers: SchedulerDefinition[],
  ): SchedulerDefinition | null {
    if (!schedulers.length) {
      return null;
    }

    const sorted = [...schedulers].sort(
      (a, b) => b.priority - a.priority,
    );

    return sorted[0];
  }
}
