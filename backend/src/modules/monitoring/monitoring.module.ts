import { Module } from '@nestjs/common';

import { PrismaModule } from '../../prisma/prisma.module';

import { MonitoringController } from './monitoring.controller';

import { MonitoringService } from './monitoring.service';
import { MonitoringRepository } from './monitoring.repository';

@Module({
  imports: [
    PrismaModule,
  ],

  controllers: [
    MonitoringController,
  ],

  providers: [
    MonitoringService,
    MonitoringRepository,
  ],

  exports: [
    MonitoringService,
    MonitoringRepository,
  ],
})
export class MonitoringModule {}
