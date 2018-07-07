/**
 * For each of the following items, write a regular expression to test whether any of the given
 * substrings occur in a string. The regular expression should match only strings containing one
 * of the substrings described. Do not worry about word boundaries unless explicitly mentioned.
 *
 * When your expression works, see whether you can make it any smaller.
 */

function verify(regexp, yes, no) {
  if (regexp.source === '...') return;
  yes.forEach((str) => {
    if (!regexp.test(str)) {
      console.log(`Failure to match '${str}'`);
    } else {
      console.log(`Match for'${str}'`);
    }
  });
  no.forEach((str) => {
    if (regexp.test(str)) console.log(`Unexpected match for '${str}'`);
  });
}

// 1. car and cat
verify(/ca(r|t)/,
  ['my car', 'bad cats'],
  ['camper', 'high art']);

// 2. pop and prop
verify(/pr?op/,
  ['pop culture', 'mad props'],
  ['plop', 'prrrop']);

// 3. ferret, ferry, and ferrari
verify(/ferr(et|y|ari)/,
  ['ferret', 'ferry', 'ferrari'],
  ['ferrum', 'transfer A']);

// 4. Any word ending in ious
verify(/ious\b/,
  ['how delicious', 'spacious room'],
  ['ruinous', 'consciousness']);

// 5. A whitespace character followed by a period, comma, colon, or semicolon
verify(/\s[.,:;]/,
  ['bad punctuation .'],
  ['escape the period']);

// 6. A word longer than six letters
verify(/\w{7,}/,
  ['hottentottententen'],
  ['no', 'hotten totten tenten']);

// 7. A word without the letter e (or E)
verify(/^(.+ [^e]+|[^e]+ .+)$/i,
  ['red platypus', 'wobbling nest'],
  ['earth bed', 'learning ape', 'BEET']);
