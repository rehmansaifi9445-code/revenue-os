import { Injectable } from '@nestjs/common';

@Injectable()
export class MonitoringConfidenceScore {
  calculate(
    health: number,
    uptime: number,
    errorRate: number,
  ): number {
    let score = health;

    score += uptime * 5;

    score -= errorRate * 10;

    if (score > 100) {
      score = 100;
    }

    if (score < 0) {
      score = 0;
    }

    return score;
  }
}
