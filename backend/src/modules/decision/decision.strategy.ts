import { Injectable } from '@nestjs/common';

import { DecisionDefinition } from './decision.interface';

@Injectable()
export class DecisionStrategy {
  select(
    decisions: DecisionDefinition[],
  ): DecisionDefinition | null {
    if (!decisions.length) {
      return null;
    }

    const sorted = [...decisions].sort(
      (a, b) => b.priority - a.priority,
    );

    return sorted[0];
  }
}
