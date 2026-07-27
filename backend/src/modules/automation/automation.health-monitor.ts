import { Injectable } from '@nestjs/common';

@Injectable()
export class AutomationHealthMonitor {
  getHealth() {
    return {
      service: 'Automation Engine',
      status: 'UP',
      timestamp: new Date(),
    };
  }
}
