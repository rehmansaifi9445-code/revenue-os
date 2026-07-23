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

import { InvoiceService } from './invoice.service';

import { CreateInvoiceDto } from './dto/create-invoice.dto';
import { UpdateInvoiceDto } from './dto/update-invoice.dto';
import { InvoiceQueryDto } from './dto/invoice-query.dto';

@Controller('invoice')
export class InvoiceController {
  constructor(
    private readonly invoiceService: InvoiceService,
  ) {}

  @Post()
  createInvoice(
    @Body() dto: CreateInvoiceDto,
  ) {
    return this.invoiceService.createInvoice(dto);
  }

  @Get(':id')
  getInvoice(
    @Param('id') invoiceId: string,
  ) {
    return this.invoiceService.getInvoice(invoiceId);
  }

  @Patch(':id')
  updateInvoice(
    @Param('id') invoiceId: string,
    @Body() dto: UpdateInvoiceDto,
  ) {
    return this.invoiceService.updateInvoice(
      invoiceId,
      dto,
    );
  }

  @Delete(':id')
  deleteInvoice(
    @Param('id') invoiceId: string,
  ) {
    return this.invoiceService.deleteInvoice(
      invoiceId,
    );
  }

  @Get()
  searchInvoices(
    @Query() query: InvoiceQueryDto,
  ) {
    return this.invoiceService.searchInvoices(query);
  }
}
