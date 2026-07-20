import {
  IsString,
  Length,
} from 'class-validator';

export class ChangePasswordDto {
  @IsString()
  currentPassword: string;

  @IsString()
  @Length(8, 50)
  newPassword: string;
}
