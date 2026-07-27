import { DecisionEvaluator } from './decision.evaluator';
import { DecisionExecutor } from './decision.executor';
import { DecisionRegistry } from './decision.registry';

import { DecisionCache } from './decision.cache';
import { DecisionValidator } from './decision.validator';

import { DecisionLogger } from './decision.logger';
import { DecisionMetrics } from './decision.metrics';
import { DecisionVersioning } from './decision.versioning';
import { DecisionHealthMonitor } from './decision.health-monitor';

import { DecisionStrategy } from './decision.strategy';
import { DecisionResolver } from './decision.resolver';
import { DecisionContextBuilder } from './decision.context-builder';

import { DecisionPriorityManager } from './decision.priority-manager';
import { DecisionHistory } from './decision.history';
import { DecisionAudit } from './decision.audit';

import { DecisionEventPublisher } from './decision.event-publisher';
import { DecisionConfiguration } from './decision.configuration';

import { DecisionAIAdapter } from './decision.ai-adapter';
import { DecisionConfidenceScore } from './decision.confidence-score';
import { DecisionExplanationGenerator } from './decision.explanation-generator';

import { DecisionPipeline } from './decision.pipeline';

@Module({
  imports: [PrismaModule],

  controllers: [DecisionController],

  providers: [
  DecisionService,
  DecisionRepository,

  DecisionEvaluator,
  DecisionExecutor,
  DecisionRegistry,

  DecisionCache,
  DecisionValidator,

  DecisionLogger,
  DecisionMetrics,
  DecisionVersioning,
  DecisionHealthMonitor,

  DecisionStrategy,
  DecisionResolver,
  DecisionContextBuilder,

  DecisionPriorityManager,
  DecisionHistory,
  DecisionAudit,

  DecisionEventPublisher,
  DecisionConfiguration,

  DecisionAIAdapter,
  DecisionConfidenceScore,
  DecisionExplanationGenerator,

  DecisionPipeline,
],

  exports: [
  DecisionService,
  DecisionRepository,

  DecisionEvaluator,
  DecisionExecutor,
  DecisionRegistry,

  DecisionCache,
  DecisionValidator,

  DecisionLogger,
  DecisionMetrics,
  DecisionVersioning,
  DecisionHealthMonitor,

  DecisionStrategy,
  DecisionResolver,
  DecisionContextBuilder,

  DecisionPriorityManager,
  DecisionHistory,
  DecisionAudit,

  DecisionEventPublisher,
  DecisionConfiguration,

  DecisionAIAdapter,
  DecisionConfidenceScore,
  DecisionExplanationGenerator,

  DecisionPipeline,
],
})
export class DecisionModule {}
