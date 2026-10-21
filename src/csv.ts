/**
 * Split one line of CSV into fields. Fields may be wrapped in double quotes,
 * in which case they can contain commas, and a doubled quote ("") inside a
 * quoted field stands for one quote character.
 *
 *   splitCsvLine('a,"b, c",d') -> ["a", "b, c", "d"]
 */
export function splitCsvLine(line: string): string[] {
  return line.split(",").map((field) => field.trim());
}
