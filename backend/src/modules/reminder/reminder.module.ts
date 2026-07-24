import { Module } from '@nestjs/common';

import { PrismaModule } from '../../database/prisma/prisma.module';

import { ReminderController } from './reminder.controller';
import { ReminderService } from './reminder.service';
import { ReminderRepository } from './reminder.repository';

@Module({
  imports: [
    PrismaModule,
  ],
  controllers: [
    ReminderController,
  ],
  providers: [
    ReminderService,
    ReminderRepository,
  ],
  exports: [
    ReminderService,
    ReminderRepository,
  ],
})
export class ReminderModule {}
