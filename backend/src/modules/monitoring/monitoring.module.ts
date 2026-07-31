import { Module } from '@nestjs/common';

import { PrismaModule } from '../../prisma/prisma.module';
import { EventModule } from '../event/event.module';

import { MonitoringController } from './monitoring.controller';

import { MonitoringService } from './monitoring.service';
import { MonitoringRepository } from './monitoring.repository';

import { MonitoringEvaluator } from './monitoring.evaluator';
import { MonitoringExecutor } from './monitoring.executor';
import { MonitoringRegistry } from './monitoring.registry';

import { MonitoringCache } from './monitoring.cache';
import { MonitoringValidator } from './monitoring.validator';

import { MonitoringLogger } from './monitoring.logger';
import { MonitoringMetrics } from './monitoring.metrics';
import { MonitoringVersioning } from './monitoring.versioning';
import { MonitoringHealthMonitor } from './monitoring.health-monitor';

import { MonitoringStrategy } from './monitoring.strategy';
import { MonitoringResolver } from './monitoring.resolver';
import { MonitoringContextBuilder } from './monitoring.context-builder';

import { MonitoringPriorityManager } from './monitoring.priority-manager';
import { MonitoringHistory } from './monitoring.history';
import { MonitoringAudit } from './monitoring.audit';

import { MonitoringEventPublisher } from './monitoring.event-publisher';
import { MonitoringConfiguration } from './monitoring.configuration';

import { MonitoringAIAdapter } from './monitoring.ai-adapter';
import { MonitoringConfidenceScore } from './monitoring.confidence-score';
import { MonitoringExplanationGenerator } from './monitoring.explanation-generator';

import { MonitoringPipeline } from './monitoring.pipeline';

@Module({
  imports: [
    PrismaModule,
    EventModule,
  ],

  controllers: [
    MonitoringController,
  ],

  providers: [
    MonitoringService,
    MonitoringRepository,

    MonitoringEvaluator,
    MonitoringExecutor,
    MonitoringRegistry,

    MonitoringCache,
    MonitoringValidator,

    MonitoringLogger,
    MonitoringMetrics,
    MonitoringVersioning,
    MonitoringHealthMonitor,

    MonitoringStrategy,
    MonitoringResolver,
    MonitoringContextBuilder,

    MonitoringPriorityManager,
    MonitoringHistory,
    MonitoringAudit,

    MonitoringEventPublisher,
    MonitoringConfiguration,

    MonitoringAIAdapter,
    MonitoringConfidenceScore,
    MonitoringExplanationGenerator,

    MonitoringPipeline,
  ],

  exports: [
    MonitoringService,
    MonitoringRepository,

    MonitoringEvaluator,
    MonitoringExecutor,
    MonitoringRegistry,

    MonitoringCache,
    MonitoringValidator,

    MonitoringLogger,
    MonitoringMetrics,
    MonitoringVersioning,
    MonitoringHealthMonitor,

    MonitoringStrategy,
    MonitoringResolver,
    MonitoringContextBuilder,

    MonitoringPriorityManager,
    MonitoringHistory,
    MonitoringAudit,

    MonitoringEventPublisher,
    MonitoringConfiguration,

    MonitoringAIAdapter,
    MonitoringConfidenceScore,
    MonitoringExplanationGenerator,

    MonitoringPipeline,
  ],
})
export class MonitoringModule {}
