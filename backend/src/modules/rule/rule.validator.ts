import { Injectable } from '@nestjs/common';

import { RuleDefinition } from './rule.interface';

@Injectable()
export class RuleValidator {
  validate(rule: RuleDefinition): boolean {
    if (!rule.name) {
      return false;
    }

    if (!rule.type) {
      return false;
    }

    if (!rule.condition) {
      return false;
    }

    if (!rule.action) {
      return false;
    }

    return true;
  }
}
