import { Injectable } from '@nestjs/common';

import { AutomationDefinition } from './automation.interface';

@Injectable()
export class AutomationStrategy {
  select(
    automations: AutomationDefinition[],
  ): AutomationDefinition | null {
    if (!automations.length) {
      return null;
    }

    const sorted = [...automations].sort(
      (a, b) => b.priority - a.priority,
    );

    return sorted[0];
  }
}
