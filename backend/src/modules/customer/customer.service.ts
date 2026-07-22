import {
  Injectable,
  NotFoundException,
} from '@nestjs/common';

import { CustomerRepository } from './customer.repository';

import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';
import { CustomerQueryDto } from './dto/customer-query.dto';

@Injectable()
export class CustomerService {
  constructor(
    private readonly customerRepository: CustomerRepository,
  ) {}

  async createCustomer(
    ownerId: string,
    dto: CreateCustomerDto,
  ) {
    return this.customerRepository.createCustomer(
      ownerId,
      dto,
    );
  }

  async getCustomers(
    ownerId: string,
    query: CustomerQueryDto,
  ) {
    return this.customerRepository.getCustomers(
      ownerId,
      query,
    );
  }

  async getCustomerById(
    ownerId: string,
    customerId: string,
  ) {
    const customer =
      await this.customerRepository.findCustomerById(
        ownerId,
        customerId,
      );

    if (!customer) {
      throw new NotFoundException(
        'Customer not found.',
      );
    }

    return customer;
  }

  async updateCustomer(
    ownerId: string,
    customerId: string,
    dto: UpdateCustomerDto,
  ) {
    await this.getCustomerById(
      ownerId,
      customerId,
    );

    return this.customerRepository.updateCustomer(
      ownerId,
      customerId,
      dto,
    );
  }

  async deleteCustomer(
    ownerId: string,
    customerId: string,
  ) {
    await this.getCustomerById(
      ownerId,
      customerId,
    );

    await this.customerRepository.deleteCustomer(
      ownerId,
      customerId,
    );

    return {
      success: true,
      message: 'Customer deleted successfully.',
    };
  }
}
