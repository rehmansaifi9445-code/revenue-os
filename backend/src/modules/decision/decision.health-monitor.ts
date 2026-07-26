import { Injectable } from '@nestjs/common';

@Injectable()
export class DecisionHealthMonitor {
  getHealth() {
    return {
      status: 'UP',
      service: 'Decision Engine',
      timestamp: new Date(),
    };
  }
}
