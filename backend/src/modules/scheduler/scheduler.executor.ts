import { Injectable, Logger } from '@nestjs/common';

import {
  SchedulerContext,
  SchedulerDefinition,
  SchedulerExecutor as ISchedulerExecutor,
} from './scheduler.interface';

@Injectable()
export class SchedulerExecutor
  implements ISchedulerExecutor
{
  private readonly logger = new Logger(
    SchedulerExecutor.name,
  );

  async execute(
    context: SchedulerContext,
    scheduler: SchedulerDefinition,
  ): Promise<void> {
    this.logger.log(
      `Executing Scheduler Job: ${scheduler.jobType}`,
    );
  }
}
