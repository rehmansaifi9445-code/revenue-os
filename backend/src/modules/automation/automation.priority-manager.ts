import { Injectable } from '@nestjs/common';

import { AutomationDefinition } from './automation.interface';

@Injectable()
export class AutomationPriorityManager {
  sort(
    automations: AutomationDefinition[],
  ): AutomationDefinition[] {
    return [...automations].sort(
      (a, b) => b.priority - a.priority,
    );
  }

  highest(
    automations: AutomationDefinition[],
  ): AutomationDefinition | null {
    if (!automations.length) {
      return null;
    }

    return this.sort(automations)[0];
  }
}
