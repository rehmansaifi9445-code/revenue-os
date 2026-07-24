import { Injectable } from '@nestjs/common';

import { PrismaService } from '../../database/prisma/prisma.service';

import { CreateRecoveryDto } from './dto/create-recovery.dto';
import { UpdateRecoveryDto } from './dto/update-recovery.dto';
import { RecoveryQueryDto } from './dto/recovery-query.dto';

@Injectable()
export class RecoveryRepository {
  constructor(
    private readonly prisma: PrismaService,
  ) {}

  async createRecovery(
    dto: CreateRecoveryDto,
  ) {
    return this.prisma.recovery.create({
      data: dto,
    });
  }

  async getRecovery(
    recoveryId: string,
  ) {
    return this.prisma.recovery.findUnique({
      where: {
        id: recoveryId,
      },
      include: {
        business: true,
        customer: true,
        invoice: true,
      },
    });
  }

  async updateRecovery(
    recoveryId: string,
    dto: UpdateRecoveryDto,
  ) {
    return this.prisma.recovery.update({
      where: {
        id: recoveryId,
      },
      data: dto,
    });
  }

  async deleteRecovery(
    recoveryId: string,
  ) {
    return this.prisma.recovery.delete({
      where: {
        id: recoveryId,
      },
    });
  }

  async searchRecoveries(
    query: RecoveryQueryDto,
  ) {
    return this.prisma.recovery.findMany({
      where: {
        ...(query.status && {
          status: query.status,
        }),

        ...(query.stage && {
          stage: query.stage,
        }),
      },

      include: {
        customer: true,
        invoice: true,
      },

      skip: query.skip,
      take: query.take,

      orderBy: {
        createdAt: 'desc',
      },
    });
  }
}
