import { Injectable } from '@nestjs/common';

import { DecisionContext } from './decision.interface';

@Injectable()
export class DecisionContextBuilder {
  build(
    businessId: string,
    module: string,
    payload: Record<string, any>,
  ): DecisionContext {
    return {
      businessId,
      module,
      payload,
    };
  }
}
