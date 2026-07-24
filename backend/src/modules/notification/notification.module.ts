import { Module } from '@nestjs/common';

import { PrismaModule } from '../../database/prisma/prisma.module';

import { NotificationController } from './notification.controller';
import { NotificationService } from './notification.service';
import { NotificationRepository } from './notification.repository';

@Module({
  imports: [
    PrismaModule,
  ],
  controllers: [
    NotificationController,
  ],
  providers: [
    NotificationService,
    NotificationRepository,
  ],
  exports: [
    NotificationService,
    NotificationRepository,
  ],
})
export class NotificationModule {}
