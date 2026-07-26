import { Injectable, NotFoundException } from '@nestjs/common';

import { RuleRepository } from './rule.repository';

import { CreateRuleDto } from './dto/create-rule.dto';
import { UpdateRuleDto } from './dto/update-rule.dto';
import { RuleQueryDto } from './dto/rule-query.dto';

@Injectable()
export class RuleService {
  constructor(
    private readonly ruleRepository: RuleRepository,
  ) {}

  async create(createRuleDto: CreateRuleDto) {
    return this.ruleRepository.create(createRuleDto);
  }

  async findAll(query: RuleQueryDto) {
    const data = await this.ruleRepository.findAll(query);
    const total = await this.ruleRepository.count(query);

    return {
      data,
      total,
      page: query.page ?? 1,
      limit: query.limit ?? 10,
    };
  }

  async findOne(id: string) {
    const rule = await this.ruleRepository.findById(id);

    if (!rule) {
      throw new NotFoundException('Rule not found');
    }

    return rule;
  }

  async update(id: string, updateRuleDto: UpdateRuleDto) {
    await this.findOne(id);

    return this.ruleRepository.update(id, updateRuleDto);
  }

  async remove(id: string) {
    await this.findOne(id);

    return this.ruleRepository.delete(id);
  }
}
