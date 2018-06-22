/**
 * Positive whole number isEven detector
 * Zero is even
 * One is odd
 * For any other number N, its evenness is the same as N - 2
 * @param {number} num - Any positive whole number
 * @returns {number} - Is num even?
 */
const isEven = function isEven (num) {
    let result = ''
    if (num < 0) {result = 'Please enter a positive whole number'}
    if (num == 0) {result = 'even'}
    if (num == 1) {result = 'odd'}

    return result || isEven(num-2)
}

//Test cases
console.log(isEven(50) == 'even')
console.log(isEven(75) == 'odd')
console.log(isEven(-1) == 'Please enter a positive whole number')
console.log(isEven(1.1) == 'Please enter a positive whole number')