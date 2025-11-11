// Regexp Golf
//
// For each of the following items, write a regular expression to test whether
// the given pattern occurs in a string. The regular expression should match
// only strings containing the pattern. When your expression works, see whether
// you can make it any smaller.
//
// 1. car and cat
// 2. pop and prop
// 3. ferret, ferry, and ferrari
// 4. Any word ending in ious
// 5. A whitespace character followed by a period, comma, colon, or semicolon
// 6. A word longer than six letters
// 7. A word without the letter e (or E)

export const patterns = {
  carAndCat: /ca[t|r]/,
  popAndProp: /pr?op/,
  ferretFerryAndFerrari: /ferr[et|y|ari]/,
  wordEndingInIous: /\b\w+ious\b/,
  whitespaceFollowedByPunctuation: /\s[.,;:]/,
  wordLongerThanSixLetters: /\b\w{7,}\b/,
  wordWithoutLetterE: /\b[a-df-zA-DF-Z]+\b/,
};
