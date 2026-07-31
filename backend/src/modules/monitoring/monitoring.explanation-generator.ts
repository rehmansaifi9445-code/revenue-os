import { Injectable } from '@nestjs/common';

@Injectable()
export class MonitoringExplanationGenerator {
  generate(
    service: string,
    status: string,
  ): string {
    return `Service: ${service}, Status: ${status}`;
  }
}
