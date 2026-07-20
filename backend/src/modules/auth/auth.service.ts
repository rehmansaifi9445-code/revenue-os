import {
  ConflictException,
  Injectable,
} from '@nestjs/common';

import { AuthRepository } from './auth.repository';
import { RegisterDto } from './dto/register.dto';

import { PasswordService } from './security/password.service';
import { RevenueJwtService } from './jwt/jwt.service';
@Injectable()
export class AuthService {
  constructor(
  private readonly authRepository: AuthRepository,
  private readonly passwordService: PasswordService,
  private readonly revenueJwtService: RevenueJwtService,
) {}

  async register(registerDto: RegisterDto) {
    const existingUser =
      await this.authRepository.findUserByMobile(
        registerDto.mobileNumber,
      );

    if (existingUser) {
      throw new ConflictException(
        'Mobile number already registered.',
      );
    }

    // TODO:
    // Hash Password
    // Generate JWT
    // Create Session
    // Audit Log

    return {
      success: true,
      message: 'Registration successful.',
    };
  }

  async login() {
    // TODO:
    // Verify User
    // Verify Password
    // Generate Access Token
    // Generate Refresh Token
    // Save Session

    return {
      success: true,
      message: 'Login successful.',
    };
  }

  async logout() {
    // TODO:
    // Delete Session

    return {
      success: true,
      message: 'Logout successful.',
    };
  }

  async forgotPassword() {
    // TODO:
    // Generate OTP
    // Send SMS

    return {
      success: true,
    };
  }

  async resetPassword() {
    // TODO:
    // Verify OTP
    // Update Password

    return {
      success: true,
    };
  }

  async changePassword() {
    // TODO:
    // Verify Current Password
    // Update Password

    return {
      success: true,
    };
  }
}
