import { Injectable } from '@nestjs/common';

@Injectable()
export class EventMetrics {
  private processed = 0;

  private failed = 0;

  private retried = 0;

  incrementProcessed(): void {
    this.processed++;
  }

  incrementFailed(): void {
    this.failed++;
  }

  incrementRetried(): void {
    this.retried++;
  }

  getMetrics() {
    return {
      processed: this.processed,
      failed: this.failed,
      retried: this.retried,
    };
  }

  reset(): void {
    this.processed = 0;
    this.failed = 0;
    this.retried = 0;
  }
}
