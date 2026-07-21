import { Injectable } from '@nestjs/common';

import { PrismaService } from '../../database/prisma.service';

import { RegisterDto } from './dto/register.dto';

@Injectable()
export class AuthRepository {
  constructor(
    private readonly prisma: PrismaService,
  ) {}

  // ==========================
  // USER METHODS
  // ==========================

  async findUserById(userId: string) {
    return this.prisma.user.findUnique({
      where: {
        id: userId,
      },
    });
  }

  async findUserByMobile(
    mobileNumber: string,
  ) {
    return this.prisma.user.findUnique({
      where: {
        mobileNumber,
      },
    });
  }
 async createPasswordResetOtp(
  userId: string,
  otp: string,
  expiresAt: Date,
) {
  return this.prisma.passwordResetOtp.create({
    data: {
      userId,
      otp,
      expiresAt,
      verified: false,
    },
  });
}
 async deleteOldPasswordOtps(
  userId: string,
) {
  return this.prisma.passwordResetOtp.deleteMany({
    where: {
      userId,
    },
  });
}
 async findValidPasswordOtp(
  userId: string,
  otp: string,
) {
  return this.prisma.passwordResetOtp.findFirst({
    where: {
      userId,
      otp,
      verified: false,
    },
  });
} 
 async verifyPasswordOtp(
  id: string,
) {
  return this.prisma.passwordResetOtp.update({
    where: {
      id,
    },
    data: {
      verified: true,
    },
  });
}

 async mobileExists(
    mobileNumber: string,
  ): Promise<boolean> {
    const user =
      await this.findUserByMobile(
        mobileNumber,
      );

    return !!user;
  }

  async createUser(
    dto: RegisterDto,
    passwordHash: string,
  ) {
    return this.prisma.user.create({
      data: {
        fullName: dto.fullName,
        businessName: dto.businessName,
        mobileNumber: dto.mobileNumber,
        passwordHash,
      },
    });
  }

  async updatePassword(
    userId: string,
    passwordHash: string,
  ) {
    return this.prisma.user.update({
      where: {
        id: userId,
      },
      data: {
        passwordHash,
      },
    });
  }

  async updateUser(
    userId: string,
    data: Record<string, unknown>,
  ) {
    return this.prisma.user.update({
      where: {
        id: userId,
      },
      data,
    });
  }

  async savePasswordResetOtp(
  mobileNumber: string,
  otp: string,
  expiresAt: Date,
) {
  return this.prisma.passwordReset.upsert({
    where: {
      mobileNumber,
    },
    update: {
      otp,
      expiresAt,
    },
    create: {
      mobileNumber,
      otp,
      expiresAt,
    },
  });
}

async findPasswordReset(
  mobileNumber: string,
) {
  return this.prisma.passwordReset.findUnique({
    where: {
      mobileNumber,
    },
  });
}

async deletePasswordReset(
  mobileNumber: string,
) {
  return this.prisma.passwordReset.deleteMany({
    where: {
      mobileNumber,
    },
  });
}
  // ==========================
  // SESSION METHODS
  // ==========================

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
 async findSessionWithUser(
  refreshToken: string,
) {
  return this.prisma.session.findUnique({
    where: {
      refreshToken,
    },
    include: {
      user: true,
    },
  });
}
  async findSession(
    refreshToken: string,
  ) {
    return this.prisma.session.findUnique({
      where: {
        refreshToken,
      },
    });
  }

  async deleteSession(
    refreshToken: string,
  ) {
    return this.prisma.session.deleteMany({
      where: {
        refreshToken,
      },
    });
  }

  async deleteAllSessions(
    userId: string,
  ) {
    return this.prisma.session.deleteMany({
      where: {
        userId,
      },
    });
  }

  async countActiveSessions(
    userId: string,
  ) {
    return this.prisma.session.count({
      where: {
        userId,
      },
    });
  }

  async getUserWithSessions(
    userId: string,
  ) {
    return this.prisma.user.findUnique({
      where: {
        id: userId,
      },
      include: {
        sessions: true,
      },
    });
  }
}
   async deletePasswordOtps(
  userId: string,
) {
  return this.prisma.passwordResetOtp.deleteMany({
    where: {
      userId,
    },
  });
}
