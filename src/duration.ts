const UNIT_MS: Record<string, number> = {
  ms: 1,
  s: 1_000,
  m: 60_000,
  h: 3_600_000,
  d: 86_400_000,
};

/**
 * Parse a human duration such as "90s", "15m" or "1h30m" into milliseconds.
 * Returns NaN for input it does not understand.
 *
 *   parseDuration("1h30m") === 5_400_000
 */
export function parseDuration(input: string): number {
  const match = /^(\d+)(ms|s|m|h|d)$/.exec(input.trim());
  if (!match) return NaN;
  return Number(match[1]) * UNIT_MS[match[2]];
}
