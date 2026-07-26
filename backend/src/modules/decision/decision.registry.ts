import { Injectable } from '@nestjs/common';

import { DecisionDefinition } from './decision.interface';

@Injectable()
export class DecisionRegistry {
  private readonly registry = new Map<
    string,
    DecisionDefinition
  >();

  register(
    decision: DecisionDefinition,
  ): void {
    this.registry.set(
      decision.type,
      decision,
    );
  }

  unregister(type: string): void {
    this.registry.delete(type);
  }

  get(
    type: string,
  ): DecisionDefinition | undefined {
    return this.registry.get(type);
  }

  getAll(): DecisionDefinition[] {
    return Array.from(
      this.registry.values(),
    );
  }

  clear(): void {
    this.registry.clear();
  }
}
