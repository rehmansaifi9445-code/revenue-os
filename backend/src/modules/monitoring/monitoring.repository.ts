import { Injectable } from '@nestjs/common';

import { PrismaService } from '../../prisma/prisma.service';

import { CreateMonitoringDto } from './dto/create-monitoring.dto';
import { UpdateMonitoringDto } from './dto/update-monitoring.dto';
import { MonitoringQueryDto } from './dto/monitoring-query.dto';

@Injectable()
export class MonitoringRepository {
  constructor(
    private readonly prisma: PrismaService,
  ) {}

  create(data: CreateMonitoringDto) {
    return this.prisma.monitoring.create({
      data,
    });
  }

  findAll(query: MonitoringQueryDto) {
    const {
      businessId,
      service,
      status,
      page = 1,
      limit = 10,
    } = query;

    return this.prisma.monitoring.findMany({
      where: {
        ...(businessId && { businessId }),
        ...(service && { service }),
        ...(status && { status }),
      },
      skip: (page - 1) * limit,
      take: limit,
      orderBy: {
        checkedAt: 'desc',
      },
    });
  }

  findById(id: string) {
    return this.prisma.monitoring.findUnique({
      where: { id },
    });
  }

  update(
    id: string,
    data: UpdateMonitoringDto,
  ) {
    return this.prisma.monitoring.update({
      where: { id },
      data,
    });
  }

  delete(id: string) {
    return this.prisma.monitoring.delete({
      where: { id },
    });
  }

  count(query: MonitoringQueryDto) {
    const {
      businessId,
      service,
      status,
    } = query;

    return this.prisma.monitoring.count({
      where: {
        ...(businessId && { businessId }),
        ...(service && { service }),
        ...(status && { status }),
      },
    });
  }
}
