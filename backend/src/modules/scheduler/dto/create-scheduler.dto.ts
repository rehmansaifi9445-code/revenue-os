import {
  IsUUID,
  IsString,
  IsDateString,
  IsOptional,
  IsBoolean,
} from 'class-validator';

export class CreateSchedulerDto {
  @IsUUID()
  businessId: string;

  @IsOptional()
  @IsUUID()
  automationId?: string;

  @IsString()
  jobType: string;

  @IsDateString()
  executeAt: string;

  @IsOptional()
  @IsString()
  status?: string = 'PENDING';

  @IsOptional()
  @IsBoolean()
  isActive?: boolean = true;
}
