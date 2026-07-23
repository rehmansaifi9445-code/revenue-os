import {
  Injectable,
  NotFoundException,
} from '@nestjs/common';

import { InvoiceRepository } from './invoice.repository';

import { CreateInvoiceDto } from './dto/create-invoice.dto';
import { UpdateInvoiceDto } from './dto/update-invoice.dto';
import { InvoiceQueryDto } from './dto/invoice-query.dto';

@Injectable()
export class InvoiceService {
  constructor(
    private readonly invoiceRepository: InvoiceRepository,
  ) {}

  async createInvoice(dto: CreateInvoiceDto) {
    const invoice =
      await this.invoiceRepository.createInvoice(dto);

    return {
      success: true,
      message: 'Invoice created successfully.',
      data: invoice,
    };
  }

  async getInvoice(invoiceId: string) {
    const invoice =
      await this.invoiceRepository.getInvoice(invoiceId);

    if (!invoice) {
      throw new NotFoundException(
        'Invoice not found.',
      );
    }

    return {
      success: true,
      data: invoice,
    };
  }

  async updateInvoice(
    invoiceId: string,
    dto: UpdateInvoiceDto,
  ) {
    await this.getInvoice(invoiceId);

    const invoice =
      await this.invoiceRepository.updateInvoice(
        invoiceId,
        dto,
      );

    return {
      success: true,
      message: 'Invoice updated successfully.',
      data: invoice,
    };
  }

  async deleteInvoice(invoiceId: string) {
    await this.getInvoice(invoiceId);

    await this.invoiceRepository.deleteInvoice(
      invoiceId,
    );

    return {
      success: true,
      message: 'Invoice deleted successfully.',
    };
  }

  async searchInvoices(
    query: InvoiceQueryDto,
  ) {
    const invoices =
      await this.invoiceRepository.searchInvoices(
        query,
      );

    return {
      success: true,
      count: invoices.length,
      data: invoices,
    };
  }
}
