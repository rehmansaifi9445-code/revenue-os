import { Injectable } from '@nestjs/common';

@Injectable()
export class AnalyticsConfidenceScore {
  calculate(
    confidence: number,
    history: number,
    accuracy: number,
  ): number {
    let score = confidence;

    score += history * 5;

    score += accuracy * 10;

    if (score > 100) {
      score = 100;
    }

    if (score < 0) {
      score = 0;
    }

    return score;
  }
}
