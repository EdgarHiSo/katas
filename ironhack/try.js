function decoderRoman(roman) {
    let map = {
        M: 1000, CM: 900, D: 500, CD: 400, C: 100, XC: 90,
        L: 50, XL: 40, X: 10, IX: 9, V: 5, IV: 4, I: 1,
    };
    let chars = roman.split("");
    let count = 0; let i = 0;

    while(i < chars.length) {
        let char = chars[i]
        if (i < chars.length - 1) {
            let next = chars[i + 1]
            if (next + char in map) {
                count += map[char + next]
                i+= 2
            } else {
                i++
                count += map[char]
            }
        } else {
            count += map[char]
            i++
        }
    }
    return count
}
console.log(decoderRoman("IV"))

function isValid(parens) {
    let map = {")": "(", "}": "{", "]": "["}
    let stack = []
    for (let char of parens) {
        if (!map[char]) {
            stack.push(char)
        } else if (stack.pop() !== map[char]) {
            return false
        }
    }
    return stack.length == 0
}
console.log(isValid("(()()))"))

function getNumber(number) {
    let map = {
        M: 1000, CM: 900, D: 500, CD: 400, C: 100, XC: 90,
        L: 50, XL: 40, X: 10, IX: 9, V: 5, IV: 4, I: 1,
    };
    let output = ""
    for (let i in map) {
        while(number >= map[i]) {
            number -= map[i]
            output += i
        }
    }
    return output
}
console.log(getNumber(1520))

function decoding(roman) {
    let map = {
        M: 1000, CM: 900, D: 500, CD: 400, C: 100, XC: 90,
        L: 50, XL: 40, X: 10, IX: 9, V: 5, IV: 4, I: 1,
    };
    let count = 0
    let chars = roman.split("")
    let i = 0;
    while( i < roman.length) {
        let char = chars[i]
        if (i < roman.length -1) {
            let next = chars[i + 1]
            if (char + next in map) {
                count += map[char + next]
                i += 2
            } else {
                count += map[char]
                i++
            }
        } else {
            count += map[char]
            i++
        }
    }
    return count
}
console.log(decoding("IV"))

function getNumber(number) {
    let map = {
        M: 1000, CM: 900, D: 500, CD: 400, C: 100, XC: 90,
        L: 50, XL: 40, X: 10, IX: 9, V: 5, IV: 4, I: 1,
    };
    let output = "";
    for (let i in map) {
        while(number >= map[i]) {
            number -= map[i]
            output += i
        }
    }
    return output
}
console.log(getNumber(56))