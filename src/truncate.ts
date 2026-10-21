export interface TruncateOptions {
  /** Appended when the text is shortened. Counts toward `max`. */
  ellipsis?: string;
}

/**
 * Shorten `text` to at most `max` characters, ending on a word boundary and
 * appending an ellipsis when anything was cut.
 *
 *   truncate("The quick brown fox", 12) === "The quick…"
 */
export function truncate(text: string, max: number, options: TruncateOptions = {}): string {
  const ellipsis = options.ellipsis ?? "…";
  if (text.length <= max) return text;
  return text.slice(0, max) + ellipsis;
}
