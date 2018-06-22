/**
 * Returns an array containing all the numbers from start up to and including end, optionally stepped
 * @param {number} start Start number
 * @param {number} end End number, array will include this
 * @param {number} step How to increment the number, defaults to 1
 * @returns {array} Range
 */
const range = function range(start, end, step) {
    let increment = step || 1
    let result = []
    if (start < end) {
        for (let i = start; i <= end; i += increment) {
            result.push(i)
        }
    } else {
        for (let i = start; i >= end; i += increment) {
            result.push(i)
        }
    }
    return result
}

/**
 * Returns the sum of an array
 * @param {array} arr Array to be summed
 * @returns {number} Sum of array
 */
const sum = function sum(arr) {
    let result = 0
    for (each in arr) {
        result += parseInt(arr[each])
    }
    return result
}

//Test cases
console.log(sum([10]))
console.log(range(1, 4)) //[1, 2, 3, 4]
console.log(sum(range(1, 10)) == 55)
console.log(range(1, 10, 2)) // [1, 3, 5, 7, 9])
console.log(range(5, 2, -1)) // [5, 4, 3, 2])
console.log(sum(range(5, 2, -1)) == 14)
