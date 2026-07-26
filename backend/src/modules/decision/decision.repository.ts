import { Injectable } from '@nestjs/common';

import { PrismaService } from '../../prisma/prisma.service';

import { CreateDecisionDto } from './dto/create-decision.dto';
import { UpdateDecisionDto } from './dto/update-decision.dto';
import { DecisionQueryDto } from './dto/decision-query.dto';

@Injectable()
export class DecisionRepository {
  constructor(
    private readonly prisma: PrismaService,
  ) {}

  async create(data: CreateDecisionDto) {
    return this.prisma.decision.create({
      data,
    });
  }

  async findAll(query: DecisionQueryDto) {
    const {
      businessId,
      decisionType,
      isApproved,
      page = 1,
      limit = 10,
    } = query;

    return this.prisma.decision.findMany({
      where: {
        ...(businessId && { businessId }),
        ...(decisionType && { decisionType }),
        ...(isApproved !== undefined && {
          isApproved,
        }),
      },
      skip: (page - 1) * limit,
      take: limit,
    });
  }

  async findById(id: string) {
    return this.prisma.decision.findUnique({
      where: { id },
    });
  }

  async update(
    id: string,
    data: UpdateDecisionDto,
  ) {
    return this.prisma.decision.update({
      where: { id },
      data,
    });
  }

  async delete(id: string) {
    return this.prisma.decision.delete({
      where: { id },
    });
  }

  async count(query: DecisionQueryDto) {
    const {
      businessId,
      decisionType,
      isApproved,
    } = query;

    return this.prisma.decision.count({
      where: {
        ...(businessId && { businessId }),
        ...(decisionType && { decisionType }),
        ...(isApproved !== undefined && {
          isApproved,
        }),
      },
    });
  }
}
