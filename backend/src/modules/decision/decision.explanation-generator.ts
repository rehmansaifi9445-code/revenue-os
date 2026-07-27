import { Injectable } from '@nestjs/common';

@Injectable()
export class DecisionExplanationGenerator {
  generate(
    decision: string,
    confidence: number,
  ): string {
    return `Decision: ${decision}, Confidence: ${confidence}%`;
  }
}
