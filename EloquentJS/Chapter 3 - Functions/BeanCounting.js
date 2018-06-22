/**
 * How many uppercase 'B's are in a string?
 * @param {string} str - Any string
 * @returns {number} - Number of 'B's in str
 */
const countBs = function countBs (str) {
    let counter = 0
    for (let i = 0; i < str.length; i++) {
        if (str.charAt(i) == 'B') {counter += 1}
    }

    return counter
}

/**
 * How many of the specified character are in a string?
 * @param {string} str - Any string
 * @param {string} char - Any single character
 * @returns {number} - Number of char in str
 */
const countChar = function countChar (str, char) {
    let counter = 0
    for (let i = 0; i < str.length; i++) {
        if (str.charAt(i) == char) {counter += 1}
    }

    return counter
}

//test countBs
console.log(countBs('Bridger is Badass') == 2)
console.log(countBs('') == 0)
console.log(countBs('BBBBbB') == 5)

//test countChar
console.log(countChar('Scout is a dingus', 's') == 2)
console.log(countChar('Bridger is Badass', 'B') == 2)
console.log(countChar('Eeeee', 'x') == 0)