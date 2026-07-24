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

import { ReminderService } from './reminder.service';

import { CreateReminderDto } from './dto/create-reminder.dto';
import { UpdateReminderDto } from './dto/update-reminder.dto';
import { ReminderQueryDto } from './dto/reminder-query.dto';

@Controller('reminders')
export class ReminderController {
  constructor(
    private readonly reminderService: ReminderService,
  ) {}

  @Post()
  createReminder(
    @Body() dto: CreateReminderDto,
  ) {
    return this.reminderService.createReminder(dto);
  }

  @Get(':id')
  getReminder(
    @Param('id') reminderId: string,
  ) {
    return this.reminderService.getReminder(
      reminderId,
    );
  }

  @Patch(':id')
  updateReminder(
    @Param('id') reminderId: string,
    @Body() dto: UpdateReminderDto,
  ) {
    return this.reminderService.updateReminder(
      reminderId,
      dto,
    );
  }

  @Delete(':id')
  deleteReminder(
    @Param('id') reminderId: string,
  ) {
    return this.reminderService.deleteReminder(
      reminderId,
    );
  }

  @Get()
  searchReminders(
    @Query() query: ReminderQueryDto,
  ) {
    return this.reminderService.searchReminders(
      query,
    );
  }
}
