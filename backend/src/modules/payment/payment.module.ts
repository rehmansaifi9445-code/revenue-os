import { Module } from '@nestjs/common';

import { PaymentController } from './payment.controller';
import { PaymentService } from './payment.service';
import { PaymentRepository } from './payment.repository';

import { PrismaModule } from '../../database/prisma/prisma.module';

@Module({
  imports: [
    PrismaModule,
  ],

  controllers: [
    PaymentController,
  ],

  providers: [
    PaymentService,
    PaymentRepository,
  ],

  exports: [
    PaymentService,
  ],
})
export class PaymentModule {}
