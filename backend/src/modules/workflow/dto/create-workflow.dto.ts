import {
  IsOptional,
  IsString,
} from 'class-validator';

export class CreateWorkflowDto {
  @IsString()
  businessId: string;

  @IsString()
  name: string;

  @IsString()
  trigger: string;

  @IsOptional()
  @IsString()
  description?: string;
}
