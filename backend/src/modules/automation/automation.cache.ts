import { Injectable } from '@nestjs/common';

import { AutomationDefinition } from './automation.interface';

@Injectable()
export class AutomationCache {
  private readonly cache = new Map<
    string,
    AutomationDefinition
  >();

  set(automation: AutomationDefinition): void {
    this.cache.set(
      automation.type,
      automation,
    );
  }

  get(
    type: string,
  ): AutomationDefinition | undefined {
    return this.cache.get(type);
  }

  has(type: string): boolean {
    return this.cache.has(type);
  }

  remove(type: string): void {
    this.cache.delete(type);
  }

  clear(): void {
    this.cache.clear();
  }

  getAll(): AutomationDefinition[] {
    return Array.from(
      this.cache.values(),
    );
  }
}
