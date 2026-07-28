import { Injectable } from '@nestjs/common';

import { SchedulerDefinition } from './scheduler.interface';

@Injectable()
export class SchedulerHistory {
  private readonly history: SchedulerDefinition[] = [];

  add(
    scheduler: SchedulerDefinition,
  ): void {
    this.history.push(scheduler);
  }

  getAll(): SchedulerDefinition[] {
    return [...this.history];
  }

  clear(): void {
    this.history.length = 0;
  }
}
