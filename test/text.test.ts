import { test } from "node:test";
import assert from "node:assert/strict";
import { slugify, truncate, parseDuration, splitCsvLine } from "../src/index.ts";

test("slugify keeps simple titles readable", () => {
  assert.equal(slugify("hello world"), "hello-world");
});

test("truncate leaves short text alone", () => {
  assert.equal(truncate("short", 10), "short");
});

test("truncate ends on a word boundary and keeps the ellipsis within max", () => {
  const result = truncate("The quick brown fox", 12);
  assert.equal(result, "The quick…");
  assert.ok(result.length <= 12);
});

test("truncate does not need to back up when the cut already lands on a space", () => {
  assert.equal(truncate("The quick brown fox", 10), "The quick…");
});

test("parseDuration reads a single unit", () => {
  assert.equal(parseDuration("90s"), 90_000);
});

test("splitCsvLine splits plain fields", () => {
  assert.deepEqual(splitCsvLine("a,b,c"), ["a", "b", "c"]);
});
