import { Injectable } from '@nestjs/common';

@Injectable()
export class EventHealthMonitor {
  getHealth() {
    return {
      status: 'UP',
      timestamp: new Date(),
      service: 'Event Engine',
    };
  }
}
