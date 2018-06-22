const SCRIPTS = require('./scripts.js').scripts

/**
 * Write a function that computes the dominant 
 * writing direction in a string of text. 
 * Remember that each script object has a 
 * direction property that can be "ltr" (left to right), 
 * "rtl" (right to left), or "ttb" (top to bottom).
 * The dominant direction is the direction of a 
 * majority of the characters that have a script 
 * associated with them. The characterScript and 
 * countBy functions defined earlier in the chapter 
 * are probably useful here.
*/

const characterScript = function characterScript (code) {
    for (let script of SCRIPTS) {
        if (script.ranges.some(([from, to]) => code >= from && code < to)) {
            return script
        }
    }

    return null
}

console.log(characterScript(121))
//{name: "Latin", …}

const countBy = function countBy (items, groupName) {
    let counts = []
    for (let item of items) {
        let name = groupName(item)
        let known = counts.findIndex((c) => c.name == name)
        if (known == -1) {
            counts.push({
                'count': 1,
                name
            })
        } else {
            counts[known].count += 1
        }
    }

    return counts
}

console.log(countBy([1, 2, 3, 4, 5], (n) => n > 2));
//[{name: false, count: 2}, {name: true, count: 3}]


const scriptDirection = function scriptDirection (text) {
    let directions = countBy(text, (char) => {
        let script = characterScript(char.codePointAt(0))
        if (script) {
            return script.direction
        }

        return 'none'
    }).filter((dir) => dir !== 'none')

    return directions.sort((a, b) => b.count > a.count)[0].name
}


console.log(scriptDirection('Hello!'))
console.log(scriptDirection('Hey, مساء الخير'))