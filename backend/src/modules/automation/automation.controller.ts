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

import { AutomationService } from './automation.service';

import { CreateAutomationDto } from './dto/create-automation.dto';
import { UpdateAutomationDto } from './dto/update-automation.dto';
import { AutomationQueryDto } from './dto/automation-query.dto';

@Controller('automations')
export class AutomationController {
  constructor(
    private readonly service: AutomationService,
  ) {}

  @Post()
  create(@Body() dto: CreateAutomationDto) {
    return this.service.create(dto);
  }

  @Get()
  findAll(
    @Query() query: AutomationQueryDto,
  ) {
    return this.service.findAll(query);
  }

  @Get(':id')
  findOne(
    @Param('id') id: string,
  ) {
    return this.service.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() dto: UpdateAutomationDto,
  ) {
    return this.service.update(id, dto);
  }

  @Delete(':id')
  remove(
    @Param('id') id: string,
  ) {
    return this.service.remove(id);
  }
}
