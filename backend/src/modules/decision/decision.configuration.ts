import { Injectable } from '@nestjs/common';

@Injectable()
export class DecisionConfiguration {
  private configuration = {
    enableAI: true,

    enableAudit: true,

    enableHistory: true,

    autoPublishEvent: true,

    maxDecisionDepth: 10,
  };

  get() {
    return this.configuration;
  }

  update(
    config: Partial<typeof this.configuration>,
  ) {
    this.configuration = {
      ...this.configuration,
      ...config,
    };

    return this.configuration;
  }
}
