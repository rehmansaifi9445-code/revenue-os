import { Injectable } from '@nestjs/common';

import {
  RuleContext,
  RuleDefinition,
  RuleEvaluator as IRuleEvaluator,
} from './rule.interface';

@Injectable()
export class RuleEvaluator implements IRuleEvaluator {
  async evaluate(
    context: RuleContext,
    rule: RuleDefinition,
  ): Promise<boolean> {
    /**
     * Stage-1
     * Basic Evaluation
     *
     * Stage-2
     * JSON Logic
     * Expression Engine
     * AI Evaluation
     */

    return rule.isActive;
  }
}
