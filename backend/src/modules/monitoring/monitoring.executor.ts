import {
  Injectable,
  Logger,
} from '@nestjs/common';

import {
  MonitoringContext,
  MonitoringDefinition,
  MonitoringExecutor as IMonitoringExecutor,
} from './monitoring.interface';

@Injectable()
export class MonitoringExecutor
  implements IMonitoringExecutor
{
  private readonly logger = new Logger(
    MonitoringExecutor.name,
  );

  async execute(
    context: MonitoringContext,
    monitoring: MonitoringDefinition,
  ): Promise<void> {
    this.logger.log(
      `Monitoring Service Executed: ${monitoring.service}`,
    );
  }
}
