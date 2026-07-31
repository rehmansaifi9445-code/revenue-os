import { Injectable } from '@nestjs/common';

import {
  AnalyticsContext,
  AnalyticsDefinition,
  AnalyticsEvaluator as IAnalyticsEvaluator,
} from './analytics.interface';

@Injectable()
export class AnalyticsEvaluator
  implements IAnalyticsEvaluator
{
  async evaluate(
    context: AnalyticsContext,
    analytics: AnalyticsDefinition,
  ): Promise<boolean> {
    return analytics.active;
  }
}
