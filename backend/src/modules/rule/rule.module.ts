import { Module } from '@nestjs/common';

import { PrismaModule } from '../../prisma/prisma.module';

import { RuleController } from './rule.controller';
import { RuleService } from './rule.service';
import { RuleRepository } from './rule.repository';

import { RuleEvaluator } from './rule.evaluator';
import { RuleExecutor } from './rule.executor';
import { RuleRegistry } from './rule.registry';
import { RuleCache } from './rule.cache';
import { RuleValidator } from './rule.validator';
import { RuleLogger } from './rule.logger';
import { RuleMetrics } from './rule.metrics';
import { RuleVersioning } from './rule.versioning';

@Module({
  imports: [PrismaModule],

  controllers: [RuleController],

  providers: [
    RuleService,
    RuleRepository,

    RuleEvaluator,
    RuleExecutor,
    RuleRegistry,
    RuleCache,
    RuleValidator,
    RuleLogger,
    RuleMetrics,
    RuleVersioning,
  ],

  exports: [
    RuleService,
    RuleRepository,

    RuleEvaluator,
    RuleExecutor,
    RuleRegistry,
    RuleCache,
    RuleValidator,
    RuleLogger,
    RuleMetrics,
    RuleVersioning,
  ],
})
export class RuleModule {}
