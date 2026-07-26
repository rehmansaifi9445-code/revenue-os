import { Injectable, Logger } from '@nestjs/common';

import { RuleDefinition } from './rule.interface';

@Injectable()
export class RuleLogger {
  private readonly logger = new Logger(RuleLogger.name);

  created(rule: RuleDefinition): void {
    this.logger.log(`Rule Created: ${rule.name}`);
  }

  executed(rule: RuleDefinition): void {
    this.logger.log(`Rule Executed: ${rule.name}`);
  }

  skipped(rule: RuleDefinition): void {
    this.logger.warn(`Rule Skipped: ${rule.name}`);
  }

  failed(rule: RuleDefinition, error: unknown): void {
    this.logger.error(
      `Rule Failed: ${rule.name}`,
      error instanceof Error ? error.stack : String(error),
    );
  }
}
