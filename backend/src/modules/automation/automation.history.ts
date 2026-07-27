import { Injectable } from '@nestjs/common';

import { AutomationDefinition } from './automation.interface';

@Injectable()
export class AutomationHistory {
  private readonly history: AutomationDefinition[] = [];

  add(
    automation: AutomationDefinition,
  ): void {
    this.history.push(automation);
  }

  getAll(): AutomationDefinition[] {
    return [...this.history];
  }

  clear(): void {
    this.history.length = 0;
  }
}
