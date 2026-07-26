import { Injectable, Logger } from '@nestjs/common';

import {
  DecisionContext,
  DecisionDefinition,
  DecisionExecutor as IDecisionExecutor,
} from './decision.interface';

@Injectable()
export class DecisionExecutor implements IDecisionExecutor {
  private readonly logger = new Logger(
    DecisionExecutor.name,
  );

  async execute(
    context: DecisionContext,
    decision: DecisionDefinition,
  ): Promise<void> {
    this.logger.log(
      `Executing Decision: ${decision.type}`,
    );

    /**
     * Future
     *
     * Trigger Automation
     * Trigger Workflow
     * Send Notification
     * AI Action
     * Recovery Action
     */
  }
}
