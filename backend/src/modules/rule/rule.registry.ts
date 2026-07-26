import { Injectable } from '@nestjs/common';

import { RuleDefinition } from './rule.interface';

@Injectable()
export class RuleRegistry {
  private readonly rules = new Map<
    string,
    RuleDefinition
  >();

  register(rule: RuleDefinition): void {
    this.rules.set(rule.name, rule);
  }

  unregister(ruleName: string): void {
    this.rules.delete(ruleName);
  }

  get(ruleName: string): RuleDefinition | undefined {
    return this.rules.get(ruleName);
  }

  getAll(): RuleDefinition[] {
    return Array.from(this.rules.values());
  }

  clear(): void {
    this.rules.clear();
  }
}
