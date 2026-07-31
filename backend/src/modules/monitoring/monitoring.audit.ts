import {
  Injectable,
  Logger,
} from '@nestjs/common';

import { MonitoringDefinition } from './monitoring.interface';

@Injectable()
export class MonitoringAudit {
  private readonly logger = new Logger(
    MonitoringAudit.name,
  );

  record(
    monitoring: MonitoringDefinition,
  ): void {
    this.logger.log(
      `AUDIT -> ${monitoring.service} | Status: ${monitoring.status}`,
    );
  }
}
