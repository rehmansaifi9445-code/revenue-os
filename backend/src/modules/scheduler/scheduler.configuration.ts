import { Injectable } from '@nestjs/common';

@Injectable()
export class SchedulerConfiguration {
  private configuration = {
    enableRetry: true,

    enableAudit: true,

    enableHistory: true,

    autoPublishEvent: true,

    enableTimeZone: true,

    maxRetryCount: 5,
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
