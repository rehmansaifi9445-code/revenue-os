import { Injectable, Logger } from '@nestjs/common';

import {
  AutomationContext,
  AutomationDefinition,
  AutomationExecutor as IAutomationExecutor,
} from './automation.interface';

@Injectable()
export class AutomationExecutor
  implements IAutomationExecutor
{
  private readonly logger = new Logger(
    AutomationExecutor.name,
  );

  async execute(
    context: AutomationContext,
    automation: AutomationDefinition,
  ): Promise<void> {
    this.logger.log(
      `Executing Automation: ${automation.type}`,
    );

    /**
     * Future:
     * - WhatsApp
     * - Email
     * - SMS
     * - Recovery Workflow
     * - AI Agent
     * - Scheduler
     */
  }
}
