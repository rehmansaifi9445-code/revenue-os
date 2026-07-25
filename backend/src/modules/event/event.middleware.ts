import { Injectable, Logger } from '@nestjs/common';

import { RevenueFlowEvent } from './event.interface';

@Injectable()
export class EventMiddleware {
  private readonly logger = new Logger(EventMiddleware.name);

  async before(event: RevenueFlowEvent): Promise<void> {
    this.logger.log(
      `Before Processing: ${event.type}`,
    );
  }

  async after(event: RevenueFlowEvent): Promise<void> {
    this.logger.log(
      `After Processing: ${event.type}`,
    );
  }

  async onError(
    event: RevenueFlowEvent,
    error: unknown,
  ): Promise<void> {
    this.logger.error(
      `Middleware Error: ${event.type}`,
      error instanceof Error ? error.stack : String(error),
    );
  }
}
