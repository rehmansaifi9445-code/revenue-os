import { Injectable } from '@nestjs/common';

@Injectable()
export class SchedulerExplanationGenerator {
  generate(
    jobType: string,
    confidence: number,
  ): string {
    return `Scheduler Job: ${jobType}, Confidence: ${confidence}%`;
  }
}
