import { Injectable } from '@nestjs/common';

@Injectable()
export class DecisionConfidenceScore {
  calculate(
    confidence: number,
    risk: number,
    ruleMatches: number,
  ): number {
    let score = confidence;

    score += ruleMatches * 5;

    score -= risk * 10;

    if (score > 100) {
      score = 100;
    }

    if (score < 0) {
      score = 0;
    }

    return score;
  }
}
