import { Injectable } from '@nestjs/common';

import { DecisionDefinition } from './decision.interface';

@Injectable()
export class DecisionValidator {
  validate(
    decision: DecisionDefinition,
  ): boolean {
    if (!decision.type) {
      return false;
    }

    if (!decision.input) {
      return false;
    }

    if (!decision.output) {
      return false;
    }

    if (decision.priority < 1) {
      return false;
    }

    return true;
  }
}
