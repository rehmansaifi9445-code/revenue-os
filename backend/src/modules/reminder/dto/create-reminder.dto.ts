import {
  IsDateString,
  IsOptional,
  IsString,
} from 'class-validator';

export class CreateReminderDto {
  @IsString()
  businessId: string;

  @IsString()
  invoiceId: string;

  @IsString()
  type: string;

  @IsString()
  channel: string;

  @IsOptional()
  @IsString()
  subject?: string;

  @IsOptional()
  @IsString()
  message?: string;

  @IsDateString()
  scheduledAt: string;
}
