/**
 * Reverses an array using a temporary array
 * @param {array} arr Starting array
 * @returns {array} Reversed array
 */
const reverseArray = function reverseArray(arr) {
    let result = []
    for (each in arr) {
        result.unshift(arr[each])
    }
    return result
}

/**
 * Reverses an array by modifying the array
 * @param {array} arr Starting array
 * @returns {array} Reversed array
 */
const reverseArrayInPlace = function reverseArrayInPlace(arr) {
    let length = arr.length
    for (let i = length; i > 0; i--) {
        arr.push(arr[i - 1])
    }
    return arr.slice(length)
}

console.log(reverseArray([1, 2, 3])) //[3, 2, 1]
console.log(reverseArrayInPlace([1, 2, 3])) //[3, 2, 1]