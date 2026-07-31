import { Module } from '@nestjs/common';

import { PrismaModule } from '../../prisma/prisma.module';

import { SecurityController } from './security.controller';

import { SecurityService } from './security.service';
import { SecurityRepository } from './security.repository';

@Module({
  imports: [
    PrismaModule,
  ],

  controllers: [
    SecurityController,
  ],

  providers: [
    SecurityService,
    SecurityRepository,
  ],

  exports: [
    SecurityService,
    SecurityRepository,
  ],
})
export class SecurityModule {}
