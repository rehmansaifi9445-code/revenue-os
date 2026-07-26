export const RULE_ENGINE = 'RULE_ENGINE';

export const DEFAULT_RULE_PRIORITY = 1;

export const RULE_STATUS = {
  ACTIVE: 'ACTIVE',
  INACTIVE: 'INACTIVE',
} as const;

export const RULE_RESULT = {
  PASSED: 'PASSED',
  FAILED: 'FAILED',
  SKIPPED: 'SKIPPED',
} as const;

export type RuleResult =
  (typeof RULE_RESULT)[keyof typeof RULE_RESULT];
