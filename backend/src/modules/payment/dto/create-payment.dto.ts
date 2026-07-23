import { IsString, IsNumber, IsOptional, IsDateString } from 'class-validator';

export class CreatePaymentDto {
  @IsString()
  invoiceId: string;

  @IsNumber()
  amount: number;

  @IsString()
  paymentMethod: string;

  @IsOptional()
  @IsString()
  transactionId?: string;

  @IsOptional()
  @IsDateString()
  paymentDate?: string;

  @IsOptional()
  @IsString()
  notes?: string;
}
