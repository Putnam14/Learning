/**
 * Returns true when the given function returns true 
 * for every element in the array.
 * Implement every as a function that takes an array 
 * and a predicate function as parameters. 
 * Write two versions, one using a loop 
 * and one using the some method.
*/

const everyLoop = function everyLoop (array, test) {
    let result = true
    for (let part of array) {
        if (!test(part)) {result = false}
    }
    
    return result
}

const everySome = function everySome (array, test) {
    return !array.some((n) => !test(n))
} //De Morgan's law: !(!A || !B) = True

console.log(everyLoop([1, 3, 5], (n) => n < 10));
console.log(everySome([1, 3, 5], (n) => n < 10));
//true
console.log(everyLoop([2, 4, 16], (n) => n < 10));
console.log(everySome([2, 4, 16], (n) => n < 10));
//false
console.log(everyLoop([], (n) => n < 10));
console.log(everySome([], (n) => n < 10));
//true