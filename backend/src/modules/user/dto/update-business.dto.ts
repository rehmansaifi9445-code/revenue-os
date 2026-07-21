import {
  IsOptional,
  IsString,
  MaxLength,
} from 'class-validator';

export class UpdateBusinessDto {
  @IsOptional()
  @IsString()
  @MaxLength(150)
  businessName?: string;

  @IsOptional()
  @IsString()
  businessType?: string;

  @IsOptional()
  @IsString()
  gstNumber?: string;

  @IsOptional()
  @IsString()
  address?: string;
}
