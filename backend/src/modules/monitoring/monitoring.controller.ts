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

import { MonitoringService } from './monitoring.service';

import { CreateMonitoringDto } from './dto/create-monitoring.dto';
import { UpdateMonitoringDto } from './dto/update-monitoring.dto';
import { MonitoringQueryDto } from './dto/monitoring-query.dto';

@Controller('monitoring')
export class MonitoringController {
  constructor(
    private readonly service: MonitoringService,
  ) {}

  @Post()
  create(
    @Body() dto: CreateMonitoringDto,
  ) {
    return this.service.create(dto);
  }

  @Get()
  findAll(
    @Query() query: MonitoringQueryDto,
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
    @Body() dto: UpdateMonitoringDto,
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
