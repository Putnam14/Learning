/**
 * Creates lists from values given in an array
 * @param {array} arr Array to listify
 * @returns {object} List of values
 */
const arrayToList = function arrayToList(arr) {
    let list = {}
    arr.reverse()
    for (each in arr) list = prepend(arr[each], list)
    return list
}

/**
 * Prepends an element to an existing list
 * @param {*} val Element to add to list
 * @param {object} list List to add element to
 * @returns {object} List with new element prepended
 */
const prepend = function prepend(val, list) {
    list = {
        value: val,
        rest: list
    }
    return list
}

/**
 * Takes a list and converts the values to an array
 * @param {object} list List to array-ify
 * @param {array} arr Array to add the list to - optional
 * @returns {array} Array of values from list
 */
const listToArray = function listToArray(list, arr) {
    if (list.hasOwnProperty('rest')) {
        let temp = arr || []
        temp.push(list.value)
        return listToArray(list.rest, temp)
    } else {
        return arr
    }
}

/**
 * Returns the element at the nth position in an array
 * @param {number} pos Element to find
 * @param {object} obj Object to search in
 */
const nth = function nth(pos, obj) {
    let result = undefined
    if (!(obj.hasOwnProperty('value')) || pos < 0) return undefined
    if (pos == 0) result = obj.value
    return result || nth(pos - 1, obj.rest)
}

//Tests
console.log(arrayToList([1, 2, 3]))
console.log(listToArray(arrayToList([1, 2, 3])))
console.log(nth(-1, arrayToList([1, 2, 3])))
console.log(nth(0, arrayToList([1, 2, 3])))
console.log(nth(1, arrayToList([1, 2, 3])))
console.log(nth(2, arrayToList([1, 2, 3])))