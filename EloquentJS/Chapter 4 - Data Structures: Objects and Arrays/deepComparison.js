/**
 * Takes two values and returns true only if they are the same value 
 * or are objects with the same properties whose values 
 * are also equal when compared with a recursive call to deepEqual
 * @param {*} one First value
 * @param {*} two Second value
 * @returns {boolean} True if all is equal, false if not
 */
const deepEqual = function deepEqual(one, two) {
    let result = true
    let propsOne = 0
    let propsTwo = 0
    if (!(one === two)) {
        if (one == null || two == null || typeof one != 'object' || typeof two != 'object') {
            result = false
        } else {
            for (each in one) {
                propsOne = propsOne + 1
                if (!(each in two) || !(deepEqual(one[each], two[each]))) result = false
            }
            for (each in two) propsTwo = propsTwo + 1
            if (propsOne != propsTwo) result = false
        }
    }
    return result
}

//Test
console.log(deepEqual([2, 4], [2, 4]))
console.log(deepEqual(1, 1))
console.log(deepEqual(1, 2))
console.log(deepEqual({one: 'one', two: 'two'}, {one: 'one', two: 'two'}))
console.log(deepEqual({one: 'one', two: 'two', three: 'three'}, {one: 'one', two: 'two'}))
console.log(deepEqual({one: 'one', two: {two: 'two', three: 'three'}}, {one: 'one', two: 'two'}))
console.log(deepEqual([2, 4], [2, 3]))
console.log(deepEqual({one: 'one', two: 'two'}, {one: 'one', two: 'tw'}))