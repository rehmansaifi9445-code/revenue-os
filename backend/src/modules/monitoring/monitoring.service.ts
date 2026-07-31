import {
  Injectable,
  NotFoundException,
} from '@nestjs/common';

import { MonitoringRepository } from './monitoring.repository';

import { CreateMonitoringDto } from './dto/create-monitoring.dto';
import { UpdateMonitoringDto } from './dto/update-monitoring.dto';
import { MonitoringQueryDto } from './dto/monitoring-query.dto';

@Injectable()
export class MonitoringService {
  constructor(
    private readonly repository: MonitoringRepository,
  ) {}

  create(dto: CreateMonitoringDto) {
    return this.repository.create(dto);
  }

  async findAll(query: MonitoringQueryDto) {
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
    const monitoring =
      await this.repository.findById(id);

    if (!monitoring) {
      throw new NotFoundException(
        'Monitoring record not found',
      );
    }

    return monitoring;
  }

  async update(
    id: string,
    dto: UpdateMonitoringDto,
  ) {
    await this.findOne(id);

    return this.repository.update(id, dto);
  }

  async remove(id: string) {
    await this.findOne(id);

    return this.repository.delete(id);
  }
}
