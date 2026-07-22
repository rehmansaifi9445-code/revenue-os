import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';

import { CustomerService } from './customer.service';

import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';
import { CustomerQueryDto } from './dto/customer-query.dto';

@Controller('customers')
export class CustomerController {
  constructor(
    private readonly customerService: CustomerService,
  ) {}

  // TODO:
  // JWT Authentication ke baad
  // ownerId token se aayega.
  private readonly ownerId = 'OWNER_ID';

  @Post()
  createCustomer(
    @Body() dto: CreateCustomerDto,
  ) {
    return this.customerService.createCustomer(
      this.ownerId,
      dto,
    );
  }

  @Get()
  getCustomers(
    @Query() query: CustomerQueryDto,
  ) {
    return this.customerService.getCustomers(
      this.ownerId,
      query,
    );
  }

  @Get(':id')
  getCustomerById(
    @Param('id') id: string,
  ) {
    return this.customerService.getCustomerById(
      this.ownerId,
      id,
    );
  }

  @Patch(':id')
  updateCustomer(
    @Param('id') id: string,
    @Body() dto: UpdateCustomerDto,
  ) {
    return this.customerService.updateCustomer(
      this.ownerId,
      id,
      dto,
    );
  }

  @Delete(':id')
  deleteCustomer(
    @Param('id') id: string,
  ) {
    return this.customerService.deleteCustomer(
      this.ownerId,
      id,
    );
  }
}
