import { Injectable } from '@nestjs/common';

import { MonitoringContext } from './monitoring.interface';

@Injectable()
export class MonitoringContextBuilder {
  build(
    businessId: string,
    module: string,
    payload: Record<string, any>,
  ): MonitoringContext {
    return {
      businessId,
      module,
      payload,
    };
  }
}
