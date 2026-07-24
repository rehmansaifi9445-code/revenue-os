import { Module } from '@nestjs/common';
import { CustomerModule } from './modules/customer/customer.module';
import { BusinessModule } from './modules/business/business.module';
import { InvoiceModule } from './modules/invoice/invoice.module';
import { AuthModule } from './modules/auth/auth.module';
import { UserModule } from './modules/user/user.module';
import { PaymentModule } from './modules/payment/payment.module';
import { ReminderModule } from './modules/reminder/reminder.module';
import { RecoveryModule } from './modules/recovery/recovery.module';
import { NotificationModule } from './modules/notification/notification.module';
import { ConfigurationModule } from './modules/configuration/configuration.module';
@Module({
  imports: [
  AuthModule,
  UserModule,
  CustomerModule,
  BusinessModule,
  InvoiceModule,
  PaymentModule,
  ReminderModule,
  ConfigurationModule,
  NotificationModule,
  RecoveryModule, 
]

   
    // Database Module
    // Authentication Module
    // Workflow Engine
    // Rule Engine
    // Decision Engine
    // Memory Engine
    // Event Engine
    // Automation Engine
    // Agent Engine
    // Security Engine
    // Audit Engine
    // Integration Engine
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
