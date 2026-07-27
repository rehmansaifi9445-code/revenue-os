import { Injectable } from '@nestjs/common';

import { AutomationDefinition } from './automation.interface';
import { AutomationStrategy } from './automation.strategy';

@Injectable()
export class AutomationResolver {
  constructor(
    private readonly strategy: AutomationStrategy,
  ) {}

  resolve(
    automations: AutomationDefinition[],
  ): AutomationDefinition | null {
    return this.strategy.select(automations);
  }
}
