import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../database/prisma.service';
import { RegisterDto } from './dto/register.dto';

@Injectable()
export class AuthRepository {
  constructor(private readonly prisma: PrismaService) {}

  async findUserByMobile(mobileNumber: string) {
    return this.prisma.user.findUnique({
      where: {
        mobileNumber,
      },
    });
  }

  async createUser(data: RegisterDto, passwordHash: string) {
    return this.prisma.user.create({
      data: {
        fullName: data.fullName,
        businessName: data.businessName,
        mobileNumber: data.mobileNumber,
        passwordHash,
      },
    });
  }

  async updatePassword(userId: string, passwordHash: string) {
    return this.prisma.user.update({
      where: {
        id: userId,
      },
      data: {
        passwordHash,
      },
    });
  }

  async createSession(
    userId: string,
    refreshToken: string,
    expiresAt: Date,
  ) {
    return this.prisma.session.create({
      data: {
        userId,
        refreshToken,
        expiresAt,
      },
    });
  }

  async deleteSession(refreshToken: string) {
    return this.prisma.session.deleteMany({
      where: {
        refreshToken,
      },
    });
  }
}
