/**
 * For each of the following items, write a regular expression to test whether any of the given
 * substrings occur in a string. The regular expression should match only strings containing one
 * of the substrings described. Do not worry about word boundaries unless explicitly mentioned.
 *
 * When your expression works, see whether you can make it any smaller.
 *
 * 1. car and cat
 *
 * 2. pop and prop
 *
 * 3. ferret, ferry, and ferrari
 *
 * 4. Any word ending in ious
 *
 * 5. A whitespace character followed by a period, comma, colon, or semicolon
 *
 * 6. A word longer than six letters
 *
 * 7. A word without the letter e (or E)
 */

// Fill in the regular expressions

function verify(regexp, yes, no) {
  if (regexp.source === '...') return;
  yes.forEach((str) => {
    if (!regexp.test(str)) console.log(`Failure to match '${str}'`);
  });
  no.forEach((str) => {
    if (regexp.test(str)) console.log(`Unexpected match for '${str}'`);
  });
}

verify(/.../,
  ['my car', 'bad cats'],
  ['camper', 'high art']);

verify(/.../,
  ['pop culture', 'mad props'],
  ['plop', 'prrrop']);

verify(/.../,
  ['ferret', 'ferry', 'ferrari'],
  ['ferrum', 'transfer A']);

verify(/.../,
  ['how delicious', 'spacious room'],
  ['ruinous', 'consciousness']);

verify(/.../,
  ['bad punctuation .'],
  ['escape the period']);

verify(/.../,
  ['hottentottententen'],
  ['no', 'hotten totten tenten']);

verify(/.../,
  ['red platypus', 'wobbling nest'],
  ['earth bed', 'learning ape', 'BEET']);
