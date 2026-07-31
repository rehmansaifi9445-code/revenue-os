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
import { WorkflowModule } from './modules/workflow/workflow.module';
import { EventModule } from './modules/event/event.module';
import { DecisionModule } from './modules/decision/decision.module';
import { RuleModule } from './modules/rule/rule.module';
import { AutomationModule } from './modules/automation/automation.module';
import { SchedulerModule } from './modules/scheduler/scheduler.module';
import { AnalyticsModule } from './modules/analytics/analytics.module';
import { MonitoringModule } from './modules/monitoring/monitoring.module';
import { SecurityModule } from './modules/security/security.module';
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
  WorkflowModule,
  EventModule,
  DecisionModule,
  RuleModule,                   
  AutomationModule,
  SchedulerModule,
  AnalyticsModule,
  MonitoringModule,
  SecurityModule,
 ] 
    

    
   
    // Database Module
    // Authentication Module
    // Memory Engine
    // Agent Engine
    // Security Engine
    // Audit Engine
    // Integration Engine
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
