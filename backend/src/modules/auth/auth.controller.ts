import {
  Body,
  Controller,
  Get,
  Post,
} from '@nestjs/common';

import { AuthService } from './auth.service';

import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';
import { ForgotPasswordDto } from './dto/forgot-password.dto';
import { ResetPasswordDto } from './dto/reset-password.dto';
import { ChangePasswordDto } from './dto/change-password.dto';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
  ) {}

  @Post('register')
  register(
    @Body() dto: RegisterDto,
  ) {
    return this.authService.register(dto);
  }

  @Post('login')
  login(
    @Body() dto: LoginDto,
  ) {
    return this.authService.login(dto);
  }

  @Post('logout')
  logout() {
    return this.authService.logout();
  }

  @Post('forgot-password')
  forgotPassword(
    @Body() dto: ForgotPasswordDto,
  ) {
    return this.authService.forgotPassword();
  }

  @Post('reset-password')
  resetPassword(
    @Body() dto: ResetPasswordDto,
  ) {
    return this.authService.resetPassword();
  }

  @Post('change-password')
  changePassword(
    @Body() dto: ChangePasswordDto,
  ) {
    return this.authService.changePassword();
  }

  @Get('me')
  me() {
    return {
      message: 'Current User'
    };
  }
}
