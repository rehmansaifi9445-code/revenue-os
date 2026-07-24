import {
  IsDateString,
  IsOptional,
  IsString,
} from 'class-validator';

export class CreateRecoveryDto {
  @IsString()
  businessId: string;

  @IsString()
  customerId: string;

  @IsString()
  invoiceId: string;

  @IsString()
  stage: string;

  @IsOptional()
  @IsString()
  assignedTo?: string;

  @IsOptional()
  @IsString()
  notes?: string;

  @IsOptional()
  @IsDateString()
  promiseToPay?: string;
}
