import { RuleType } from './rule.types';

export interface RuleContext {
  businessId: string;

  module: string;

  eventType: string;

  payload: Record<string, any>;
}

export interface RuleDefinition {
  id?: string;

  name: string;

  type: RuleType;

  priority: number;

  condition: Record<string, any>;

  action: Record<string, any>;

  isActive: boolean;
}

export interface RuleEvaluator {
  evaluate(
    context: RuleContext,
    rule: RuleDefinition,
  ): Promise<boolean>;
}

export interface RuleExecutor {
  execute(
    context: RuleContext,
    rule: RuleDefinition,
  ): Promise<void>;
}
