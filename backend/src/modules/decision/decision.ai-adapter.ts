import { Injectable } from '@nestjs/common';

@Injectable()
export class DecisionAIAdapter {
  async analyze(
    input: Record<string, any>,
  ): Promise<Record<string, any>> {
    /**
     * Future
     *
     * OpenAI
     * Gemini
     * Claude
     * Local AI
     * Multi Brain System
     */

    return {
      recommendation: 'PENDING',
      confidence: 0,
    };
  }
}
