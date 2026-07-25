import { Module } from '@nestjs/common';

import { PrismaModule } from '../../database/prisma/prisma.module';

import { WorkflowController } from './workflow.controller';
import { WorkflowService } from './workflow.service';
import { WorkflowRepository } from './workflow.repository';

@Module({
  imports: [
    PrismaModule,
  ],
  controllers: [
    WorkflowController,
  ],
  providers: [
    WorkflowService,
    WorkflowRepository,
  ],
  exports: [
    WorkflowService,
    WorkflowRepository,
  ],
})
export class WorkflowModule {}
