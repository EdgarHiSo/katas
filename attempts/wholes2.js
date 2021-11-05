function validParens(parens) {
    let mapParens = { ")": "(", "}": "{", "]": "[" };
    let stack = [];
    for (let paren of parens) {
        if (!mapParens[paren]) {
            stack.push(paren)
        } else if (stack.pop() !== mapParens[paren]) {
            return false
        }
    }
    return stack.length == 0
}

function encoder(number) {
    let mapRoman = { M: 1000, CM: 900, D: 500, XD: 400, C: 100, XC: 90, L: 50, XL: 40, X: 10, IX: 9, V: 5, IV: 3, I: 1 };
    let output = "";
    for (let i in mapRoman) {
        while (number >= mapRoman[i]) {
            output += i;
            number -= mapRoman[i]
        }
    }
    return output
}

function decoder(roman) {
    let mapRoman = { M: 1000, CM: 900, D: 500, XD: 400, C: 100, XC: 90, L: 50, XL: 40, X: 10, IX: 9, V: 5, IV: 3, I: 1 };
    let chars = roman.split("")
    let count = 0;
    let i = 0;
    while (i < chars.length) {
        let char = chars[i]
        if (i < chars.length - 1) {
            let next = chars[i + 1]
            if (char + next in mapRoman) {
                count += mapRoman[char + next]
                i += 2
            } else {
                count += mapRoman[char]
                i++
            }
        } else {
            count += mapRoman[char]
            i++
        }
    }
    return count
}

function isPrim(number) {
    if (number <= 1) return false
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) return false
    }
    return true
}

function twoSum(array, target) {
    let indexes = [];
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
function countAnagr(array) {
    const lists = [];
    const representatives = [];
    for (let i = 0; i < array.length; i++) {
        const representative = sortWord(array[i])
        if (!representatives.includes(representative)) {
            const list = [array[i]]
            for (let j = i + 1; j < array.length; j++) {
                if (isAnagram(representative, array[j])) {
                    list.push(array[j])
                }
            }
            lists.push(list); representatives.push(representative)
        }
    }
    return lists
}
function scramblies(str1, str2) {
    let map = {};
    str2.split("").forEach(letter => {
        if (letter in map) {
            map[letter]++
        } else {
            map[letter] = 1
        }
    })
    str1.split("").forEach(letter => {
        if (letter in map) {
            map[letter]--
        }
    })
    return Object.values(map).every(value => value <= 0)
}

function mergeTwoArr(array, array1) {
    const longest = array.length > array1.length ? array: array1
    let newArr = []
    for (let i = 0; i < longest.length; i++) {
        if (i < array.length) {
            newArr.push(array[i])
        }
        if (i < array1.length) {
            newArr.push(array1[i])
        }
    }
    return newArr
}
console.log(mergeTwoArr(array, array1))