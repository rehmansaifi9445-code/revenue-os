import {
  Injectable,
  NotFoundException,
} from '@nestjs/common';

import { WorkflowRepository } from './workflow.repository';

import { CreateWorkflowDto } from './dto/create-workflow.dto';
import { UpdateWorkflowDto } from './dto/update-workflow.dto';
import { WorkflowQueryDto } from './dto/workflow-query.dto';

@Injectable()
export class WorkflowService {
  constructor(
    private readonly workflowRepository: WorkflowRepository,
  ) {}

  async createWorkflow(dto: CreateWorkflowDto) {
    const workflow =
      await this.workflowRepository.createWorkflow(dto);

    return {
      success: true,
      message: 'Workflow created successfully.',
      data: workflow,
    };
  }

  async getWorkflow(workflowId: string) {
    const workflow =
      await this.workflowRepository.getWorkflow(workflowId);

    if (!workflow) {
      throw new NotFoundException(
        'Workflow not found.',
      );
    }

    return {
      success: true,
      data: workflow,
    };
  }

  async updateWorkflow(
    workflowId: string,
    dto: UpdateWorkflowDto,
  ) {
    await this.getWorkflow(workflowId);

    const workflow =
      await this.workflowRepository.updateWorkflow(
        workflowId,
        dto,
      );

    return {
      success: true,
      message: 'Workflow updated successfully.',
      data: workflow,
    };
  }

  async deleteWorkflow(workflowId: string) {
    await this.getWorkflow(workflowId);

    await this.workflowRepository.deleteWorkflow(
      workflowId,
    );

    return {
      success: true,
      message: 'Workflow deleted successfully.',
    };
  }

  async searchWorkflows(
    query: WorkflowQueryDto,
  ) {
    const workflows =
      await this.workflowRepository.searchWorkflows(
        query,
      );

    return {
      success: true,
      count: workflows.length,
      data: workflows,
    };
  }
}
