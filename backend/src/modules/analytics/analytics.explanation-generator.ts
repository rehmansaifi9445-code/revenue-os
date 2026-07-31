import { Injectable } from '@nestjs/common';

@Injectable()
export class AnalyticsExplanationGenerator {
  generate(
    metric: string,
    value: number,
  ): string {
    return `Metric: ${metric}, Value: ${value}`;
  }
}
