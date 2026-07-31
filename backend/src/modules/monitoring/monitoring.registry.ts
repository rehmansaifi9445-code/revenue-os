import { Injectable } from '@nestjs/common';

import { MonitoringDefinition } from './monitoring.interface';

@Injectable()
export class MonitoringRegistry {
  private readonly registry = new Map<
    string,
    MonitoringDefinition
  >();

  register(
    monitoring: MonitoringDefinition,
  ): void {
    this.registry.set(
      monitoring.service,
      monitoring,
    );
  }

  unregister(service: string): void {
    this.registry.delete(service);
  }

  get(
    service: string,
  ): MonitoringDefinition | undefined {
    return this.registry.get(service);
  }

  getAll(): MonitoringDefinition[] {
    return Array.from(this.registry.values());
  }

  clear(): void {
    this.registry.clear();
  }
}
