import { Injectable } from '@nestjs/common';

@Injectable()
export class SchedulerAIAdapter {
  async analyze(
    input: Record<string, any>,
  ): Promise<Record<string, any>> {
    /**
     * Future
     *
     * OpenAI
     * Gemini
     * Claude
     * Local LLM
     * RevenueFlow AI Kernel
     */

    return {
      recommendation: 'PENDING',
      confidence: 0,
    };
  }
}
