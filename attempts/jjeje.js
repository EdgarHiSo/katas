function validParens(parens) {
    let map = { ")": "(", "}": "{", "]": "[" }
    let stack = []
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
            output += i
            number -= map[i]
        }
    }
    return output
}

function decoder(roman) {
    let map = { M: 1000, CM: 900, D: 500, CD: 400, C: 100, XC: 90, L: 50, XL: 40, X: 10, IX: 9, V: 5, IV: 4, I: 1 };
    let chars = roman.split("")
    let count = 0
    let i = 0
    while (i < chars.length) {
        let char = chars[i]
        if (i < chars.length - 1) {
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

function isPrim(number) {
    if (number <= 1) return false
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            return false
        }
    }    
    return true
}

function twoSum(array, target) {
    let indexes = []
    for (let i = 0; i < array.length; i++) {
        for (let j = i + 1; j < array.length; j++) {
            if (array[i] + array[j] === target) {
                indexes.push(i, j)
            }
        }
    }
    return indexes
}
 
function sortWord(str) {
    return str.split("").sort().join("")
}
function isAnagram(str1, str2) {
    return sortWord(str1) === sortWord(str2)
}

function countAnagram(array) {
    let count = 0;
    for (let i = 0; i < array.length - 1; i++) {
        for (let j = i + 1; j < array.length; j++) {
            if (isAnagram(array[i], array[j])) {
                count++
            }
        }
    }
    return count
}
function groupAnagram(array) {
    
}