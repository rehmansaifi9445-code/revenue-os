import { Module } from '@nestjs/common';

import { AuthController } from './auth.controller';
import { AuthRepository } from './auth.repository';
import { AuthService } from './auth.service';

import { PasswordService } from './security/password.service';

@Module({
  controllers: [
    AuthController,
  ],
  providers: [
    AuthRepository,
    AuthService,
    PasswordService,
  ],
  exports: [
    AuthService,
    PasswordService,
  ],
})
export class AuthModule {}
