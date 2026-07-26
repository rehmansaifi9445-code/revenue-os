import { Injectable, Logger } from '@nestjs/common';

import {
  RuleContext,
  RuleDefinition,
  RuleExecutor as IRuleExecutor,
} from './rule.interface';

@Injectable()
export class RuleExecutor implements IRuleExecutor {
  private readonly logger = new Logger(
    RuleExecutor.name,
  );

  async execute(
    context: RuleContext,
    rule: RuleDefinition,
  ): Promise<void> {
    this.logger.log(
      `Executing Rule: ${rule.name}`,
    );

    /**
     * Future
     *
     * Trigger Workflow
     * Send Reminder
     * Create Notification
     * Start Recovery
     * AI Recommendation
     * Custom Actions
     */
  }
}
