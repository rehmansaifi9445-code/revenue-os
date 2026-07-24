import {
  Injectable,
  NotFoundException,
} from '@nestjs/common';

import { NotificationRepository } from './notification.repository';

import { CreateNotificationDto } from './dto/create-notification.dto';
import { UpdateNotificationDto } from './dto/update-notification.dto';
import { NotificationQueryDto } from './dto/notification-query.dto';

@Injectable()
export class NotificationService {
  constructor(
    private readonly notificationRepository: NotificationRepository,
  ) {}

  async createNotification(
    dto: CreateNotificationDto,
  ) {
    const notification =
      await this.notificationRepository.createNotification(dto);

    return {
      success: true,
      message: 'Notification created successfully.',
      data: notification,
    };
  }

  async getNotification(
    notificationId: string,
  ) {
    const notification =
      await this.notificationRepository.getNotification(notificationId);

    if (!notification) {
      throw new NotFoundException(
        'Notification not found.',
      );
    }

    return {
      success: true,
      data: notification,
    };
  }

  async updateNotification(
    notificationId: string,
    dto: UpdateNotificationDto,
  ) {
    await this.getNotification(notificationId);

    const notification =
      await this.notificationRepository.updateNotification(
        notificationId,
        dto,
      );

    return {
      success: true,
      message: 'Notification updated successfully.',
      data: notification,
    };
  }

  async deleteNotification(
    notificationId: string,
  ) {
    await this.getNotification(notificationId);

    await this.notificationRepository.deleteNotification(
      notificationId,
    );

    return {
      success: true,
      message: 'Notification deleted successfully.',
    };
  }

  async searchNotifications(
    query: NotificationQueryDto,
  ) {
    const notifications =
      await this.notificationRepository.searchNotifications(query);

    return {
      success: true,
      count: notifications.length,
      data: notifications,
    };
  }
}
