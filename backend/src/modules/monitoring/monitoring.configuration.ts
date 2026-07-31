import { Injectable } from '@nestjs/common';

@Injectable()
export class MonitoringConfiguration {
  private configuration = {
    enableHealthCheck: true,

    enableAudit: true,

    enableHistory: true,

    autoPublishEvent: true,

    enableAlerts: true,

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
