import { Injectable } from '@nestjs/common';

@Injectable()
export class MonitoringVersioning {
  private readonly versions = new Map<string, number>();

  getVersion(service: string): number {
    return this.versions.get(service) ?? 1;
  }

  increment(service: string): number {
    const version = this.getVersion(service) + 1;

    this.versions.set(service, version);

    return version;
  }

  reset(service: string): void {
    this.versions.set(service, 1);
  }

  clear(): void {
    this.versions.clear();
  }
}
