export class CreateInvoiceDto {
  businessId: string;

  customerId: string;

  invoiceNumber: string;

  issueDate: Date;

  dueDate: Date;

  subtotal: number;

  taxAmount?: number;

  discountAmount?: number;

  totalAmount: number;

  paidAmount?: number;

  balanceAmount: number;

  notes?: string;
}
