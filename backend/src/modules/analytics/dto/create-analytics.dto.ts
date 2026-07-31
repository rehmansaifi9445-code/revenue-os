import {
  IsString,
  IsNumber,
  IsDateString,
} from 'class-validator';

export class CreateAnalyticsDto {
  @IsString()
  businessId: string;

  @IsString()
  module: string;

  @IsString()
  metricName: string;

  @IsNumber()
  metricValue: number;

  @IsDateString()
  recordedAt: string;
}
