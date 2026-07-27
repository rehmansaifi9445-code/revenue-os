import {
  IsUUID,
  IsNotEmpty,
  IsString,
  IsObject,
  IsOptional,
  IsBoolean,
} from 'class-validator';

export class CreateAutomationDto {
  @IsUUID()
  @IsNotEmpty()
  businessId: string;

  @IsString()
  @IsNotEmpty()
  automationType: string;

  @IsObject()
  @IsNotEmpty()
  input: Record<string, any>;

  @IsObject()
  @IsOptional()
  output?: Record<string, any>;

  @IsString()
  @IsOptional()
  status?: string = 'PENDING';

  @IsBoolean()
  @IsOptional()
  isActive?: boolean = true;
}
