import { Injectable } from '@nestjs/common';

@Injectable()
export class AnalyticsMetrics {
  private calculated = 0;

  private success = 0;

  private failed = 0;

  incrementCalculated(): void {
    this.calculated++;
  }

  incrementSuccess(): void {
    this.success++;
  }

  incrementFailed(): void {
    this.failed++;
  }

  getMetrics() {
    return {
      calculated: this.calculated,
      success: this.success,
      failed: this.failed,
    };
  }

  reset(): void {
    this.calculated = 0;
    this.success = 0;
    this.failed = 0;
  }
}
