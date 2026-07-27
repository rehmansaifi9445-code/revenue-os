import { Injectable } from '@nestjs/common';

import {
  AutomationContext,
  AutomationDefinition,
  AutomationEvaluator as IAutomationEvaluator,
} from './automation.interface';

@Injectable()
export class AutomationEvaluator
  implements IAutomationEvaluator
{
  async evaluate(
    context: AutomationContext,
    automation: AutomationDefinition,
  ): Promise<boolean> {
    /**
     * Future:
     * - Rule Validation
     * - AI Validation
     * - Risk Validation
     * - Business Policy Validation
     */

    return automation.active;
  }
}
