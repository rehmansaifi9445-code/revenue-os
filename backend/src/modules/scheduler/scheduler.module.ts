import { Module } from '@nestjs/common';

import { PrismaModule } from '../../prisma/prisma.module';

import { SchedulerController } from './scheduler.controller';

import { SchedulerService } from './scheduler.service';
import { SchedulerRepository } from './scheduler.repository';

@Module({
  imports: [
    PrismaModule,
  ],

  controllers: [
    SchedulerController,
  ],

  providers: [
    SchedulerService,
    SchedulerRepository,
  ],

  exports: [
    SchedulerService,
    SchedulerRepository,
  ],
})
export class SchedulerModule {}
