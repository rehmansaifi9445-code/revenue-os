import { Injectable } from '@nestjs/common';

@Injectable()
export class SchedulerHealthMonitor {
  getHealth() {
    return {
      service: 'Scheduler Engine',
      status: 'UP',
      timestamp: new Date(),
    };
  }
}
