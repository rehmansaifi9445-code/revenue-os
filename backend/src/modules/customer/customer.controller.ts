import {
  Controller,
  Post,
  Put,
  Delete,
  Get,
  Body,
  Param,
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

  // Temporary Owner ID
  // JWT Auth ke baad yahan user.id aayegi
  private readonly ownerId =
    'TEMP_OWNER_ID';

  @Post()
  createCustomer(
    @Body() dto: CreateCustomerDto,
  ) {
    return this.customerService.createCustomer(
      this.ownerId,
      dto,
    );
  }

  @Put(':customerId')
  updateCustomer(
    @Param('customerId') customerId: string,
    @Body() dto: UpdateCustomerDto,
  ) {
    return this.customerService.updateCustomer(
      customerId,
      this.ownerId,
      dto,
    );
  }

  @Delete(':customerId')
  deleteCustomer(
    @Param('customerId') customerId: string,
  ) {
    return this.customerService.deleteCustomer(
      customerId,
      this.ownerId,
    );
  }

  @Get(':customerId')
  getCustomer(
    @Param('customerId') customerId: string,
  ) {
    return this.customerService.getCustomer(
      customerId,
      this.ownerId,
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
}
