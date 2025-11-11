import { describe, it } from "node:test";
import assert from "node:assert/strict";

import { patterns } from "../../src/chapter9/exercise1.js";

const contains = (text, pattern) => pattern.test(text);
const missing = (text, pattern) => !contains(text, pattern);

describe("Chapter 9, Exercise 1", () => {
  it("matches car and cat", () => {
    const pattern = patterns.carAndCat;
    assert.ok(missing("camper", pattern));
    assert.ok(missing("high art", pattern));
    assert.ok(contains("bad cats", pattern));
    assert.ok(contains("my car", pattern));
  });

  it("matches pop and prop", () => {
    const pattern = patterns.popAndProp;
    assert.ok(missing("plop", pattern));
    assert.ok(missing("prrrop", pattern));
    assert.ok(contains("pop culture", pattern));
    assert.ok(contains("mad props", pattern));
  });

  it("matches ferret, ferry, and ferrari", () => {
    const pattern = patterns.ferretFerryAndFerrari;
    assert.ok(missing("ferrum", pattern));
    assert.ok(missing("transfer A", pattern));
    assert.ok(contains("ferret", pattern));
    assert.ok(contains("ferry", pattern));
    assert.ok(contains("ferrari", pattern));
  });

  it("matches any word ending in ious", () => {
    const pattern = patterns.wordEndingInIous;
    assert.ok(missing("ruinous", pattern));
    assert.ok(missing("consciousness", pattern));
    assert.ok(contains("how delicious", pattern));
    assert.ok(contains("spacious room", pattern));
  });

  it("matches a whitespace character followed by a period, comma, colon, or semicolon", () => {
    const pattern = patterns.whitespaceFollowedByPunctuation;
    assert.ok(missing("escape the period", pattern));
    assert.ok(contains("bad punctuation .", pattern));
  });

  it("matches a word longer than six letters", () => {
    const pattern = patterns.wordLongerThanSixLetters;
    assert.ok(missing("no", pattern));
    assert.ok(missing("three small words", pattern));
    assert.ok(contains("Siebentausenddreihundertzweiundzwanzig", pattern));
  });

  it("matches a word without the letter e (or E)", () => {
    const pattern = patterns.wordWithoutLetterE;
    assert.ok(missing("earth bed", pattern));
    assert.ok(missing("bedrøvet abe", pattern));
    assert.ok(missing("BEET", pattern));
    assert.ok(contains("red platypus", pattern));
    assert.ok(contains("wobbling nest", pattern));
  });
});
