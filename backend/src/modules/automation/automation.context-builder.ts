import { Injectable } from '@nestjs/common';

import { AutomationContext } from './automation.interface';

@Injectable()
export class AutomationContextBuilder {
  build(
    businessId: string,
    module: string,
    payload: Record<string, any>,
  ): AutomationContext {
    return {
      businessId,
      module,
      payload,
    };
  }
}
