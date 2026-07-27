import { Injectable } from '@nestjs/common';

@Injectable()
export class AutomationVersioning {
  private readonly versions = new Map<string, number>();

  getVersion(type: string): number {
    return this.versions.get(type) ?? 1;
  }

  increment(type: string): number {
    const version = this.getVersion(type) + 1;

    this.versions.set(type, version);

    return version;
  }

  reset(type: string): void {
    this.versions.set(type, 1);
  }

  clear(): void {
    this.versions.clear();
  }
}
