import { test } from "node:test";
import assert from "node:assert/strict";
import { slugify, truncate, parseDuration, splitCsvLine } from "../src/index.ts";

test("slugify keeps simple titles readable", () => {
  assert.equal(slugify("hello world"), "hello-world");
});

test("truncate leaves short text alone", () => {
  assert.equal(truncate("short", 10), "short");
});

test("truncate ends on a word boundary within max", () => {
  const result = truncate("The quick brown fox", 12);
  assert.equal(result, "The quick…");
  assert.ok(result.length <= 12);
});

test("truncate counts a custom ellipsis toward max", () => {
  const result = truncate("The quick brown fox", 12, { ellipsis: "..." });
  assert.equal(result, "The quick...");
  assert.ok(result.length <= 12);
});

test("truncate hard-cuts a single oversized word", () => {
  assert.equal(truncate("abcdefghij", 5), "abcd…");
});

test("truncate keeps a clean cut when the budget lands on a space", () => {
  assert.equal(truncate("hello world foo", 12), "hello world…");
});

test("parseDuration reads a single unit", () => {
  assert.equal(parseDuration("90s"), 90_000);
});

test("splitCsvLine splits plain fields", () => {
  assert.deepEqual(splitCsvLine("a,b,c"), ["a", "b", "c"]);
});
