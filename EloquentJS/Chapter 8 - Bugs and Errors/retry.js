
/** Retry
 * Say you have a function primitiveMultiply that in 20 percent of cases multiplies two numbers
 * and in the other 80 percent of cases raises an exception of type MultiplicatorUnitFailure.
 * Write a function that wraps this clunky function and just keeps trying until a call succeeds,
 * after which it returns the result.
 *
 * Make sure you handle only the exceptions you are trying to handle.
 */

class MultiplicatorUnitFailure extends Error {}

function primitiveMultiply(a, b) {
  if (Math.random() < 0.2) return a * b;
  throw new MultiplicatorUnitFailure('Klunk');
}

/** Looping method
 * function reliableMultiply(a, b) {
 *   for (;;) {
 *     try {
 *       return primitiveMultiply(a, b);
 *     } catch (e) {
 *      if (!(e instanceof MultiplicatorUnitFailure)) throw (e);
 *     }
 *   }
 * }
 */

/** Recursion method */
function reliableMultiply(a, b) {
  try {
    return primitiveMultiply(a, b);
  } catch (e) {
    if (!(e instanceof MultiplicatorUnitFailure)) throw (e);
    return reliableMultiply(a, b);
  }
}

console.log(reliableMultiply(8, 8));
// → 64
