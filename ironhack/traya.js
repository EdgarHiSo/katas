// valid parens??
function validparens(parens) {
    map = { ")": "(", "}": "{", "]": "[" }
    let stack = []
    for (let char of parens) {
        if (!map[char]) {
            stack.push(char)
        }
        else if (stack.pop() !== map[char]) {
            return false
        }
    }
    return stack.length == 0
}
console.log(validparens("(()))"))

//coder numberRoman


function getNumberFromRoman(number) {
    let map = { M: 1000, CM: 900, D: 500, XD: 400, C: 100, XC: 900, L: 50, XL: 40, X: 10, IX: 9, V: 5, IV: 4, I: 1 }
    let output = ""
    for (let i in map)
        while (number >= map[i]) {
            output += i;
            number -= map[i]
        }
    return output
}
console.log(getNumberFromRoman(890))

function decoreded(roman) {
    let map = { M: 1000, CM: 900, D: 500, XD: 400, C: 100, XC: 900, L: 50, XL: 40, X: 10, IX: 9, V: 5, IV: 4, I: 1 }
    let chars = roman.split("")
    let number = 0
    let i = 0
    while (i < chars.length) {
        let char = chars[i]
        if (i < chars.length - 1) {
            let next = chars[i + 1]
            if (char + next in map) {
                number += map[char + next]
                i += 2
            } else {
                i++
                number += map[char]
            }
        } else {
            i++
            number += map[char]
        }
    }
    return number
}
console.log(decoreded("LV"))