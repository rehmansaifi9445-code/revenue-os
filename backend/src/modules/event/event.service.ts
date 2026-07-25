import { Injectable, NotFoundException } from '@nestjs/common';

import { EventRepository } from './event.repository';

import { CreateEventDto } from './dto/create-event.dto';
import { UpdateEventDto } from './dto/update-event.dto';
import { EventQueryDto } from './dto/event-query.dto';

@Injectable()
export class EventService {
  constructor(
    private readonly eventRepository: EventRepository,
  ) {}

  async create(createEventDto: CreateEventDto) {
    return this.eventRepository.create(createEventDto);
  }

  async findAll(query: EventQueryDto) {
    const data = await this.eventRepository.findAll(query);
    const total = await this.eventRepository.count(query);

    return {
      data,
      total,
      page: query.page ?? 1,
      limit: query.limit ?? 10,
    };
  }

  async findOne(id: string) {
    const event = await this.eventRepository.findById(id);

    if (!event) {
      throw new NotFoundException('Event not found');
    }

    return event;
  }

  async update(id: string, updateEventDto: UpdateEventDto) {
    await this.findOne(id);

    return this.eventRepository.update(id, updateEventDto);
  }

  async remove(id: string) {
    await this.findOne(id);

    return this.eventRepository.delete(id);
  }
}
