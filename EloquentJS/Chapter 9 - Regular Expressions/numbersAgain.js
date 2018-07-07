/**
 * Numbers again
 *
 * Write an expression that matches only JavaScript-style numbers. It must support an optional
 * minus or plus sign in front of the number, the decimal dot, and exponent notation—5e-3 or
 * 1E10—again with an optional sign in front of the exponent. Also note that it is not necessary
 * for there to be digits in front of or after the dot, but the number cannot be a dot alone.
 * That is, .5 and 5. are valid JavaScript numbers, but a lone dot isn’t.
 */

// Fill in this regular expression.
const number = /^(-|\+)?(\d+|\d+\.)?(\.\d+?)?(e(-|\+)?\d+)?$/i;

// Tests:

['1', '-1', '+15', '1.55', '.5', '5.', '1.3e2', '1E-4', '1e+12'].forEach((str) => {
  if (!number.test(str)) {
    console.log(`Failed to match '${str}'`);
  }
});
['1a', '+-1', '1.2.3', '1+1', '1e4.5', '.5.', '1f5', '.'].forEach((str) => {
  if (number.test(str)) {
    console.log(`Incorrectly accepted '${str}'`);
  }
});