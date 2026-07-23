import { Injectable } from '@nestjs/common';

import { PaymentRepository } from './payment.repository';

import { CreatePaymentDto } from './dto/create-payment.dto';
import { UpdatePaymentDto } from './dto/update-payment.dto';
import { PaymentQueryDto } from './dto/payment-query.dto';

@Injectable()
export class PaymentService {
  constructor(
    private readonly repository: PaymentRepository,
  ) {}

  createPayment(dto: CreatePaymentDto) {
    return this.repository.createPayment(dto);
  }

  updatePayment(
    paymentId: string,
    dto: UpdatePaymentDto,
  ) {
    return this.repository.updatePayment(
      paymentId,
      dto,
    );
  }

  deletePayment(paymentId: string) {
    return this.repository.deletePayment(paymentId);
  }

  getPayment(paymentId: string) {
    return this.repository.getPayment(paymentId);
  }

  getPayments(query: PaymentQueryDto) {
    return this.repository.getPayments(query);
  }
}
