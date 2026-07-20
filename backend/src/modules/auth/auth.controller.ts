import {
  Body,
  Controller,
  Get,
  Post,
  UseGuards,
} from '@nestjs/common';

import { AuthService } from './auth.service';
import { RefreshTokenDto } from './dto/refresh-token.dto';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';
import { ForgotPasswordDto } from './dto/forgot-password.dto';
import { ResetPasswordDto } from './dto/reset-password.dto';
import { ChangePasswordDto } from './dto/change-password.dto';
import { JwtAuthGuard } from './guards/jwt-auth.guard';
import { CurrentUser } from './decorators/current-user.decorator';
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
 @Post('refresh')
refresh(
  @Body() dto: RefreshTokenDto,
) {
  return this.authService.refreshToken(dto);
}
  @Post('logout')
logout(
  @Body() dto: RefreshTokenDto,
) {
  return this.authService.logout(dto);
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

  @UseGuards(JwtAuthGuard)
@Get('me')
me(
  @CurrentUser() user: any,
) {
  return user;
}
