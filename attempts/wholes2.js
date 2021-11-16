function validParens(parens) {
    const mapParens = { ")": "(", "}": "{", "]": "[" };
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
    let count = 0;
    let i = 0;
    while (i < chars.length) {
        let char = chars[i]
        if (i < chars.length - 1) {
            let next = chars[i + 1]
            if (char + next in map) {
                count += map[char + next];
                i += 2
            } else {
                count += map[char];
                i++
            }
        } else {
            count += map[char];
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
function isAnagra(str1, str2) {
    return sortWord(str1) === sortWord(str2)
}
function countAnagram(array) {
    let count = 0;
    for (let i = 0; i < array.length - 1; i++) {
        for (let j = i + 1; j < array.length; j++) {
            if (isAnagra(array[i], array[j])) {
                count++
            }
        }
    }
    return count
}

function groupAnagrams(array) {
    const lists = [];
    const representatives = [];
    for (let i = 0; i < array.length; i++) {
        const representative = sortWord(array[i])
        if (!representatives.includes(representative)) {
            const list = [array[i]]
            for (let j = i + 1; j < array.length; j++) {
                if (isAnagra(representative), array[j]) {
                    list.push(array[j])
                }
            }
            lists.push(list);
            representatives.push(representative)
        }
    }
    return lists
}

function scramblies(str1, str2) {
    let mapLetters = {}
    str2.split("").forEach(letter => {
        if (letter in mapLetters) {
            mapLetters[letter]++
        } else {
            mapLetters[letter] = 1
        }
    })
    str1.split("").forEach(letter => {
        if (letter in mapLetters) {
            mapLetters[letter]--
        }
    })
    return Object.values(mapLetters).every(elm => elm <= 0)
}

function mergeTwoArray(array1, array2) {
    let longest = array1.length > array2.length ? array1: array2
    let newArr = [];
    for (let i = 0; i < longest.length; i++) {
        if (i < array1.length) {
            newArr.push(array1[i])
        }
        if (i < array2.length) {
            newArr.push(array2[i])
        }
    }
    return newArr
}
