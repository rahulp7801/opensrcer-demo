/**
 * Turn a title into a URL slug: lowercase ASCII letters and digits, words
 * joined by single dashes.
 *
 *   slugify("Hello, World!") === "hello-world"
 */
export function slugify(input: string): string {
  return input
    .normalize("NFKD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]/g, "-");
}
