import { Injectable } from '@nestjs/common';

import { MonitoringDefinition } from './monitoring.interface';

@Injectable()
export class MonitoringValidator {
  validate(
    monitoring: MonitoringDefinition,
  ): boolean {
    if (!monitoring.service) {
      return false;
    }

    if (!monitoring.status) {
      return false;
    }

    if (monitoring.responseTime < 0) {
      return false;
    }

    return true;
  }
}
