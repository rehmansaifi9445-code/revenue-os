import { Injectable } from '@nestjs/common';

import { PrismaService } from '../../prisma/prisma.service';

import { CreateSchedulerDto } from './dto/create-scheduler.dto';
import { UpdateSchedulerDto } from './dto/update-scheduler.dto';
import { SchedulerQueryDto } from './dto/scheduler-query.dto';

@Injectable()
export class SchedulerRepository {
  constructor(
    private readonly prisma: PrismaService,
  ) {}

  create(data: CreateSchedulerDto) {
    return this.prisma.scheduler.create({
      data,
    });
  }

  findAll(query: SchedulerQueryDto) {
    const {
      businessId,
      jobType,
      status,
      isActive,
      page = 1,
      limit = 10,
    } = query;

    return this.prisma.scheduler.findMany({
      where: {
        ...(businessId && { businessId }),
        ...(jobType && { jobType }),
        ...(status && { status }),
        ...(isActive !== undefined && { isActive }),
      },
      skip: (page - 1) * limit,
      take: limit,
      orderBy: {
        executeAt: 'asc',
      },
    });
  }

  findById(id: string) {
    return this.prisma.scheduler.findUnique({
      where: { id },
    });
  }

  update(id: string, data: UpdateSchedulerDto) {
    return this.prisma.scheduler.update({
      where: { id },
      data,
    });
  }

  delete(id: string) {
    return this.prisma.scheduler.delete({
      where: { id },
    });
  }

  count(query: SchedulerQueryDto) {
    const {
      businessId,
      jobType,
      status,
      isActive,
    } = query;

    return this.prisma.scheduler.count({
      where: {
        ...(businessId && { businessId }),
        ...(jobType && { jobType }),
        ...(status && { status }),
        ...(isActive !== undefined && { isActive }),
      },
    });
  }
}
