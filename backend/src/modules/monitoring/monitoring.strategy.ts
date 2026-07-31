import { Injectable } from '@nestjs/common';

import { MonitoringDefinition } from './monitoring.interface';

@Injectable()
export class MonitoringStrategy {
  select(
    monitoring: MonitoringDefinition[],
  ): MonitoringDefinition | null {
    if (!monitoring.length) {
      return null;
    }

    const sorted = [...monitoring].sort(
      (a, b) => a.responseTime - b.responseTime,
    );

    return sorted[0];
  }
}
