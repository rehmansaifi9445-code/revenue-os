import { Injectable } from '@nestjs/common';

import { AnalyticsContext } from './analytics.interface';

@Injectable()
export class AnalyticsContextBuilder {
  build(
    businessId: string,
    module: string,
    payload: Record<string, any>,
  ): AnalyticsContext {
    return {
      businessId,
      module,
      payload,
    };
  }
}
