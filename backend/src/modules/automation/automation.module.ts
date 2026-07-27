import { Module } from '@nestjs/common';

import { PrismaModule } from '../../prisma/prisma.module';

import { AutomationController } from './automation.controller';
import { AutomationService } from './automation.service';
import { AutomationRepository } from './automation.repository';

@Module({
  imports: [PrismaModule],

  controllers: [AutomationController],

  providers: [
    AutomationService,
    AutomationRepository,
  ],

  exports: [
    AutomationService,
    AutomationRepository,
  ],
})
export class AutomationModule {}
