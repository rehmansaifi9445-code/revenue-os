import { Injectable, Logger } from '@nestjs/common';

import { RevenueFlowEvent } from './event.interface';

@Injectable()
export class EventLogger {
  private readonly logger = new Logger(EventLogger.name);

  log(event: RevenueFlowEvent): void {
    this.logger.log(
      `[EVENT] ${event.type}`,
    );
  }

  warn(event: RevenueFlowEvent): void {
    this.logger.warn(
      `[EVENT WARNING] ${event.type}`,
    );
  }

  error(
    event: RevenueFlowEvent,
    error: unknown,
  ): void {
    this.logger.error(
      `[EVENT ERROR] ${event.type}`,
      error instanceof Error ? error.stack : String(error),
    );
  }
}
