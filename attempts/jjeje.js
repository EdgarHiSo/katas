function validsParens(parens) {
    let map = { ")": "(", "}": "{", "]": "[" };
    let stack = [];
    for (let paren of parens) {
        if (!map[paren]) {
            stack.push(paren)
        } else if (stack.pop() !== map[paren]) {
            return false
        }
    }
    return stack.length == 0
}

function encoder(number) {
    let map = { M: 1000, CM: 900, D: 500, CD: 400, C: 100, XC: 90, L: 50, XL: 40, X: 10, IX: 9, V: 5, IV: 4, I: 1 };
    let output = "";
    for (let i in map) {
        while (number >= map[i]) {
            output += i;
            number -= map[i]
        }
    }
    return output
}

function decoder(roman) {
    let map = { M: 1000, CM: 900, D: 500, CD: 400, C: 100, XC: 90, L: 50, XL: 40, X: 10, IX: 9, V: 5, IV: 4, I: 1 };
    let chars = roman.split("")
    let number = 0;
    let i = 0
    while (i < chars.length) {
        let char = chars[i]
        if (i < chars.length - 1) {
            let next = chars[i + 1]
            if (char + next in map) {
                i += 2
                number += map[char + next]
            } else {
                i += 1
                number += map[char]
            }
        } else {
            i += 1
            number += map[char]
        }
    }
    return number
}

function isPrim(number) {
    if (number <= 1) return false
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            return false
        }
    }
    return true
}

function twoSum(arr, target) {
    let idx = [];
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] === target) {
                idx.push(i); idx.push(j)
            }
        }
    }
    return idx
}

function sortWord(str) {
    return str.split("").sort().join("")
}
function isAnag(str1, str2) {
    return sortWord(str1) === sortWord(str2)
}
let words = ["tsar", "rat", "tar", "star", "tars", "cheese"]

function countAnag(words) {
    let count = 0;
    for (let i = 0; i < words.length - 1; i++) {
        for (let j = i + 1; j < words.length; j++) {
            if (isAnag(words[i], words[j])) {
                count++
            }
        }
    }
    return count
}

function getClosest(array, target) {
    return array.reduce((prev, curr) => (target - curr) < (target - prev) && curr <= target && curr !== target ? curr : prev, Number.MIN_VALUE)
}

function getCoins(cents) {
    let mapCoins = { 200: 0, 100: 0, 50: 0, 20: 0, 10: 0, 5: 0, 2: 0, 1: 0 };

    do {
        M = getClosest(Object.keys(mapCoins), cents)
        mapCoins[M]++
        cents -= M
    } while (cents != 0)
    return mapCoins
}
console.log(getCoins(567))