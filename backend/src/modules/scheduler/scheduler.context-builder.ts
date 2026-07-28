import { Injectable } from '@nestjs/common';

import { SchedulerContext } from './scheduler.interface';

@Injectable()
export class SchedulerContextBuilder {
  build(
    businessId: string,
    module: string,
    payload: Record<string, any>,
  ): SchedulerContext {
    return {
      businessId,
      module,
      payload,
    };
  }
}
