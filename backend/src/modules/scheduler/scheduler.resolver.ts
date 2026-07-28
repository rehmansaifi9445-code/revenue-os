import { Injectable } from '@nestjs/common';

import { SchedulerDefinition } from './scheduler.interface';
import { SchedulerStrategy } from './scheduler.strategy';

@Injectable()
export class SchedulerResolver {
  constructor(
    private readonly strategy: SchedulerStrategy,
  ) {}

  resolve(
    schedulers: SchedulerDefinition[],
  ): SchedulerDefinition | null {
    return this.strategy.select(schedulers);
  }
}
