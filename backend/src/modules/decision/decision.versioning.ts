import { Injectable } from '@nestjs/common';

@Injectable()
export class DecisionVersioning {
  private readonly versions = new Map<string, number>();

  getVersion(decisionType: string): number {
    return this.versions.get(decisionType) ?? 1;
  }

  increment(decisionType: string): number {
    const version = this.getVersion(decisionType) + 1;

    this.versions.set(decisionType, version);

    return version;
  }

  reset(decisionType: string): void {
    this.versions.set(decisionType, 1);
  }

  clear(): void {
    this.versions.clear();
  }
}
