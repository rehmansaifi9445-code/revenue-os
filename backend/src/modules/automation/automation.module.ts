import { Module } from '@nestjs/common';

import { PrismaModule } from '../../prisma/prisma.module';

import { EventModule } from '../event/event.module';

import { AutomationController } from './automation.controller';

import { AutomationService } from './automation.service';
import { AutomationRepository } from './automation.repository';

import { AutomationEvaluator } from './automation.evaluator';
import { AutomationExecutor } from './automation.executor';
import { AutomationRegistry } from './automation.registry';

import { AutomationCache } from './automation.cache';
import { AutomationValidator } from './automation.validator';

import { AutomationLogger } from './automation.logger';
import { AutomationMetrics } from './automation.metrics';
import { AutomationVersioning } from './automation.versioning';
import { AutomationHealthMonitor } from './automation.health-monitor';

import { AutomationStrategy } from './automation.strategy';
import { AutomationResolver } from './automation.resolver';
import { AutomationContextBuilder } from './automation.context-builder';

import { AutomationPriorityManager } from './automation.priority-manager';
import { AutomationHistory } from './automation.history';
import { AutomationAudit } from './automation.audit';

import { AutomationEventPublisher } from './automation.event-publisher';
import { AutomationConfiguration } from './automation.configuration';

import { AutomationAIAdapter } from './automation.ai-adapter';
import { AutomationConfidenceScore } from './automation.confidence-score';
import { AutomationExplanationGenerator } from './automation.explanation-generator';

import { AutomationPipeline } from './automation.pipeline';

@Module({
  imports: [
    PrismaModule,
    EventModule,
  ],

  controllers: [
    AutomationController,
  ],

  providers: [
    AutomationService,
    AutomationRepository,

    AutomationEvaluator,
    AutomationExecutor,
    AutomationRegistry,

    AutomationCache,
    AutomationValidator,

    AutomationLogger,
    AutomationMetrics,
    AutomationVersioning,
    AutomationHealthMonitor,

    AutomationStrategy,
    AutomationResolver,
    AutomationContextBuilder,

    AutomationPriorityManager,
    AutomationHistory,
    AutomationAudit,

    AutomationEventPublisher,
    AutomationConfiguration,

    AutomationAIAdapter,
    AutomationConfidenceScore,
    AutomationExplanationGenerator,

    AutomationPipeline,
  ],

  exports: [
    AutomationService,
    AutomationRepository,

    AutomationEvaluator,
    AutomationExecutor,
    AutomationRegistry,

    AutomationCache,
    AutomationValidator,

    AutomationLogger,
    AutomationMetrics,
    AutomationVersioning,
    AutomationHealthMonitor,

    AutomationStrategy,
    AutomationResolver,
    AutomationContextBuilder,

    AutomationPriorityManager,
    AutomationHistory,
    AutomationAudit,

    AutomationEventPublisher,
    AutomationConfiguration,

    AutomationAIAdapter,
    AutomationConfidenceScore,
    AutomationExplanationGenerator,

    AutomationPipeline,
  ],
})
export class AutomationModule {}
