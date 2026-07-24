import { Injectable } from '@nestjs/common';

import { PrismaService } from '../../database/prisma/prisma.service';

import { CreateReminderDto } from './dto/create-reminder.dto';
import { UpdateReminderDto } from './dto/update-reminder.dto';
import { ReminderQueryDto } from './dto/reminder-query.dto';

@Injectable()
export class ReminderRepository {
  constructor(
    private readonly prisma: PrismaService,
  ) {}

  async createReminder(
    dto: CreateReminderDto,
  ) {
    return this.prisma.reminder.create({
      data: dto,
    });
  }

  async getReminder(
    reminderId: string,
  ) {
    return this.prisma.reminder.findUnique({
      where: {
        id: reminderId,
      },
      include: {
        business: true,
        invoice: true,
      },
    });
  }

  async updateReminder(
    reminderId: string,
    dto: UpdateReminderDto,
  ) {
    return this.prisma.reminder.update({
      where: {
        id: reminderId,
      },
      data: dto,
    });
  }

  async deleteReminder(
    reminderId: string,
  ) {
    return this.prisma.reminder.delete({
      where: {
        id: reminderId,
      },
    });
  }

  async searchReminders(
    query: ReminderQueryDto,
  ) {
    return this.prisma.reminder.findMany({
      where: {
        ...(query.status && {
          status: query.status,
        }),

        ...(query.channel && {
          channel: query.channel,
        }),

        ...(query.type && {
          type: query.type,
        }),
      },

      include: {
        invoice: true,
      },

      skip: query.skip,

      take: query.take,

      orderBy: {
        scheduledAt: 'asc',
      },
    });
  }
}
