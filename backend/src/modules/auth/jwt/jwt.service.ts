import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

import { JwtPayload } from './token.interface';
import { JWT_CONSTANTS } from './jwt.constants';

@Injectable()
export class RevenueJwtService {
  constructor(
    private readonly jwtService: JwtService,
  ) {}

  generateAccessToken(payload: JwtPayload): string {
    return this.jwtService.sign(payload, {
      expiresIn: JWT_CONSTANTS.ACCESS_TOKEN_EXPIRES_IN,
    });
  }

  generateRefreshToken(payload: JwtPayload): string {
    return this.jwtService.sign(payload, {
      expiresIn: JWT_CONSTANTS.REFRESH_TOKEN_EXPIRES_IN,
    });
  }

  verifyToken(token: string): JwtPayload {
    return this.jwtService.verify(token);
  }
}
