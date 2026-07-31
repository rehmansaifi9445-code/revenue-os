import {
  IsString,
  IsNumber,
  IsOptional,
  IsObject,
  IsDateString,
} from 'class-validator';

export class CreateMonitoringDto {
  @IsString()
  businessId: string;

  @IsString()
  service: string;

  @IsString()
  status: string;

  @IsNumber()
  responseTime: number;

  @IsOptional()
  @IsNumber()
  cpuUsage?: number;

  @IsOptional()
  @IsNumber()
  memoryUsage?: number;

  @IsOptional()
  @IsObject()
  metadata?: Record<string, any>;

  @IsDateString()
  checkedAt: string;
}
