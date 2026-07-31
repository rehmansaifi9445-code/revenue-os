import { Injectable } from '@nestjs/common';

import { MonitoringDefinition } from './monitoring.interface';

@Injectable()
export class MonitoringCache {
  private readonly cache = new Map<
    string,
    MonitoringDefinition
  >();

  set(
    monitoring: MonitoringDefinition,
  ): void {
    this.cache.set(
      monitoring.service,
      monitoring,
    );
  }

  get(
    service: string,
  ): MonitoringDefinition | undefined {
    return this.cache.get(service);
  }

  has(service: string): boolean {
    return this.cache.has(service);
  }

  remove(service: string): void {
    this.cache.delete(service);
  }

  clear(): void {
    this.cache.clear();
  }

  getAll(): MonitoringDefinition[] {
    return Array.from(this.cache.values());
  }
}
