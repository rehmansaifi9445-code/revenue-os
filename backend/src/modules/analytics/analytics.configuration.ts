import { Injectable } from '@nestjs/common';

@Injectable()
export class AnalyticsConfiguration {
  private configuration = {
    enableCache: true,

    enableAudit: true,

    enableHistory: true,

    autoPublishEvent: true,

    enableAI: true,

    maxHistoryRecords: 1000,
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
