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
