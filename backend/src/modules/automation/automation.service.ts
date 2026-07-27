import {
  Injectable,
  NotFoundException,
} from '@nestjs/common';

import { AutomationRepository } from './automation.repository';

import { CreateAutomationDto } from './dto/create-automation.dto';
import { UpdateAutomationDto } from './dto/update-automation.dto';
import { AutomationQueryDto } from './dto/automation-query.dto';

@Injectable()
export class AutomationService {
  constructor(
    private readonly repository: AutomationRepository,
  ) {}

  create(dto: CreateAutomationDto) {
    return this.repository.create(dto);
  }

  async findAll(query: AutomationQueryDto) {
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
    const automation =
      await this.repository.findById(id);

    if (!automation) {
      throw new NotFoundException(
        'Automation not found',
      );
    }

    return automation;
  }

  async update(
    id: string,
    dto: UpdateAutomationDto,
  ) {
    await this.findOne(id);

    return this.repository.update(id, dto);
  }

  async remove(id: string) {
    await this.findOne(id);

    return this.repository.delete(id);
  }
}
