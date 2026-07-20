import {
  IsString,
  Length,
} from 'class-validator';

export class ResetPasswordDto {
  @IsString()
  otp: string;

  @IsString()
  @Length(8, 50)
  newPassword: string;
}
