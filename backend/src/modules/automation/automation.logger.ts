import {
  Injectable,
  Logger,
} from '@nestjs/common';

import { AutomationDefinition } from './automation.interface';

@Injectable()
export class AutomationLogger {
  private readonly logger = new Logger(
    AutomationLogger.name,
  );

  created(
    automation: AutomationDefinition,
  ): void {
    this.logger.log(
      `Automation Created: ${automation.type}`,
    );
  }

  executed(
    automation: AutomationDefinition,
  ): void {
    this.logger.log(
      `Automation Executed: ${automation.type}`,
    );
  }

  failed(
    automation: AutomationDefinition,
    error: unknown,
  ): void {
    this.logger.error(
      `Automation Failed: ${automation.type}`,
      error instanceof Error
        ? error.stack
        : String(error),
    );
  }
}
