import {
  Injectable,
  NotFoundException,
} from '@nestjs/common';

import { SchedulerRepository } from './scheduler.repository';

import { CreateSchedulerDto } from './dto/create-scheduler.dto';
import { UpdateSchedulerDto } from './dto/update-scheduler.dto';
import { SchedulerQueryDto } from './dto/scheduler-query.dto';

@Injectable()
export class SchedulerService {
  constructor(
    private readonly repository: SchedulerRepository,
  ) {}

  create(dto: CreateSchedulerDto) {
    return this.repository.create(dto);
  }

  async findAll(query: SchedulerQueryDto) {
    const data = await this.repository.findAll(query);
    const total = await this.repository.count(query);

    return {
      data,
      total,
      page: query.page ?? 1,
      limit: query.limit ?? 10,
    };
  }

  async findOne(id: string) {
    const scheduler =
      await this.repository.findById(id);

    if (!scheduler) {
      throw new NotFoundException(
        'Scheduler not found',
      );
    }

    return scheduler;
  }

  async update(
    id: string,
    dto: UpdateSchedulerDto,
  ) {
    await this.findOne(id);

    return this.repository.update(id, dto);
  }

  async remove(id: string) {
    await this.findOne(id);

    return this.repository.delete(id);
  }
}
