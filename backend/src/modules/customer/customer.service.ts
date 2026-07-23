import {
  Injectable,
  NotFoundException,
  ConflictException,
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
    const existingCustomer =
      await this.customerRepository.findCustomerByMobile(
        dto.mobileNumber,
        ownerId,
      );

    if (existingCustomer) {
      throw new ConflictException(
        'Customer already exists.',
      );
    }

    const customer =
      await this.customerRepository.createCustomer(
        ownerId,
        dto,
      );

    return {
      success: true,
      message: 'Customer created successfully.',
      data: customer,
    };
  }

  async updateCustomer(
    customerId: string,
    ownerId: string,
    dto: UpdateCustomerDto,
  ) {
    const customer =
      await this.customerRepository.getCustomer(
        customerId,
        ownerId,
      );

    if (!customer) {
      throw new NotFoundException(
        'Customer not found.',
      );
    }

    const updatedCustomer =
      await this.customerRepository.updateCustomer(
        customerId,
        ownerId,
        dto,
      );

    return {
      success: true,
      message: 'Customer updated successfully.',
      data: updatedCustomer,
    };
  }

  async deleteCustomer(
    customerId: string,
    ownerId: string,
  ) {
    const customer =
      await this.customerRepository.getCustomer(
        customerId,
        ownerId,
      );

    if (!customer) {
      throw new NotFoundException(
        'Customer not found.',
      );
    }

    await this.customerRepository.deleteCustomer(
      customerId,
      ownerId,
    );

    return {
      success: true,
      message: 'Customer deleted successfully.',
    };
  }

  async getCustomer(
    customerId: string,
    ownerId: string,
  ) {
    const customer =
      await this.customerRepository.getCustomer(
        customerId,
        ownerId,
      );

    if (!customer) {
      throw new NotFoundException(
        'Customer not found.',
      );
    }

    return {
      success: true,
      data: customer,
    };
  }

  async getCustomers(
    ownerId: string,
    query: CustomerQueryDto,
  ) {
    const customers =
      await this.customerRepository.getCustomers(
        ownerId,
        query,
      );

    return {
      success: true,
      count: customers.length,
      data: customers,
    };
  }
}
