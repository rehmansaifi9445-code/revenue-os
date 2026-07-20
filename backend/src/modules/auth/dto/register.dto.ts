import {
  IsMobilePhone,
  IsNotEmpty,
  IsString,
  Length,
} from 'class-validator';

export class RegisterDto {
  @IsString()
  @IsNotEmpty()
  fullName: string;

  @IsString()
  @IsNotEmpty()
  businessName: string;

  @IsMobilePhone('en-IN')
  mobileNumber: string;

  @IsString()
  @Length(8, 50)
  password: string;
}
