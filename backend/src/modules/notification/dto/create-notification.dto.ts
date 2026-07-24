import {
  IsEmail,
  IsOptional,
  IsString,
} from 'class-validator';

export class CreateNotificationDto {
  @IsString()
  businessId: string;

  @IsOptional()
  @IsString()
  customerId?: string;

  @IsString()
  channel: string;

  @IsString()
  type: string;

  @IsEmail()
  recipient: string;

  @IsOptional()
  @IsString()
  subject?: string;

  @IsString()
  message: string;
}
