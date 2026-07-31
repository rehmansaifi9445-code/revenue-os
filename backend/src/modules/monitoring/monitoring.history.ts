import { Injectable } from '@nestjs/common';

import { MonitoringDefinition } from './monitoring.interface';

@Injectable()
export class MonitoringHistory {
  private readonly history: MonitoringDefinition[] = [];

  add(
    monitoring: MonitoringDefinition,
  ): void {
    this.history.push(monitoring);
  }

  getAll(): MonitoringDefinition[] {
    return [...this.history];
  }

  clear(): void {
    this.history.length = 0;
  }
}
