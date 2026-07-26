import { Injectable } from '@nestjs/common';

import { RuleDefinition } from './rule.interface';

@Injectable()
export class RuleCache {
  private readonly cache = new Map<string, RuleDefinition>();

  set(rule: RuleDefinition): void {
    this.cache.set(rule.name, rule);
  }

  get(ruleName: string): RuleDefinition | undefined {
    return this.cache.get(ruleName);
  }

  has(ruleName: string): boolean {
    return this.cache.has(ruleName);
  }

  remove(ruleName: string): void {
    this.cache.delete(ruleName);
  }

  clear(): void {
    this.cache.clear();
  }
}
