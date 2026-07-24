import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';

import { NotificationService } from './notification.service';

import { CreateNotificationDto } from './dto/create-notification.dto';
import { UpdateNotificationDto } from './dto/update-notification.dto';
import { NotificationQueryDto } from './dto/notification-query.dto';

@Controller('notifications')
export class NotificationController {
  constructor(
    private readonly notificationService: NotificationService,
  ) {}

  @Post()
  createNotification(
    @Body() dto: CreateNotificationDto,
  ) {
    return this.notificationService.createNotification(dto);
  }

  @Get(':id')
  getNotification(
    @Param('id') notificationId: string,
  ) {
    return this.notificationService.getNotification(
      notificationId,
    );
  }

  @Patch(':id')
  updateNotification(
    @Param('id') notificationId: string,
    @Body() dto: UpdateNotificationDto,
  ) {
    return this.notificationService.updateNotification(
      notificationId,
      dto,
    );
  }

  @Delete(':id')
  deleteNotification(
    @Param('id') notificationId: string,
  ) {
    return this.notificationService.deleteNotification(
      notificationId,
    );
  }

  @Get()
  searchNotifications(
    @Query() query: NotificationQueryDto,
  ) {
    return this.notificationService.searchNotifications(
      query,
    );
  }
}
