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

import { SchedulerService } from './scheduler.service';

import { CreateSchedulerDto } from './dto/create-scheduler.dto';
import { UpdateSchedulerDto } from './dto/update-scheduler.dto';
import { SchedulerQueryDto } from './dto/scheduler-query.dto';

@Controller('schedulers')
export class SchedulerController {
  constructor(
    private readonly service: SchedulerService,
  ) {}

  @Post()
  create(
    @Body() dto: CreateSchedulerDto,
  ) {
    return this.service.create(dto);
  }

  @Get()
  findAll(
    @Query() query: SchedulerQueryDto,
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
    @Body() dto: UpdateSchedulerDto,
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
