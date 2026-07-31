import { Injectable } from '@nestjs/common';

@Injectable()
export class AnalyticsPipeline {
  async execute(
    steps: Array<() => Promise<void>>,
  ): Promise<void> {
    for (const step of steps) {
      await step();
    }
  }
}
