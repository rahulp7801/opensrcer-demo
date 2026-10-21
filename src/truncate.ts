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

  // The ellipsis counts toward `max`, so it has to come out of the budget first.
  const budget = max - ellipsis.length;
  if (budget <= 0) return ellipsis.slice(0, Math.max(max, 0));

  let head = text.slice(0, budget);
  // If the character just past the budget is not whitespace we cut inside a
  // word; walk back to the previous word boundary. Keep the hard cut when the
  // first word alone is already longer than the budget.
  if (!/\s/.test(text.charAt(budget))) {
    const boundary = head.replace(/\S*$/, "");
    if (boundary.trim().length > 0) head = boundary;
  }

  return head.replace(/\s+$/, "") + ellipsis;
}
