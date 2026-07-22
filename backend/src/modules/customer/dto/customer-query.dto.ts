import {
  IsOptional,
  IsString,
} from 'class-validator';

export class CustomerQueryDto {
  @IsOptional()
  @IsString()
  search?: string;

  @IsOptional()
  @IsString()
  city?: string;

  @IsOptional()
  @IsString()
  state?: string;
}
