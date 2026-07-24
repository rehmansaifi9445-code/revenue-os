import {
  Injectable,
  NotFoundException,
} from '@nestjs/common';

import { ReminderRepository } from './reminder.repository';

import { CreateReminderDto } from './dto/create-reminder.dto';
import { UpdateReminderDto } from './dto/update-reminder.dto';
import { ReminderQueryDto } from './dto/reminder-query.dto';

@Injectable()
export class ReminderService {
  constructor(
    private readonly reminderRepository: ReminderRepository,
  ) {}

  async createReminder(dto: CreateReminderDto) {
    const reminder =
      await this.reminderRepository.createReminder(dto);

    return {
      success: true,
      message: 'Reminder created successfully.',
      data: reminder,
    };
  }

  async getReminder(reminderId: string) {
    const reminder =
      await this.reminderRepository.getReminder(reminderId);

    if (!reminder) {
      throw new NotFoundException(
        'Reminder not found.',
      );
    }

    return {
      success: true,
      data: reminder,
    };
  }

  async updateReminder(
    reminderId: string,
    dto: UpdateReminderDto,
  ) {
    await this.getReminder(reminderId);

    const reminder =
      await this.reminderRepository.updateReminder(
        reminderId,
        dto,
      );

    return {
      success: true,
      message: 'Reminder updated successfully.',
      data: reminder,
    };
  }

  async deleteReminder(reminderId: string) {
    await this.getReminder(reminderId);

    await this.reminderRepository.deleteReminder(
      reminderId,
    );

    return {
      success: true,
      message: 'Reminder deleted successfully.',
    };
  }

  async searchReminders(
    query: ReminderQueryDto,
  ) {
    const reminders =
      await this.reminderRepository.searchReminders(
        query,
      );

    return {
      success: true,
      count: reminders.length,
      data: reminders,
    };
  }
}
