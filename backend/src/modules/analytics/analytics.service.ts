import {
  Injectable,
  NotFoundException,
} from '@nestjs/common';

import { AnalyticsRepository } from './analytics.repository';

import { CreateAnalyticsDto } from './dto/create-analytics.dto';
import { UpdateAnalyticsDto } from './dto/update-analytics.dto';
import { AnalyticsQueryDto } from './dto/analytics-query.dto';

@Injectable()
export class AnalyticsService {
  constructor(
    private readonly repository: AnalyticsRepository,
  ) {}

  create(dto: CreateAnalyticsDto) {
    return this.repository.create(dto);
  }

  async findAll(query: AnalyticsQueryDto) {
    const data =
      await this.repository.findAll(query);

    const total =
      await this.repository.count(query);

    return {
      data,
      total,
      page: query.page ?? 1,
      limit: query.limit ?? 10,
    };
  }

  async findOne(id: string) {
    const analytics =
      await this.repository.findById(id);

    if (!analytics) {
      throw new NotFoundException(
        'Analytics record not found',
      );
    }

    return analytics;
  }

  async update(
    id: string,
    dto: UpdateAnalyticsDto,
  ) {
    await this.findOne(id);

    return this.repository.update(id, dto);
  }

  async remove(id: string) {
    await this.findOne(id);

    return this.repository.delete(id);
  }
}
