import { Module } from '@nestjs/common';

import { PrismaModule } from '../../database/prisma/prisma.module';

import { CustomerController } from './customer.controller';
import { CustomerService } from './customer.service';
import { CustomerRepository } from './customer.repository';

@Module({
  imports: [
    PrismaModule,
  ],
  controllers: [
    CustomerController,
  ],
  providers: [
    CustomerService,
    CustomerRepository,
  ],
  exports: [
    CustomerService,
    CustomerRepository,
  ],
})
export class CustomerModule {}
