import {
  IsString,
  IsOptional,
  IsObject,
} from 'class-validator';

export class CreateSecurityDto {
  @IsString()
  businessId: string;

  @IsString()
  resource: string;

  @IsString()
  action: string;

  @IsString()
  actorId: string;

  @IsString()
  status: string;

  @IsOptional()
  @IsString()
  ipAddress?: string;

  @IsOptional()
  @IsString()
  userAgent?: string;

  @IsOptional()
  @IsObject()
  metadata?: Record<string, any>;
}
