import { Injectable } from '@nestjs/common';

import { MonitoringDefinition } from './monitoring.interface';

@Injectable()
export class MonitoringPriorityManager {
  sort(
    monitoring: MonitoringDefinition[],
  ): MonitoringDefinition[] {
    return [...monitoring].sort(
      (a, b) => a.responseTime - b.responseTime,
    );
  }

  highest(
    monitoring: MonitoringDefinition[],
  ): MonitoringDefinition | null {
    if (!monitoring.length) {
      return null;
    }

    return this.sort(monitoring)[0];
  }
}
