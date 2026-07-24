import {
  IsBoolean,
  IsInt,
  IsOptional,
  IsString,
} from 'class-validator';

export class CreateConfigurationDto {
  @IsString()
  businessId: string;

  @IsString()
  companyName: string;

  @IsOptional()
  @IsString()
  currency?: string;

  @IsOptional()
  @IsString()
  timezone?: string;

  @IsOptional()
  @IsString()
  language?: string;

  @IsOptional()
  @IsString()
  invoicePrefix?: string;

  @IsOptional()
  @IsInt()
  paymentTerms?: number;

  @IsOptional()
  @IsBoolean()
  reminderEnabled?: boolean;

  @IsOptional()
  @IsBoolean()
  recoveryEnabled?: boolean;

  @IsOptional()
  @IsBoolean()
  aiEnabled?: boolean;
}
