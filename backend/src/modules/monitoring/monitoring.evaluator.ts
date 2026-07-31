import { Injectable } from '@nestjs/common';

import {
  MonitoringContext,
  MonitoringDefinition,
  MonitoringEvaluator as IMonitoringEvaluator,
} from './monitoring.interface';

@Injectable()
export class MonitoringEvaluator
  implements IMonitoringEvaluator
{
  async evaluate(
    context: MonitoringContext,
    monitoring: MonitoringDefinition,
  ): Promise<boolean> {
    return monitoring.active;
  }
}
