import {
  IsMobilePhone,
  IsString,
  Length,
} from 'class-validator';

export class LoginDto {
  @IsMobilePhone('en-IN')
  mobileNumber: string;

  @IsString()
  @Length(8, 50)
  password: string;
}
