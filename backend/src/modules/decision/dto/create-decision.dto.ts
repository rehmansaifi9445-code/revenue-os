import {
  IsUUID,
  IsNotEmpty,
  IsString,
  IsObject,
  IsOptional,
  IsBoolean,
} from 'class-validator';

export class CreateDecisionDto {
  @IsUUID()
  @IsNotEmpty()
  businessId: string;

  @IsString()
  @IsNotEmpty()
  decisionType: string;

  @IsObject()
  @IsNotEmpty()
  input: Record<string, any>;

  @IsObject()
  @IsOptional()
  output?: Record<string, any>;

  @IsBoolean()
  @IsOptional()
  isApproved?: boolean = false;
}
