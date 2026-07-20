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
  // 1. Check if mobile number already exists
  const existingUser =
    await this.authRepository.findUserByMobile(
      registerDto.mobileNumber,
    );

  if (existingUser) {
    throw new ConflictException(
      'Mobile number already registered.',
    );
  }

  // 2. Hash password
  const passwordHash =
    await this.passwordService.hash(
      registerDto.password,
    );

  // 3. Create user
  const user =
    await this.authRepository.createUser(
      registerDto,
      passwordHash,
    );

  // 4. JWT Payload
  const payload = {
    sub: user.id,
    mobileNumber: user.mobileNumber,
  };

  // 5. Generate Tokens
  const accessToken =
    this.revenueJwtService.generateAccessToken(
      payload,
    );

  const refreshToken =
    this.revenueJwtService.generateRefreshToken(
      payload,
    );

  // 6. Session Expiry
  const expiresAt = new Date();
  expiresAt.setDate(
    expiresAt.getDate() + 30,
  );

  // 7. Save Session
  await this.authRepository.createSession(
    user.id,
    refreshToken,
    expiresAt,
  );

  // 8. Response
  return {
    success: true,
    message: 'Registration successful.',

    data: {
      accessToken,
      refreshToken,

      user: {
        id: user.id,
        fullName: user.fullName,
        businessName: user.businessName,
        mobileNumber: user.mobileNumber,
      },
    },
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
