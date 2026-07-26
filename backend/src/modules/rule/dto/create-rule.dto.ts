import {
  IsString,
  IsOptional,
  IsObject,
  IsBoolean,
  IsInt,
  Min,
  IsUUID,
  IsNotEmpty,
} from 'class-validator';

export class CreateRuleDto {
  @IsUUID()
  @IsNotEmpty()
  businessId: string;

  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsOptional()
  description?: string;

  @IsString()
  @IsNotEmpty()
  ruleType: string;

  @IsObject()
  @IsNotEmpty()
  condition: Record<string, any>;

  @IsObject()
  @IsNotEmpty()
  action: Record<string, any>;

  @IsInt()
  @Min(1)
  @IsOptional()
  priority?: number = 1;

  @IsBoolean()
  @IsOptional()
  isActive?: boolean = true;
}
