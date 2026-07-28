import { Injectable } from '@nestjs/common';

@Injectable()
export class SchedulerPipeline {
  async execute(
    steps: Array<() => Promise<void>>,
  ): Promise<void> {
    for (const step of steps) {
      await step();
    }
  }
}
