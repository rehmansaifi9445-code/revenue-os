import { Injectable } from '@nestjs/common';

@Injectable()
export class RuleVersioning {
  private readonly versions = new Map<string, number>();

  getVersion(ruleName: string): number {
    return this.versions.get(ruleName) ?? 1;
  }

  increment(ruleName: string): number {
    const version = this.getVersion(ruleName) + 1;

    this.versions.set(ruleName, version);

    return version;
  }

  reset(ruleName: string): void {
    this.versions.set(ruleName, 1);
  }

  clear(): void {
    this.versions.clear();
  }
}
