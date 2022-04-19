function validParens(parens) {
    let map = { ")": "(", "]": "[", "}": "{" }
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
    const map = { M: 1000, CM: 900, D: 500, CD: 400, C: 100, XC: 90, L: 50, XL: 40, X: 10, IX: 9, V: 5, IV: 4, I: 1 };

    let output = ""
    for (let i in map) {
        while (number >= map[i]) {
            output += i
            number -= map[i]
        }
    }
    return output
}

function decoder(roman) {
    const map = { M: 1000, CM: 900, D: 500, CD: 400, C: 100, XC: 90, L: 50, XL: 40, X: 10, IX: 9, V: 5, IV: 4, I: 1 };
    let chars = roman.split("")
    let count = 0
    let i = 0
    while (i < chars.length) {
        let char = chars[i]
        if (i < chars.length - 1) {
            let next = chars[i + 1]
            if (char + next in map) {
                i += 2;
                count += map[char + next]
            } else {
                i += 1;
                count += map[char]
            }
        } else {
            i += 1;
            count += map[char]
        }
    }
    return count
}
function isPrim(number) {
    if (number <= 1) return false
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % 1 === 0) {
            return false
        }
    }
    return true
}
function twoSum(array, target) {
    let idxs = []
    for (let i = 0; i < array.length; i++) {
        for (let j = i + 1; j < array.length; j++) {
            if (array[i] + array[j] === target) {
                idxs.push(i, j)
            }
        }
    }
    return idxs
}

function sortStr(str) {
    return str.split("").sort().join("")
}
function isAnagr(str1, str2) {
    return sortStr(str1) === sortStr(str2)
}
function countAnag(array) {
    let count = 0;
    for (let i = 0; i < array.length - 1; i++) {
        for (let j = i + 1; j < array.length; j++) {
            if (isAnagr(array[i], array[j])) {
                count++
            }
        }
    }
    return count
}
function groupAnag(array) {
    const lists = [];
    const representatives = [];
    for (let i = 0; i < array.length; i++) {
        const representative = sortStr(array[i])
        if (!representatives.includes(representative)) {
            const list = [array[i]]
            for (let j = i + 1; j < array.length; j++) {
                if (isAnagr(representative, array[j])) {
                    list.push(array[j])
                }
            }
            lists.push(list); representatives.push(representative)
        }
    }
    return lists
}

function cramblies(str1, str2) {
    let map = {};
    str1.forEach(letter => {
        if (letter in map) {
            map[letter]++
        } else {
            map[letter] = 1
        }
    })

    str2.forEach(letter => {
        if (letter in map) {
            map[letter]--
        }
    })
    return Object.values(map).every(letter => letter <= 0)
}