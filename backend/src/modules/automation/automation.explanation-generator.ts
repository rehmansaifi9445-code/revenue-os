import { Injectable } from '@nestjs/common';

@Injectable()
export class AutomationExplanationGenerator {
  generate(
    automation: string,
    confidence: number,
  ): string {
    return `Automation: ${automation}, Confidence: ${confidence}%`;
  }
}
