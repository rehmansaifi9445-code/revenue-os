import { AutomationType } from './automation.types';

export interface AutomationContext {
  businessId: string;
  module: string;
  payload: Record<string, any>;
}

export interface AutomationDefinition {
  id?: string;

  type: AutomationType;

  priority: number;

  input: Record<string, any>;

  output: Record<string, any>;

  active: boolean;
}

export interface AutomationEvaluator {
  evaluate(
    context: AutomationContext,
    automation: AutomationDefinition,
  ): Promise<boolean>;
}

export interface AutomationExecutor {
  execute(
    context: AutomationContext,
    automation: AutomationDefinition,
  ): Promise<void>;
}
