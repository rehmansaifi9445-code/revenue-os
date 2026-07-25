import {
  IsString,
  IsOptional,
  IsObject,
  IsEnum,
  IsUUID,
  IsNotEmpty,
} from 'class-validator';

export enum EventStatus {
  PENDING = 'PENDING',
  PROCESSING = 'PROCESSING',
  COMPLETED = 'COMPLETED',
  FAILED = 'FAILED',
}

export class CreateEventDto {
  @IsUUID()
  @IsNotEmpty()
  businessId: string;

  @IsString()
  @IsNotEmpty()
  eventType: string;

  @IsString()
  @IsNotEmpty()
  sourceModule: string;

  @IsString()
  @IsNotEmpty()
  entityType: string;

  @IsUUID()
  @IsNotEmpty()
  entityId: string;

  @IsObject()
  @IsOptional()
  payload?: Record<string, any>;

  @IsEnum(EventStatus)
  @IsOptional()
  status?: EventStatus = EventStatus.PENDING;

  @IsString()
  @IsOptional()
  createdBy?: string;
}
