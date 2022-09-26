// car and cat
verify(/ca[rt]/, ["my car", "bad cats"], ["camper", "high art"]);

// pop and prop
verify(/pr?op/, ["pop culture", "mad props"], ["plop", "prrrop"]);

// ferret, ferry, and ferrari
verify(
  /ferr(et|y|ari)/,
  ["ferret", "ferry", "ferrari"],
  ["ferrum", "transfer A", "ferrey"]
);

// Any word ending in ious
verify(
  /cious\b/,
  ["how delicious", "spacious room"],
  ["ruinous", "consciousness"]
);

// A white space character followed by a period, comma, colon, or semicolon
verify(/\s[.,:;]/, ["bad punctuation ."], ["escape the period"]);

// A word longer than six letters
verify(
  /\w{7,}/,
  ["Siebentausenddreihundertzweiundzwanzig"],
  ["no", "three small words"]
);

// A word without the letter e (or E)
verify(
  /\b[^\se]+\b/i,
  ["red platypus", "wobbling nest"],
  ["earth bed", "learning ape", "BEET"]
);

function verify(regexp, yes, no) {
  for (let str of yes)
    if (!regexp.test(str)) {
      console.log(`Failure to match '${str}'`);
    } else {
      console.log(`Match successful for '${str}'`);
    }
  for (let str of no)
    if (regexp.test(str)) {
      console.log(`Unexpected match for '${str}'`);
    }
}
