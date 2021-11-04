function validParens(parens) {
    let map = { ")": "(", "]": "[", "}": "{" };
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
    const map = { M: 1000, CM: 900, D: 500, CD: 400, C: 100, XC: 90, L: 50, XL: 40, X: 10, IX: 9, V: 5, IV: 4, I: 1 };
    let chars = roman.split("")
    let count = 0;
    let i = 0;
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
let words = ["tsar", "rat", "tar", "star", "tars", "cheese"]
function countAnagr(words) {
    let count = 0;
    for (let i = 0; i < words.length - 1; i++) {
        for (let j = i + 1; j < words.length; j++) {
            if (isAnagram(words[i], words[j])) {
                count++
            }
        }
    }
    return count
}
function groupAnagrams(words) {
    const representatives = [];
    const lists = []
    for (let i = 0; i < words.length; i++) {
        const representative = sortWord(words[i])
        if (!representatives.includes(representative)) {
            const list = [words[i]]
            for (let j = i + 1; j < words.length; j++) {
                if (isAnagram(representative, words[j])) {
                    list.push(words[j])
                }
            }
            lists.push(list);
            representatives.push(representative)
        }
    }
    return lists
}
let str1 = "words"; let str2 = "wordsoiuyfyfrds"

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
    return Object.values(map).every(elm => elm <= 0)
}

function getCoins(cents) {
    let arrCoins = [200, 100, 50, 20, 10, 5, 2, 1];
    return arrCoins.reduce((total, coin) => {
        let qty = Math.floor(cents / coin)
        total[coin] = qty
        cents -= qty * coin
        return filterObj(total)
    }, {})
}
function filterObj(obj) {
    let result = {}
    for (let coin in obj) {
        if (obj[coin] > 0) {
            result[coin] = obj[coin]
        }
    }
    return result
}
function getClosest(array, target) {
    return array.reduce((prev, curr) => (target - curr) < (target - prev) && curr <= target && curr !== target ? curr : prev, Number.MIN_VALUE)
}
function getCoins(cents) {
    let mapCoin = { 200: 0, 100: 0, 50: 0, 20: 0, 10: 0, 5: 0, 2: 0, 1: 0 }
    do {
        M = getClosest(Object.keys(mapCoin), cents)
        mapCoin[M]++
        cents -= M
    } while (cents != 0)
    return filterObj(mapCoin)
}
console.log(getCoins(4))

function getCoins(cents) {
    let arrCoins = [200, 100, 50, 20, 10, 5, 2, 1];
    return arrCoins.reduce((total, coin) => {
        let qty = Math.floor(cents / coin)
        total[coin] = qty
        cents -= qty * coin
        return total
    }, {})
}
function filterObj(obj) {
    let result = {};
    for (let key in obj) {
        if (obj[key] > 0) {
            result[key] = obj[key]
        }
    }
    return result
}
console.log(filterObj(getCoins(12567)), "ey")