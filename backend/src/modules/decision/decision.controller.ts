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

import { DecisionService } from './decision.service';

import { CreateDecisionDto } from './dto/create-decision.dto';
import { UpdateDecisionDto } from './dto/update-decision.dto';
import { DecisionQueryDto } from './dto/decision-query.dto';

@Controller('decisions')
export class DecisionController {
  constructor(
    private readonly service: DecisionService,
  ) {}

  @Post()
  create(
    @Body() dto: CreateDecisionDto,
  ) {
    return this.service.create(dto);
  }

  @Get()
  findAll(
    @Query() query: DecisionQueryDto,
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
    @Body() dto: UpdateDecisionDto,
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
