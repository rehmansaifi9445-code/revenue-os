import { Injectable } from '@nestjs/common';

import { PrismaService } from '../../database/prisma/prisma.service';

import { CreateNotificationDto } from './dto/create-notification.dto';
import { UpdateNotificationDto } from './dto/update-notification.dto';
import { NotificationQueryDto } from './dto/notification-query.dto';

@Injectable()
export class NotificationRepository {
  constructor(
    private readonly prisma: PrismaService,
  ) {}

  async createNotification(
    dto: CreateNotificationDto,
  ) {
    return this.prisma.notification.create({
      data: dto,
    });
  }

  async getNotification(
    notificationId: string,
  ) {
    return this.prisma.notification.findUnique({
      where: {
        id: notificationId,
      },
      include: {
        business: true,
        customer: true,
      },
    });
  }

  async updateNotification(
    notificationId: string,
    dto: UpdateNotificationDto,
  ) {
    return this.prisma.notification.update({
      where: {
        id: notificationId,
      },
      data: dto,
    });
  }

  async deleteNotification(
    notificationId: string,
  ) {
    return this.prisma.notification.delete({
      where: {
        id: notificationId,
      },
    });
  }

  async searchNotifications(
    query: NotificationQueryDto,
  ) {
    return this.prisma.notification.findMany({
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
        customer: true,
      },

      skip: query.skip,

      take: query.take,

      orderBy: {
        createdAt: 'desc',
      },
    });
  }
}
