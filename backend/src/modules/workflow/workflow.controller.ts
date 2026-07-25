import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';

import { WorkflowService } from './workflow.service';

import { CreateWorkflowDto } from './dto/create-workflow.dto';
import { UpdateWorkflowDto } from './dto/update-workflow.dto';
import { WorkflowQueryDto } from './dto/workflow-query.dto';

@Controller('workflows')
export class WorkflowController {
  constructor(
    private readonly workflowService: WorkflowService,
  ) {}

  @Post()
  createWorkflow(
    @Body() dto: CreateWorkflowDto,
  ) {
    return this.workflowService.createWorkflow(dto);
  }

  @Get(':id')
  getWorkflow(
    @Param('id') workflowId: string,
  ) {
    return this.workflowService.getWorkflow(workflowId);
  }

  @Patch(':id')
  updateWorkflow(
    @Param('id') workflowId: string,
    @Body() dto: UpdateWorkflowDto,
  ) {
    return this.workflowService.updateWorkflow(
      workflowId,
      dto,
    );
  }

  @Delete(':id')
  deleteWorkflow(
    @Param('id') workflowId: string,
  ) {
    return this.workflowService.deleteWorkflow(workflowId);
  }

  @Get()
  searchWorkflows(
    @Query() query: WorkflowQueryDto,
  ) {
    return this.workflowService.searchWorkflows(query);
  }
}
