/**
 * Write a higher-order function loop 
 * that provides something like a for loop statement. 
 * It takes a value, a test function, an update function, and a body function. 
 * Looping:
 * Run the test function on the current loop value and stop if false. 
 * Call the body function, giving it the current value. 
 * Call the update function to create a new value and start from the beginning.
 * 
 * You can use a regular loop to do the actual looping.
 * 
 * loop(3, n => n > 0, n => n - 1, console.log);
 * → 3
 * → 2
 * → 1
 */

const loop = function loop (val, test, update, body) {
    let step = val
    do {
        body(step)
        step = update(step)
    } while (test(step))
}

loop(3, (n) => n > 0, (n) => n - 1, console.log)