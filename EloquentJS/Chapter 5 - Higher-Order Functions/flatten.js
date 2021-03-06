/**
 * Use the reduce method 
 * in combination with the concat method 
 * to “flatten” an array of arrays 
 * into a single array 
 * that has all the elements of the original arrays.
 */

const flatten = function flatten (arrays) {
    return arrays.reduce((a, b) => a.concat(b), [])
}

console.log(flatten([[1, 2, 3], [4, 5], [6]]))