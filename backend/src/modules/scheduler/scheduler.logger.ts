import {
  Injectable,
  Logger,
} from '@nestjs/common';

import { SchedulerDefinition } from './scheduler.interface';

@Injectable()
export class SchedulerLogger {
  private readonly logger = new Logger(
    SchedulerLogger.name,
  );

  created(
    scheduler: SchedulerDefinition,
  ): void {
    this.logger.log(
      `Scheduler Created: ${scheduler.jobType}`,
    );
  }

  executed(
    scheduler: SchedulerDefinition,
  ): void {
    this.logger.log(
      `Scheduler Executed: ${scheduler.jobType}`,
    );
  }

  failed(
    scheduler: SchedulerDefinition,
    error: unknown,
  ): void {
    this.logger.error(
      `Scheduler Failed: ${scheduler.jobType}`,
      error instanceof Error
        ? error.stack
        : String(error),
    );
  }
}
