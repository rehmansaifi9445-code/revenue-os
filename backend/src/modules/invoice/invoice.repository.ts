import { Injectable } from '@nestjs/common';

import { PrismaService } from '../../database/prisma/prisma.service';

import { CreateInvoiceDto } from './dto/create-invoice.dto';
import { UpdateInvoiceDto } from './dto/update-invoice.dto';
import { InvoiceQueryDto } from './dto/invoice-query.dto';

@Injectable()
export class InvoiceRepository {
  constructor(
    private readonly prisma: PrismaService,
  ) {}

  async createInvoice(
    dto: CreateInvoiceDto,
  ) {
    return this.prisma.invoice.create({
      data: dto,
    });
  }

  async getInvoice(
    invoiceId: string,
  ) {
    return this.prisma.invoice.findUnique({
      where: {
        id: invoiceId,
      },
      include: {
        customer: true,
        business: true,
        items: true,
      },
    });
  }

  async updateInvoice(
    invoiceId: string,
    dto: UpdateInvoiceDto,
  ) {
    return this.prisma.invoice.update({
      where: {
        id: invoiceId,
      },
      data: dto,
    });
  }

  async deleteInvoice(
    invoiceId: string,
  ) {
    return this.prisma.invoice.delete({
      where: {
        id: invoiceId,
      },
    });
  }

  async searchInvoices(
    query: InvoiceQueryDto,
  ) {
    return this.prisma.invoice.findMany({
      where: {
        ...(query.status && {
          status: query.status,
        }),

        ...(query.customerId && {
          customerId: query.customerId,
        }),

        ...(query.search && {
          invoiceNumber: {
            contains: query.search,
            mode: 'insensitive',
          },
        }),
      },

      include: {
        customer: true,
      },

      skip: query.skip,

      take: query.take,

      orderBy: {
        createdAt: 'desc',
      },
    });
  }
}
