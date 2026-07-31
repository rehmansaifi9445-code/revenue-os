import { Injectable } from '@nestjs/common';

@Injectable()
export class AnalyticsVersioning {
  private readonly versions = new Map<string, number>();

  getVersion(metricName: string): number {
    return this.versions.get(metricName) ?? 1;
  }

  increment(metricName: string): number {
    const version = this.getVersion(metricName) + 1;

    this.versions.set(metricName, version);

    return version;
  }

  reset(metricName: string): void {
    this.versions.set(metricName, 1);
  }

  clear(): void {
    this.versions.clear();
  }
}
