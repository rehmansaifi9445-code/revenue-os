import {
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';

import { Type } from 'class-transformer';

export class WorkflowQueryDto {
  @IsOptional()
  @IsString()
  status?: string;

  @IsOptional()
  @Type(() => Number)
  @IsNumber()
  skip?: number;

  @IsOptional()
  @Type(() => Number)
  @IsNumber()
  take?: number;
}
