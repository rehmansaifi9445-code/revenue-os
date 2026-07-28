import {
  Injectable,
  Logger,
} from '@nestjs/common';

import { SchedulerDefinition } from './scheduler.interface';

@Injectable()
export class SchedulerAudit {
  private readonly logger = new Logger(
    SchedulerAudit.name,
  );

  record(
    scheduler: SchedulerDefinition,
  ): void {
    this.logger.log(
      `AUDIT -> ${scheduler.jobType} | Priority: ${scheduler.priority}`,
    );
  }
}
