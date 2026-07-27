import {
  Injectable,
  Logger,
} from '@nestjs/common';

import { AutomationDefinition } from './automation.interface';

@Injectable()
export class AutomationAudit {
  private readonly logger = new Logger(
    AutomationAudit.name,
  );

  record(
    automation: AutomationDefinition,
  ): void {
    this.logger.log(
      `AUDIT -> ${automation.type} | Priority: ${automation.priority}`,
    );
  }
}
