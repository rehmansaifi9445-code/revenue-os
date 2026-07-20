import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';

import { AuthController } from './auth.controller';
import { AuthRepository } from './auth.repository';
import { AuthService } from './auth.service';

import { PasswordService } from './security/password.service';
import { RevenueJwtService } from './jwt/jwt.service';

import { JwtStrategy } from './strategies/jwt.strategy';

@Module({
  imports: [
    JwtModule.register({
      secret: process.env.JWT_SECRET,
    }),
  ],

  controllers: [
    AuthController,
  ],

  providers: [
    AuthRepository,
    AuthService,
    PasswordService,
    RevenueJwtService,
    JwtStrategy,
  ],

  exports: [
    AuthService,
    RevenueJwtService,
  ],
})
export class AuthModule {}
