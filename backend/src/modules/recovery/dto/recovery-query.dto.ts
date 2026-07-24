import {
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';

import { Type } from 'class-transformer';

export class RecoveryQueryDto {
  @IsOptional()
  @IsString()
  status?: string;

  @IsOptional()
  @IsString()
  stage?: string;

  @IsOptional()
  @Type(() => Number)
  @IsNumber()
  skip?: number;

  @IsOptional()
  @Type(() => Number)
  @IsNumber()
  take?: number;
}
