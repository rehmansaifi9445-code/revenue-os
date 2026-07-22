import { Injectable } from '@nestjs/common';

import { PrismaService } from '../../database/prisma/prisma.service';

import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';
import { CustomerQueryDto } from './dto/customer-query.dto';

@Injectable()
export class CustomerRepository {
  constructor(
    private readonly prisma: PrismaService,
  ) {}

}
async createCustomer(
  ownerId: string,
  dto: CreateCustomerDto,
) {
  return this.prisma.customer.create({
    data: {
      ownerId,
      ...dto,
    },
  });
}
async findCustomerById(
  id: string,
  ownerId: string,
) {
  return this.prisma.customer.findFirst({
    where: {
      id,
      ownerId,
    },
  });
}
async findCustomerByMobile(
  mobileNumber: string,
  ownerId: string,
) {
  return this.prisma.customer.findFirst({
    where: {
      mobileNumber,
      ownerId,
    },
  });
}
async updateCustomer(
  customerId: string,
  ownerId: string,
  dto: UpdateCustomerDto,
) {
  return this.prisma.customer.update({
    where: {
      id: customerId,
      ownerId,
    },
    data: dto,
  });
}

async deleteCustomer(
  customerId: string,
  ownerId: string,
) {
  return this.prisma.customer.delete({
    where: {
      id: customerId,
      ownerId,
    },
  });
}

async getCustomer(
  customerId: string,
  ownerId: string,
) {
  return this.prisma.customer.findFirst({
    where: {
      id: customerId,
      ownerId,
    },
  });
}

async getCustomers(
  ownerId: string,
  query: CustomerQueryDto,
) {
  return this.prisma.customer.findMany({
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
