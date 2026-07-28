import { Injectable } from '@nestjs/common';

import { SchedulerDefinition } from './scheduler.interface';

@Injectable()
export class SchedulerCache {
  private readonly cache = new Map<
    string,
    SchedulerDefinition
  >();

  set(scheduler: SchedulerDefinition): void {
    this.cache.set(
      scheduler.jobType,
      scheduler,
    );
  }

  get(
    jobType: string,
  ): SchedulerDefinition | undefined {
    return this.cache.get(jobType);
  }

  has(jobType: string): boolean {
    return this.cache.has(jobType);
  }

  remove(jobType: string): void {
    this.cache.delete(jobType);
  }

  clear(): void {
    this.cache.clear();
  }

  getAll(): SchedulerDefinition[] {
    return Array.from(this.cache.values());
  }
}
