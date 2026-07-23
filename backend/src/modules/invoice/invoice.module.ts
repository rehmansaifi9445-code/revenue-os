import { Module } from '@nestjs/common';

import { PrismaModule } from '../../database/prisma/prisma.module';

import { InvoiceController } from './invoice.controller';
import { InvoiceService } from './invoice.service';
import { InvoiceRepository } from './invoice.repository';

@Module({
  imports: [
    PrismaModule,
  ],
  controllers: [
    InvoiceController,
  ],
  providers: [
    InvoiceService,
    InvoiceRepository,
  ],
  exports: [
    InvoiceService,
    InvoiceRepository,
  ],
})
export class InvoiceModule {}
