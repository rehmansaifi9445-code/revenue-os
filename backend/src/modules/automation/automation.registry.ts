import { Injectable } from '@nestjs/common';

import { AutomationDefinition } from './automation.interface';

@Injectable()
export class AutomationRegistry {
  private readonly registry = new Map<
    string,
    AutomationDefinition
  >();

  register(
    automation: AutomationDefinition,
  ): void {
    this.registry.set(
      automation.type,
      automation,
    );
  }

  unregister(type: string): void {
    this.registry.delete(type);
  }

  get(
    type: string,
  ): AutomationDefinition | undefined {
    return this.registry.get(type);
  }

  getAll(): AutomationDefinition[] {
    return Array.from(
      this.registry.values(),
    );
  }

  clear(): void {
    this.registry.clear();
  }
}
