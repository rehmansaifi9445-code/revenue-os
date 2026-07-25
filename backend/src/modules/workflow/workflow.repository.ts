import { Injectable } from '@nestjs/common';

import { PrismaService } from '../../database/prisma/prisma.service';

import { CreateWorkflowDto } from './dto/create-workflow.dto';
import { UpdateWorkflowDto } from './dto/update-workflow.dto';
import { WorkflowQueryDto } from './dto/workflow-query.dto';

@Injectable()
export class WorkflowRepository {
  constructor(
    private readonly prisma: PrismaService,
  ) {}

  async createWorkflow(dto: CreateWorkflowDto) {
    return this.prisma.workflow.create({
      data: dto,
    });
  }

  async getWorkflow(workflowId: string) {
    return this.prisma.workflow.findUnique({
      where: {
        id: workflowId,
      },
      include: {
        business: true,
      },
    });
  }

  async updateWorkflow(
    workflowId: string,
    dto: UpdateWorkflowDto,
  ) {
    return this.prisma.workflow.update({
      where: {
        id: workflowId,
      },
      data: dto,
    });
  }

  async deleteWorkflow(workflowId: string) {
    return this.prisma.workflow.delete({
      where: {
        id: workflowId,
      },
    });
  }

  async searchWorkflows(
    query: WorkflowQueryDto,
  ) {
    return this.prisma.workflow.findMany({
      where: {
        ...(query.status && {
          status: query.status,
        }),
      },

      include: {
        business: true,
      },

      skip: query.skip,
      take: query.take,

      orderBy: {
        createdAt: 'desc',
      },
    });
  }
}
