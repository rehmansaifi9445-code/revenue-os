import { Injectable } from '@nestjs/common';

import { PrismaService } from '../../database/prisma/prisma.service';

@Injectable()
export class UserRepository {
  constructor(
    private readonly prisma: PrismaService,
  ) {}

  // ==========================
  // USER PROFILE
  // ==========================

  async findUserById(
    userId: string,
  ) {
    return this.prisma.user.findUnique({
      where: {
        id: userId,
      },
    });
  }

  async updateProfile(
    userId: string,
    data: {
      fullName?: string;
      profilePhoto?: string;
      language?: string;
      timezone?: string;
      currency?: string;
    },
  ) {
    return this.prisma.user.update({
      where: {
        id: userId,
      },
      data,
    });
  }

  // ==========================
  // BUSINESS
  // ==========================

  async updateBusiness(
    userId: string,
    data: {
      businessName?: string;
      businessType?: string;
      gstNumber?: string;
      address?: string;
    },
  ) {
    return this.prisma.user.update({
      where: {
        id: userId,
      },
      data,
    });
  }

  // ==========================
  // SETTINGS
  // ==========================

  async updateSettings(
    userId: string,
    data: {
      language?: string;
      timezone?: string;
      currency?: string;
    },
  ) {
    return this.prisma.user.update({
      where: {
        id: userId,
      },
      data,
    });
  }
}
