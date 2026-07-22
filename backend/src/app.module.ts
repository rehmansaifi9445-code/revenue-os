import { Module } from '@nestjs/common';
import { CustomerModule } from './modules/customer/customer.module';
@Module({
  imports: [
   CustomerModule,

    // Configuration Module
    // Database Module
    // Authentication Module
    // User Module
    // Business Module
    // Customer Module
    // Invoice Module
    // Payment Module
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
