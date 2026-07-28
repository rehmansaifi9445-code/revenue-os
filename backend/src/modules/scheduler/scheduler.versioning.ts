import { Injectable } from '@nestjs/common';

@Injectable()
export class SchedulerVersioning {
  private readonly versions = new Map<string, number>();

  getVersion(jobType: string): number {
    return this.versions.get(jobType) ?? 1;
  }

  increment(jobType: string): number {
    const version = this.getVersion(jobType) + 1;

    this.versions.set(jobType, version);

    return version;
  }

  reset(jobType: string): void {
    this.versions.set(jobType, 1);
  }

  clear(): void {
    this.versions.clear();
  }
}
