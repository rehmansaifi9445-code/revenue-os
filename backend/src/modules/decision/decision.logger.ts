import {
  Injectable,
  Logger,
} from '@nestjs/common';

import { DecisionDefinition } from './decision.interface';

@Injectable()
export class DecisionLogger {
  private readonly logger = new Logger(
    DecisionLogger.name,
  );

  created(
    decision: DecisionDefinition,
  ): void {
    this.logger.log(
      `Decision Created: ${decision.type}`,
    );
  }

  evaluated(
    decision: DecisionDefinition,
  ): void {
    this.logger.log(
      `Decision Evaluated: ${decision.type}`,
    );
  }

  executed(
    decision: DecisionDefinition,
  ): void {
    this.logger.log(
      `Decision Executed: ${decision.type}`,
    );
  }

  failed(
    decision: DecisionDefinition,
    error: unknown,
  ): void {
    this.logger.error(
      `Decision Failed: ${decision.type}`,
      error instanceof Error
        ? error.stack
        : String(error),
    );
  }
}
