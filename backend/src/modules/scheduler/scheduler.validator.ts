import { Injectable } from '@nestjs/common';

import { SchedulerDefinition } from './scheduler.interface';

@Injectable()
export class SchedulerValidator {
  validate(
    scheduler: SchedulerDefinition,
  ): boolean {
    if (!scheduler.jobType) {
      return false;
    }

    if (!scheduler.payload) {
      return false;
    }

    if (!scheduler.executeAt) {
      return false;
    }

    if (scheduler.priority < 1) {
      return false;
    }

    return true;
  }
}
