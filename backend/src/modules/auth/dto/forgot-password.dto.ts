import { IsMobilePhone } from 'class-validator';

export class ForgotPasswordDto {
  @IsMobilePhone('en-IN')
  mobileNumber: string;
}
