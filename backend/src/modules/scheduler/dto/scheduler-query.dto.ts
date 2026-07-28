import {
  IsOptional,
  IsString,
  IsBoolean,
  IsInt,
  Min,
} from 'class-validator';

import { Type } from 'class-transformer';

export class SchedulerQueryDto {
  @IsOptional()
  @IsString()
  businessId?: string;

  @IsOptional()
  @IsString()
  jobType?: string;

  @IsOptional()
  @IsString()
  status?: string;

  @IsOptional()
  @Type(() => Boolean)
  @IsBoolean()
  isActive?: boolean;

  @IsOptional()
  @Type(() => Number)
  @IsInt()
  @Min(1)
  page?: number = 1;

  @IsOptional()
  @Type(() => Number)
  @IsInt()
  @Min(1)
  limit?: number = 10;
}
