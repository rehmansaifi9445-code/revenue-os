import { Module } from '@nestjs/common';

import { PrismaModule } from '../../database/prisma/prisma.module';

import { BusinessController } from './business.controller';
import { BusinessService } from './business.service';
import { BusinessRepository } from './business.repository';

@Module({
  imports: [
    PrismaModule,
  ],
  controllers: [
    BusinessController,
  ],
  providers: [
    BusinessService,
    BusinessRepository,
  ],
  exports: [
    BusinessService,
    BusinessRepository,
  ],
})
export class BusinessModule {}
