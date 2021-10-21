function validParens(parens) {
    let map = { ")": "(", "}": "{", "]": "[" }
    let stack = []
    for (let paren of parens) {
        if (!map[paren]) {
            stack.push(paren)
        }
        else if (stack.pop() !== map[paren]) {
            return false
        }
    }
    return stack.length == 0
}

function decoderRoman(number) {
    let map = { 
        M: 1000, CM: 900, D: 500, CD: 400, C: 100, XC: 90,
        L: 50, XL: 40, X: 100, IX: 9, V: 5, IV: 4, I: 1 }
    let output = ""
    for (let i in map) {
        while (number >= map[i]) {
            number -= map[i]
            output += i
        }
    }
    return output
}
console.log(decoderRoman(95))

function fromRomanToNumber(roman) {
    let map = { M: 1000, CM: 900, D: 500, CD: 400, C: 100, XC: 90, L: 50, XL: 40, X: 100, IX: 9, V: 5, IV: 4, I: 1 }
    let chars = roman.split("")
    let count = 0
    let i = 0;
    while (i < chars.length) {
        let char = chars[i]
        if (i < chars.length - 1) {
            let next = chars[i + 1] 
            if (char + next in map) {
                count += map[char + next];
                i += 2
            } else {
                count += map[char]
                i++
            }
        } else {
            count += map[char];
            i++
        }
    }
    return count
 }