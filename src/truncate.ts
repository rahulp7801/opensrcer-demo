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
  if (max <= ellipsis.length) return ellipsis.slice(0, max);

  const budget = max - ellipsis.length;
  let truncated = text.slice(0, budget);
  if (text[budget] !== " ") {
    const lastSpace = truncated.lastIndexOf(" ");
    if (lastSpace > 0) truncated = truncated.slice(0, lastSpace);
  }
  return truncated.trimEnd() + ellipsis;
}
