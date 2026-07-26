import { Injectable } from '@nestjs/common';

import { DecisionDefinition } from './decision.interface';

@Injectable()
export class DecisionCache {
  private readonly cache = new Map<
    string,
    DecisionDefinition
  >();

  set(decision: DecisionDefinition): void {
    this.cache.set(decision.type, decision);
  }

  get(type: string): DecisionDefinition | undefined {
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

  getAll(): DecisionDefinition[] {
    return Array.from(this.cache.values());
  }
}
