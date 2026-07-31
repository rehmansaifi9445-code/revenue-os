import { Injectable } from '@nestjs/common';

@Injectable()
export class MonitoringMetrics {
  private checked = 0;

  private healthy = 0;

  private failed = 0;

  incrementChecked(): void {
    this.checked++;
  }

  incrementHealthy(): void {
    this.healthy++;
  }

  incrementFailed(): void {
    this.failed++;
  }

  getMetrics() {
    return {
      checked: this.checked,
      healthy: this.healthy,
      failed: this.failed,
    };
  }

  reset(): void {
    this.checked = 0;
    this.healthy = 0;
    this.failed = 0;
  }
}
