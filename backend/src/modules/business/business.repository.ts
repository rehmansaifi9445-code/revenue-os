import { Injectable } from '@nestjs/common';

import { PrismaService } from '../../database/prisma/prisma.service';

import { CreateBusinessDto } from './dto/create-business.dto';
import { UpdateBusinessDto } from './dto/update-business.dto';
import { BusinessQueryDto } from './dto/business-query.dto';

@Injectable()
export class BusinessRepository {
  constructor(
    private readonly prisma: PrismaService,
  ) {}

  async createBusiness(
    ownerId: string,
    dto: CreateBusinessDto,
  ) {
    return this.prisma.business.create({
      data: {
        ownerId,
        ...dto,
      },
    });
  }

  async getBusiness(ownerId: string) {
    return this.prisma.business.findFirst({
      where: {
        ownerId,
      },
    });
  }

  async updateBusiness(
    ownerId: string,
    dto: UpdateBusinessDto,
  ) {
    return this.prisma.business.update({
      where: {
        ownerId,
      },
      data: dto,
    });
  }

  async deleteBusiness(
    ownerId: string,
  ) {
    return this.prisma.business.delete({
      where: {
        ownerId,
      },
    });
  }

  async searchBusinesses(
    ownerId: string,
    query: BusinessQueryDto,
  ) {
    return this.prisma.business.findMany({
      where: {
        ownerId,

        ...(query.search
          ? {
              OR: [
                {
                  name: {
                    contains: query.search,
                    mode: 'insensitive',
                  },
                },
                {
                  mobileNumber: {
                    contains: query.search,
                  },
                },
              ],
            }
          : {}),
      },

      skip: query.skip,
      take: query.take,

      orderBy: {
        createdAt: 'desc',
      },
    });
  }
}
