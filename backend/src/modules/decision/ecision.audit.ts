import { Injectable, Logger } from '@nestjs/common';

import { DecisionDefinition } from './decision.interface';

@Injectable()
export class DecisionAudit {
  private readonly logger = new Logger(
    DecisionAudit.name,
  );

  record(
    decision: DecisionDefinition,
  ): void {
    this.logger.log(
      `AUDIT -> ${decision.type} | Priority: ${decision.priority}`,
    );
  }
}
