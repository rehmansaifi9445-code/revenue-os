import { SchedulerJobType } from './scheduler.types';

export interface SchedulerContext {
  businessId: string;

  module: string;

  payload: Record<string, any>;
}

export interface SchedulerDefinition {
  id?: string;

  jobType: SchedulerJobType;

  priority: number;

  executeAt: Date;

  payload: Record<string, any>;

  active: boolean;
}

export interface SchedulerEvaluator {
  evaluate(
    context: SchedulerContext,
    scheduler: SchedulerDefinition,
  ): Promise<boolean>;
}

export interface SchedulerExecutor {
  execute(
    context: SchedulerContext,
    scheduler: SchedulerDefinition,
  ): Promise<void>;
}
