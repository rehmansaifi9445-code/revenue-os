import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../database/prisma/prisma.service';

import { CreatePaymentDto } from './dto/create-payment.dto';
import { UpdatePaymentDto } from './dto/update-payment.dto';
import { PaymentQueryDto } from './dto/payment-query.dto';

@Injectable()
export class PaymentRepository {
  constructor(
    private readonly prisma: PrismaService,
  ) {}

  async createPayment(dto: CreatePaymentDto) {
    return this.prisma.payment.create({
      data: dto,
    });
  }

  async updatePayment(
    paymentId: string,
    dto: UpdatePaymentDto,
  ) {
    return this.prisma.payment.update({
      where: {
        id: paymentId,
      },
      data: dto,
    });
  }

  async deletePayment(paymentId: string) {
    return this.prisma.payment.delete({
      where: {
        id: paymentId,
      },
    });
  }

  async getPayment(paymentId: string) {
    return this.prisma.payment.findUnique({
      where: {
        id: paymentId,
      },
    });
  }

  async getPayments(query: PaymentQueryDto) {
    return this.prisma.payment.findMany({
      where: {
        ...(query.status
          ? {
              status: query.status,
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
