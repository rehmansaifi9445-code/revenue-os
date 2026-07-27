import { Injectable } from '@nestjs/common';

import { DecisionDefinition } from './decision.interface';

import { DecisionStrategy } from './decision.strategy';

@Injectable()
export class DecisionResolver {
  constructor(
    private readonly strategy: DecisionStrategy,
  ) {}

  resolve(
    decisions: DecisionDefinition[],
  ): DecisionDefinition | null {
    return this.strategy.select(decisions);
  }
}
