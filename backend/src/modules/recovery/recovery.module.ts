import { Module } from '@nestjs/common';

import { PrismaModule } from '../../database/prisma/prisma.module';

import { RecoveryController } from './recovery.controller';
import { RecoveryService } from './recovery.service';
import { RecoveryRepository } from './recovery.repository';

@Module({
  imports: [
    PrismaModule,
  ],
  controllers: [
    RecoveryController,
  ],
  providers: [
    RecoveryService,
    RecoveryRepository,
  ],
  exports: [
    RecoveryService,
    RecoveryRepository,
  ],
})
export class RecoveryModule {}
