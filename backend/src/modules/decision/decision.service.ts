import {
  Injectable,
  NotFoundException,
} from '@nestjs/common';

import { DecisionRepository } from './decision.repository';

import { CreateDecisionDto } from './dto/create-decision.dto';
import { UpdateDecisionDto } from './dto/update-decision.dto';
import { DecisionQueryDto } from './dto/decision-query.dto';

@Injectable()
export class DecisionService {
  constructor(
    private readonly repository: DecisionRepository,
  ) {}

  create(dto: CreateDecisionDto) {
    return this.repository.create(dto);
  }

  async findAll(query: DecisionQueryDto) {
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
    const decision =
      await this.repository.findById(id);

    if (!decision) {
      throw new NotFoundException(
        'Decision not found',
      );
    }

    return decision;
  }

  async update(
    id: string,
    dto: UpdateDecisionDto,
  ) {
    await this.findOne(id);

    return this.repository.update(id, dto);
  }

  async remove(id: string) {
    await this.findOne(id);

    return this.repository.delete(id);
  }
}
