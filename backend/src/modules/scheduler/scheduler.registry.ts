import { Injectable } from '@nestjs/common';

import { SchedulerDefinition } from './scheduler.interface';

@Injectable()
export class SchedulerRegistry {
  private readonly registry = new Map<
    string,
    SchedulerDefinition
  >();

  register(
    scheduler: SchedulerDefinition,
  ): void {
    this.registry.set(
      scheduler.jobType,
      scheduler,
    );
  }

  unregister(jobType: string): void {
    this.registry.delete(jobType);
  }

  get(
    jobType: string,
  ): SchedulerDefinition | undefined {
    return this.registry.get(jobType);
  }

  getAll(): SchedulerDefinition[] {
    return Array.from(
      this.registry.values(),
    );
  }

  clear(): void {
    this.registry.clear();
  }
}
