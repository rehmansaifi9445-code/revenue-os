import { Injectable } from '@nestjs/common';

import { PrismaService } from '../../prisma/prisma.service';

import { CreateAnalyticsDto } from './dto/create-analytics.dto';
import { UpdateAnalyticsDto } from './dto/update-analytics.dto';
import { AnalyticsQueryDto } from './dto/analytics-query.dto';

@Injectable()
export class AnalyticsRepository {
  constructor(
    private readonly prisma: PrismaService,
  ) {}

  create(data: CreateAnalyticsDto) {
    return this.prisma.analytics.create({
      data,
    });
  }

  findAll(query: AnalyticsQueryDto) {
    const {
      businessId,
      module,
      metricName,
      page = 1,
      limit = 10,
    } = query;

    return this.prisma.analytics.findMany({
      where: {
        ...(businessId && { businessId }),
        ...(module && { module }),
        ...(metricName && { metricName }),
      },
      skip: (page - 1) * limit,
      take: limit,
      orderBy: {
        recordedAt: 'desc',
      },
    });
  }

  findById(id: string) {
    return this.prisma.analytics.findUnique({
      where: { id },
    });
  }

  update(
    id: string,
    data: UpdateAnalyticsDto,
  ) {
    return this.prisma.analytics.update({
      where: { id },
      data,
    });
  }

  delete(id: string) {
    return this.prisma.analytics.delete({
      where: { id },
    });
  }

  count(query: AnalyticsQueryDto) {
    const {
      businessId,
      module,
      metricName,
    } = query;

    return this.prisma.analytics.count({
      where: {
        ...(businessId && { businessId }),
        ...(module && { module }),
        ...(metricName && { metricName }),
      },
    });
  }
}
