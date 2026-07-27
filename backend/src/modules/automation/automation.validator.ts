import { Injectable } from '@nestjs/common';

import { AutomationDefinition } from './automation.interface';

@Injectable()
export class AutomationValidator {
  validate(
    automation: AutomationDefinition,
  ): boolean {
    if (!automation.type) {
      return false;
    }

    if (!automation.input) {
      return false;
    }

    if (!automation.output) {
      return false;
    }

    if (automation.priority < 1) {
      return false;
    }

    return true;
  }
}
