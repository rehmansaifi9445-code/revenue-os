import { Injectable } from '@nestjs/common';

@Injectable()
export class AnalyticsHealthMonitor {
  getHealth() {
    return {
      service: 'Analytics Engine',
      status: 'UP',
      timestamp: new Date(),
    };
  }
}
