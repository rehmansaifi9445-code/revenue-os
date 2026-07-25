import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';

import { CreateEventDto } from './dto/create-event.dto';
import { UpdateEventDto } from './dto/update-event.dto';
import { EventQueryDto } from './dto/event-query.dto';

@Injectable()
export class EventRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: CreateEventDto) {
    return this.prisma.event.create({
      data,
    });
  }

  async findAll(query: EventQueryDto) {
    const {
      businessId,
      eventType,
      sourceModule,
      entityType,
      entityId,
      status,
      page = 1,
      limit = 10,
      sortBy = 'createdAt',
      order = 'desc',
    } = query;

    return this.prisma.event.findMany({
      where: {
        ...(businessId && { businessId }),
        ...(eventType && { eventType }),
        ...(sourceModule && { sourceModule }),
        ...(entityType && { entityType }),
        ...(entityId && { entityId }),
        ...(status && { status }),
      },
      orderBy: {
        [sortBy]: order,
      },
      skip: (page - 1) * limit,
      take: limit,
    });
  }

  async findById(id: string) {
    return this.prisma.event.findUnique({
      where: { id },
    });
  }

  async update(id: string, data: UpdateEventDto) {
    return this.prisma.event.update({
      where: { id },
      data,
    });
  }

  async delete(id: string) {
    return this.prisma.event.delete({
      where: { id },
    });
  }

  async count(query: EventQueryDto) {
    const {
      businessId,
      eventType,
      sourceModule,
      entityType,
      entityId,
      status,
    } = query;

    return this.prisma.event.count({
      where: {
        ...(businessId && { businessId }),
        ...(eventType && { eventType }),
        ...(sourceModule && { sourceModule }),
        ...(entityType && { entityType }),
        ...(entityId && { entityId }),
        ...(status && { status }),
      },
    });
  }
}
