import { Module } from '@nestjs/common';

import { PrismaModule } from '../../prisma/prisma.module';

import { RuleController } from './rule.controller';
import { RuleService } from './rule.service';
import { RuleRepository } from './rule.repository';

@Module({
  imports: [PrismaModule],

  controllers: [RuleController],

  providers: [
    RuleService,
    RuleRepository,
  ],

  exports: [
    RuleService,
    RuleRepository,
  ],
})
export class RuleModule {}
