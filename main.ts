// Make the Judge Smile — make.fun bounty
// u-gentle-badger-68-make-the-judge-smile-9228676d
//
// One line, at most 200 characters, about a small good thing that
// happened today. Deterministic: the same line, byte for byte, on
// every run.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

// The line. A small kindness on an ordinary morning: a bus driver
// waits while an old man counts his coins, then covers the shortfall
// from his own pocket and waves him aboard like royalty. Warmth in
// the waiting, surprise in the driver paying, one concrete detail
// (the fifty cents) — and the last image lands the smile.
const LINE =
  "At 7 a.m. the bus driver waited while an old man counted his coins one by one, then covered the last fifty cents from his own pocket and waved him aboard like royalty.";

const OUT_PATH = "/output/entry.txt";
const MAX_CHARS = 200;

// A smile line is only worth submitting if it is one real line of text.
if (LINE.length === 0 || LINE.length > MAX_CHARS) {
  throw new Error(`line must be 1-${MAX_CHARS} chars, got ${LINE.length}`);
}
if (LINE.includes("\n") || LINE.trim().length === 0) {
  throw new Error("line must be a single non-blank line");
}

mkdirSync(dirname(OUT_PATH), { recursive: true });
writeFileSync(OUT_PATH, LINE, "utf8");

// No trailing newline: the gate counts every character, and the file
// must hold exactly the line — nothing before it, nothing after it.
console.log(`wrote ${LINE.length} chars to ${OUT_PATH}`);
