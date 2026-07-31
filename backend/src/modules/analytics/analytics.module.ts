import { Module } from '@nestjs/common';

import { PrismaModule } from '../../prisma/prisma.module';
import { EventModule } from '../event/event.module';

import { AnalyticsController } from './analytics.controller';

import { AnalyticsService } from './analytics.service';
import { AnalyticsRepository } from './analytics.repository';

import { AnalyticsEvaluator } from './analytics.evaluator';
import { AnalyticsExecutor } from './analytics.executor';
import { AnalyticsRegistry } from './analytics.registry';

import { AnalyticsCache } from './analytics.cache';
import { AnalyticsValidator } from './analytics.validator';

import { AnalyticsLogger } from './analytics.logger';
import { AnalyticsMetrics } from './analytics.metrics';
import { AnalyticsVersioning } from './analytics.versioning';
import { AnalyticsHealthMonitor } from './analytics.health-monitor';

import { AnalyticsStrategy } from './analytics.strategy';
import { AnalyticsResolver } from './analytics.resolver';
import { AnalyticsContextBuilder } from './analytics.context-builder';

import { AnalyticsPriorityManager } from './analytics.priority-manager';
import { AnalyticsHistory } from './analytics.history';
import { AnalyticsAudit } from './analytics.audit';

import { AnalyticsEventPublisher } from './analytics.event-publisher';
import { AnalyticsConfiguration } from './analytics.configuration';

import { AnalyticsAIAdapter } from './analytics.ai-adapter';
import { AnalyticsConfidenceScore } from './analytics.confidence-score';
import { AnalyticsExplanationGenerator } from './analytics.explanation-generator';

import { AnalyticsPipeline } from './analytics.pipeline';

@Module({
  imports: [
    PrismaModule,
    EventModule,
  ],

  controllers: [
    AnalyticsController,
  ],

  providers: [
    AnalyticsService,
    AnalyticsRepository,

    AnalyticsEvaluator,
    AnalyticsExecutor,
    AnalyticsRegistry,

    AnalyticsCache,
    AnalyticsValidator,

    AnalyticsLogger,
    AnalyticsMetrics,
    AnalyticsVersioning,
    AnalyticsHealthMonitor,

    AnalyticsStrategy,
    AnalyticsResolver,
    AnalyticsContextBuilder,

    AnalyticsPriorityManager,
    AnalyticsHistory,
    AnalyticsAudit,

    AnalyticsEventPublisher,
    AnalyticsConfiguration,

    AnalyticsAIAdapter,
    AnalyticsConfidenceScore,
    AnalyticsExplanationGenerator,

    AnalyticsPipeline,
  ],

  exports: [
    AnalyticsService,
    AnalyticsRepository,

    AnalyticsEvaluator,
    AnalyticsExecutor,
    AnalyticsRegistry,

    AnalyticsCache,
    AnalyticsValidator,

    AnalyticsLogger,
    AnalyticsMetrics,
    AnalyticsVersioning,
    AnalyticsHealthMonitor,

    AnalyticsStrategy,
    AnalyticsResolver,
    AnalyticsContextBuilder,

    AnalyticsPriorityManager,
    AnalyticsHistory,
    AnalyticsAudit,

    AnalyticsEventPublisher,
    AnalyticsConfiguration,

    AnalyticsAIAdapter,
    AnalyticsConfidenceScore,
    AnalyticsExplanationGenerator,

    AnalyticsPipeline,
  ],
})
export class AnalyticsModule {}
