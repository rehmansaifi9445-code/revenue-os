import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';

import { CreateRuleDto } from './dto/create-rule.dto';
import { UpdateRuleDto } from './dto/update-rule.dto';
import { RuleQueryDto } from './dto/rule-query.dto';

@Injectable()
export class RuleRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: CreateRuleDto) {
    return this.prisma.rule.create({
      data,
    });
  }

  async findAll(query: RuleQueryDto) {
    const {
      businessId,
      ruleType,
      name,
      isActive,
      page = 1,
      limit = 10,
      sortBy = 'priority',
      order = 'asc',
    } = query;

    return this.prisma.rule.findMany({
      where: {
        ...(businessId && { businessId }),
        ...(ruleType && { ruleType }),
        ...(name && { name: { contains: name } }),
        ...(isActive !== undefined && { isActive }),
      },
      orderBy: {
        [sortBy]: order,
      },
      skip: (page - 1) * limit,
      take: limit,
    });
  }

  async findById(id: string) {
    return this.prisma.rule.findUnique({
      where: { id },
    });
  }

  async update(id: string, data: UpdateRuleDto) {
    return this.prisma.rule.update({
      where: { id },
      data,
    });
  }

  async delete(id: string) {
    return this.prisma.rule.delete({
      where: { id },
    });
  }

  async count(query: RuleQueryDto) {
    const {
      businessId,
      ruleType,
      name,
      isActive,
    } = query;

    return this.prisma.rule.count({
      where: {
        ...(businessId && { businessId }),
        ...(ruleType && { ruleType }),
        ...(name && { name: { contains: name } }),
        ...(isActive !== undefined && { isActive }),
      },
    });
  }
}
