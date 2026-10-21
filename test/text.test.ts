import { test } from "node:test";
import assert from "node:assert/strict";
import { slugify, truncate, parseDuration, splitCsvLine } from "../src/index.ts";

test("slugify keeps simple titles readable", () => {
  assert.equal(slugify("hello world"), "hello-world");
});

test("truncate leaves short text alone", () => {
  assert.equal(truncate("short", 10), "short");
});

test("parseDuration reads a single unit", () => {
  assert.equal(parseDuration("90s"), 90_000);
});

test("splitCsvLine splits plain fields", () => {
  assert.deepEqual(splitCsvLine("a,b,c"), ["a", "b", "c"]);
});
