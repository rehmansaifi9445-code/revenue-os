import { Injectable } from '@nestjs/common';

@Injectable()
export class AutomationMetrics {
  private executed = 0;
  private success = 0;
  private failed = 0;

  incrementExecuted(): void {
    this.executed++;
  }

  incrementSuccess(): void {
    this.success++;
  }

  incrementFailed(): void {
    this.failed++;
  }

  getMetrics() {
    return {
      executed: this.executed,
      success: this.success,
      failed: this.failed,
    };
  }

  reset(): void {
    this.executed = 0;
    this.success = 0;
    this.failed = 0;
  }
}
