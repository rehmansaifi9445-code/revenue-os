import {
  Injectable,
  NotFoundException,
} from '@nestjs/common';

import { SecurityRepository } from './security.repository';

import { CreateSecurityDto } from './dto/create-security.dto';
import { UpdateSecurityDto } from './dto/update-security.dto';
import { SecurityQueryDto } from './dto/security-query.dto';

@Injectable()
export class SecurityService {
  constructor(
    private readonly repository: SecurityRepository,
  ) {}

  create(dto: CreateSecurityDto) {
    return this.repository.create(dto);
  }

  async findAll(query: SecurityQueryDto) {
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
    const security =
      await this.repository.findById(id);

    if (!security) {
      throw new NotFoundException(
        'Security record not found',
      );
    }

    return security;
  }

  async update(
    id: string,
    dto: UpdateSecurityDto,
  ) {
    await this.findOne(id);

    return this.repository.update(id, dto);
  }

  async remove(id: string) {
    await this.findOne(id);

    return this.repository.delete(id);
  }
}
