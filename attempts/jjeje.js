function validParens(parens) {
    let map = { ")": "(", "}": "{", "]": "[" }
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
    let map = { M: 1000, CM: 900, D: 500, CD: 400, C: 100, XC: 90, L: 50, XL: 40, X: 10, IX: 9, V: 5, IV: 4, I: 1 }
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
    let map = { M: 1000, CM: 900, D: 500, CD: 400, C: 100, XC: 90, L: 50, XL: 40, X: 10, IX: 9, V: 5, IV: 4, I: 1 }
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
    for (let i = 0; i < array.length; i++) {
        for (let j = i + 1; j < array.length; j++) {
            if (array[i] + array[j] === target) {
                return [i, j]
            }
        }
    }
}

function sortStr(str) {
    return str.split("").sort().join("")
}
function isAnagram(str1, str2) {
    return sortStr(str1) === sortStr(str2)
}
function groupAnagrams(array) {
    const lists = []
    const representatives = []
    for (let i = 0; i < array.length; i++) {
        const representative = sortStr(array[i])
        if (!representatives.includes(representative)) {
            const list = [array[i]]
            for (let j = i + 1; j < array.length; j++) {
                if (isAnagram(array[i], array[j])) {
                    list.push(array[j])
                }
            }
            lists.push(list)
            representatives.push(representative)
        }
    }
    return lists
}

function countAnagrams(array) {
     let count = 0
    for (let i = 0; i < array.length; i++) {
        for (let j = i + 1; j < array.length; j++) {
            if (isAnagram(array[i], array[j])) {
                count++
            }
        }
    }
    return count
}

function scramblies(str1, str2) {
    let mapLetters = {};

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
    return Object.values(mapLetters).every(letter => letter <= 0)
}

function getClosest(array, target) {
    return array.reduce((prev, curr) => (target - curr) < (target - prev) && curr < target ? curr: prev, Number.MIN_VALUE)
}

function getCoins(cents) {
    let mapCoin = { 200: 0, 100: 0, 50: 0, 20: 0, 10: 0, 5: 0, 2: 0, 1: 0 };
    do {
        M = getClosest(Object.keys(mapCoin), cents)
        mapCoin[M]++
        cents -= M
    } while( cents != 0)
    return mapCoin
}

function flattenArray(array) {
    let newArr = []
    for (let subarray of array) {
        for (let elm of subarray) {
            newArr.push(elm)
        }
    }
    return newArr
}
function sortNames(array) {
    let newArr = flattenArray(array)

   
}