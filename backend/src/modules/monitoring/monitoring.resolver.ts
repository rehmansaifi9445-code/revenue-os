import { Injectable } from '@nestjs/common';

import { MonitoringDefinition } from './monitoring.interface';
import { MonitoringStrategy } from './monitoring.strategy';

@Injectable()
export class MonitoringResolver {
  constructor(
    private readonly strategy: MonitoringStrategy,
  ) {}

  resolve(
    monitoring: MonitoringDefinition[],
  ): MonitoringDefinition | null {
    return this.strategy.select(monitoring);
  }
}
