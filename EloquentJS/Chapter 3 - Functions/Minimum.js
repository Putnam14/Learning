/**
 * Write a function min that takes two arguments and returns their minimum
 * @param {number} num1 - A positive or negative number
 * @param {number} num2 - A positive or negative number
 * @returns {number} - Min of num1 and num2
 */
const min = function min (num1, num2) {
    let result = num1
    if (num1 >= num2) {result = num2}

    return result
}

//test min
console.log(min(1, 2) == 1)
console.log(min(2, 1) == 1)
console.log(min(2, -900) == -900)