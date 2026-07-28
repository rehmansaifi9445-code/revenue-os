import { Injectable } from '@nestjs/common';

import {
  SchedulerContext,
  SchedulerDefinition,
  SchedulerEvaluator as ISchedulerEvaluator,
} from './scheduler.interface';

@Injectable()
export class SchedulerEvaluator
  implements ISchedulerEvaluator
{
  async evaluate(
    context: SchedulerContext,
    scheduler: SchedulerDefinition,
  ): Promise<boolean> {
    return scheduler.active;
  }
}
