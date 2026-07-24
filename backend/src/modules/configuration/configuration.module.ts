import { Module } from '@nestjs/common';

import { PrismaModule } from '../../database/prisma/prisma.module';

import { ConfigurationController } from './configuration.controller';
import { ConfigurationService } from './configuration.service';
import { ConfigurationRepository } from './configuration.repository';

@Module({
  imports: [
    PrismaModule,
  ],
  controllers: [
    ConfigurationController,
  ],
  providers: [
    ConfigurationService,
    ConfigurationRepository,
  ],
  exports: [
    ConfigurationService,
    ConfigurationRepository,
  ],
})
export class ConfigurationModule {}
