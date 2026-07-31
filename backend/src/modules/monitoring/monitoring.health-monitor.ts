import { Injectable } from '@nestjs/common';

@Injectable()
export class MonitoringHealthMonitor {
  getHealth() {
    return {
      service: 'Monitoring Engine',
      status: 'UP',
      timestamp: new Date(),
    };
  }
}
