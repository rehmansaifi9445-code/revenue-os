import { Injectable } from '@nestjs/common';

import { DecisionDefinition } from './decision.interface';

@Injectable()
export class DecisionPriorityManager {
  sort(
    decisions: DecisionDefinition[],
  ): DecisionDefinition[] {
    return [...decisions].sort(
      (a, b) => b.priority - a.priority,
    );
  }

  highest(
    decisions: DecisionDefinition[],
  ): DecisionDefinition | null {
    if (!decisions.length) {
      return null;
    }

    return this.sort(decisions)[0];
  }
}
