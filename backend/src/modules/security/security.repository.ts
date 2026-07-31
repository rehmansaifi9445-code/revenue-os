import { Injectable } from '@nestjs/common';

import { PrismaService } from '../../prisma/prisma.service';

import { CreateSecurityDto } from './dto/create-security.dto';
import { UpdateSecurityDto } from './dto/update-security.dto';
import { SecurityQueryDto } from './dto/security-query.dto';

@Injectable()
export class SecurityRepository {
  constructor(
    private readonly prisma: PrismaService,
  ) {}

  create(data: CreateSecurityDto) {
    return this.prisma.security.create({
      data,
    });
  }

  findAll(query: SecurityQueryDto) {
    const {
      businessId,
      actorId,
      resource,
      page = 1,
      limit = 10,
    } = query;

    return this.prisma.security.findMany({
      where: {
        ...(businessId && { businessId }),
        ...(actorId && { actorId }),
        ...(resource && { resource }),
      },
      skip: (page - 1) * limit,
      take: limit,
      orderBy: {
        createdAt: 'desc',
      },
    });
  }

  findById(id: string) {
    return this.prisma.security.findUnique({
      where: { id },
    });
  }

  update(
    id: string,
    data: UpdateSecurityDto,
  ) {
    return this.prisma.security.update({
      where: { id },
      data,
    });
  }

  delete(id: string) {
    return this.prisma.security.delete({
      where: { id },
    });
  }

  count(query: SecurityQueryDto) {
    const {
      businessId,
      actorId,
      resource,
    } = query;

    return this.prisma.security.count({
      where: {
        ...(businessId && { businessId }),
        ...(actorId && { actorId }),
        ...(resource && { resource }),
      },
    });
  }
}
