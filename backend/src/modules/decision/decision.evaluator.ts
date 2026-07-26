import { Injectable } from '@nestjs/common';

import {
  DecisionContext,
  DecisionDefinition,
  DecisionEvaluator as IDecisionEvaluator,
} from './decision.interface';

@Injectable()
export class DecisionEvaluator implements IDecisionEvaluator {
  async evaluate(
    context: DecisionContext,
    decision: DecisionDefinition,
  ): Promise<boolean> {
    /**
     * V1
     * Basic Evaluation
     *
     * V2
     * Rule Chain
     * AI Confidence
     * Risk Analysis
     */

    return decision.approved;
  }
}
