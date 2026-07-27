import { Injectable } from '@nestjs/common';

import { PrismaService } from '../../prisma/prisma.service';

import { CreateAutomationDto } from './dto/create-automation.dto';
import { UpdateAutomationDto } from './dto/update-automation.dto';
import { AutomationQueryDto } from './dto/automation-query.dto';

@Injectable()
export class AutomationRepository {
  constructor(
    private readonly prisma: PrismaService,
  ) {}

  create(data: CreateAutomationDto) {
    return this.prisma.automation.create({
      data,
    });
  }

  findAll(query: AutomationQueryDto) {
    const {
      businessId,
      automationType,
      status,
      isActive,
      page = 1,
      limit = 10,
    } = query;

    return this.prisma.automation.findMany({
      where: {
        ...(businessId && { businessId }),
        ...(automationType && { automationType }),
        ...(status && { status }),
        ...(isActive !== undefined && { isActive }),
      },
      skip: (page - 1) * limit,
      take: limit,
    });
  }

  findById(id: string) {
    return this.prisma.automation.findUnique({
      where: { id },
    });
  }

  update(
    id: string,
    data: UpdateAutomationDto,
  ) {
    return this.prisma.automation.update({
      where: { id },
      data,
    });
  }

  delete(id: string) {
    return this.prisma.automation.delete({
      where: { id },
    });
  }

  count(query: AutomationQueryDto) {
    const {
      businessId,
      automationType,
      status,
      isActive,
    } = query;

    return this.prisma.automation.count({
      where: {
        ...(businessId && { businessId }),
        ...(automationType && { automationType }),
        ...(status && { status }),
        ...(isActive !== undefined && { isActive }),
      },
    });
  }
}
