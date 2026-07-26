import { Injectable } from '@nestjs/common';

@Injectable()
export class DecisionMetrics {
  private evaluated = 0;
  private executed = 0;
  private failed = 0;

  incrementEvaluated(): void {
    this.evaluated++;
  }

  incrementExecuted(): void {
    this.executed++;
  }

  incrementFailed(): void {
    this.failed++;
  }

  getMetrics() {
    return {
      evaluated: this.evaluated,
      executed: this.executed,
      failed: this.failed,
    };
  }

  reset(): void {
    this.evaluated = 0;
    this.executed = 0;
    this.failed = 0;
  }
}
