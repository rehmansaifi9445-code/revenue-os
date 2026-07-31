import {
  Injectable,
  Logger,
} from '@nestjs/common';

import { MonitoringDefinition } from './monitoring.interface';

@Injectable()
export class MonitoringLogger {
  private readonly logger = new Logger(
    MonitoringLogger.name,
  );

  created(
    monitoring: MonitoringDefinition,
  ): void {
    this.logger.log(
      `Monitoring Created: ${monitoring.service}`,
    );
  }

  executed(
    monitoring: MonitoringDefinition,
  ): void {
    this.logger.log(
      `Monitoring Executed: ${monitoring.service}`,
    );
  }

  failed(
    monitoring: MonitoringDefinition,
    error: unknown,
  ): void {
    this.logger.error(
      `Monitoring Failed: ${monitoring.service}`,
      error instanceof Error
        ? error.stack
        : String(error),
    );
  }
}
