import {
  Controller,
  Get,
  Post,
  Patch,
  Delete,
  Body,
  Param,
  Query,
} from '@nestjs/common';

import { RuleService } from './rule.service';

import { CreateRuleDto } from './dto/create-rule.dto';
import { UpdateRuleDto } from './dto/update-rule.dto';
import { RuleQueryDto } from './dto/rule-query.dto';

@Controller('rules')
export class RuleController {
  constructor(
    private readonly ruleService: RuleService,
  ) {}

  @Post()
  create(@Body() createRuleDto: CreateRuleDto) {
    return this.ruleService.create(createRuleDto);
  }

  @Get()
  findAll(@Query() query: RuleQueryDto) {
    return this.ruleService.findAll(query);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.ruleService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateRuleDto: UpdateRuleDto,
  ) {
    return this.ruleService.update(id, updateRuleDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.ruleService.remove(id);
  }
}
