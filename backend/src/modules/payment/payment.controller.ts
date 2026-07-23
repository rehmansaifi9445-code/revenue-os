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

import { PaymentService } from './payment.service';

import { CreatePaymentDto } from './dto/create-payment.dto';
import { UpdatePaymentDto } from './dto/update-payment.dto';
import { PaymentQueryDto } from './dto/payment-query.dto';

@Controller('payments')
export class PaymentController {
  constructor(
    private readonly service: PaymentService,
  ) {}

  @Post()
  create(
    @Body() dto: CreatePaymentDto,
  ) {
    return this.service.createPayment(dto);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() dto: UpdatePaymentDto,
  ) {
    return this.service.updatePayment(id, dto);
  }

  @Delete(':id')
  delete(
    @Param('id') id: string,
  ) {
    return this.service.deletePayment(id);
  }

  @Get(':id')
  get(
    @Param('id') id: string,
  ) {
    return this.service.getPayment(id);
  }

  @Get()
  getAll(
    @Query() query: PaymentQueryDto,
  ) {
    return this.service.getPayments(query);
  }
}
