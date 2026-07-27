import { Injectable } from '@nestjs/common';

import { DecisionDefinition } from './decision.interface';

@Injectable()
export class DecisionHistory {
  private readonly history: DecisionDefinition[] = [];

  add(
    decision: DecisionDefinition,
  ): void {
    this.history.push(decision);
  }

  getAll(): DecisionDefinition[] {
    return [...this.history];
  }

  clear(): void {
    this.history.length = 0;
  }
}
