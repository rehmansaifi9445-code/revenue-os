import { Module } from '@nestjs/common';

import { PrismaModule } from '../../prisma/prisma.module';

import { EventModule } from '../event/event.module';

import { SchedulerController } from './scheduler.controller';

import { SchedulerService } from './scheduler.service';
import { SchedulerRepository } from './scheduler.repository';

import { SchedulerEvaluator } from './scheduler.evaluator';
import { SchedulerExecutor } from './scheduler.executor';
import { SchedulerRegistry } from './scheduler.registry';

import { SchedulerCache } from './scheduler.cache';
import { SchedulerValidator } from './scheduler.validator';

import { SchedulerLogger } from './scheduler.logger';
import { SchedulerMetrics } from './scheduler.metrics';
import { SchedulerVersioning } from './scheduler.versioning';
import { SchedulerHealthMonitor } from './scheduler.health-monitor';

import { SchedulerStrategy } from './scheduler.strategy';
import { SchedulerResolver } from './scheduler.resolver';
import { SchedulerContextBuilder } from './scheduler.context-builder';

import { SchedulerPriorityManager } from './scheduler.priority-manager';
import { SchedulerHistory } from './scheduler.history';
import { SchedulerAudit } from './scheduler.audit';

import { SchedulerEventPublisher } from './scheduler.event-publisher';
import { SchedulerConfiguration } from './scheduler.configuration';

import { SchedulerAIAdapter } from './scheduler.ai-adapter';
import { SchedulerConfidenceScore } from './scheduler.confidence-score';
import { SchedulerExplanationGenerator } from './scheduler.explanation-generator';

import { SchedulerPipeline } from './scheduler.pipeline';

@Module({
  imports: [
    PrismaModule,
    EventModule,
  ],

  controllers: [
    SchedulerController,
  ],

  providers: [
    SchedulerService,
    SchedulerRepository,

    SchedulerEvaluator,
    SchedulerExecutor,
    SchedulerRegistry,

    SchedulerCache,
    SchedulerValidator,

    SchedulerLogger,
    SchedulerMetrics,
    SchedulerVersioning,
    SchedulerHealthMonitor,

    SchedulerStrategy,
    SchedulerResolver,
    SchedulerContextBuilder,

    SchedulerPriorityManager,
    SchedulerHistory,
    SchedulerAudit,

    SchedulerEventPublisher,
    SchedulerConfiguration,

    SchedulerAIAdapter,
    SchedulerConfidenceScore,
    SchedulerExplanationGenerator,

    SchedulerPipeline,
  ],

  exports: [
    SchedulerService,
    SchedulerRepository,

    SchedulerEvaluator,
    SchedulerExecutor,
    SchedulerRegistry,

    SchedulerCache,
    SchedulerValidator,

    SchedulerLogger,
    SchedulerMetrics,
    SchedulerVersioning,
    SchedulerHealthMonitor,

    SchedulerStrategy,
    SchedulerResolver,
    SchedulerContextBuilder,

    SchedulerPriorityManager,
    SchedulerHistory,
    SchedulerAudit,

    SchedulerEventPublisher,
    SchedulerConfiguration,

    SchedulerAIAdapter,
    SchedulerConfidenceScore,
    SchedulerExplanationGenerator,

    SchedulerPipeline,
  ],
})
export class SchedulerModule {}
