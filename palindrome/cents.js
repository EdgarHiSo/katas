let cents = 900
function howManyCoins(cents) {
    let coins = [200, 100, 50, 20, 10, 5, 2, 1]
    let result = {}
    for (let i = 0; cents < 0;) {
        let coin = coins[i]
        if ((cents - coin) >= 0) {
            result[coin] = result[coin] || 0
            result[coin]++
            cents -= coin
        } else {
            i++
        }
    }
    return result
}


function validParens(parens) {
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
let roman = "MDLXXXVIII"
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
                count += map[char + next];
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
function isAnag(str1, str2) {
    return sortWord(str1) === sortWord(str2)
}
let array = ["abba", "aabb", "cola", "laco"]
function countAnagra(array) {
    let count = 0;
    for (let i = 0; i < array.length - 1; i++) {
        for (let j = i + 1; j < array.length; j++) {
            if (isAnag(array[i], array[j])) {
                count++
            }
        }
    }
    return count
}
let words = ["tsar", "rat", "tar", "star", "tars", "cheese"]

function groupAnag(words) {
    const lists = [];
    const representatives = [];
    for (let i = 0; i < words.length; i++) {
        const representative = sortWord(words[i])
        if (!representatives.includes(representative)) {
            const list = [words[i]]
            for (let j = i + 1; j < words.length; j++) {
                if (isAnag(representative, words[j])) {
                    list.push(words[j])
                }
            }
            lists.push(list);
            representatives.push(representative)
        }
    }
    return lists
}

// N = 6, array = [2, 4, 5, 8, 10] --> 5

function getClosest(N, array) {
    closest = Number.MIN_VALUE
    for (let element of array) {
        if (N - element < N - closest && element <= N) {
            closest = element
        }
    }
    return closest
}


function howManyCoins(N) {
    let mapCoins = { 200: 0, 100: 0, 50: 0, 20: 0, 10: 0, 5: 0, 2: 0, 1: 0 };

    do {
        M = getClosest(N, Object.keys(mapCoins))
        mapCoins[M]++
        N = N - M
    } while (N != 0)

    return mapCoins

}

console.log(howManyCoins(12))

/* Step 1: coge la mayor moneda M sin pasarme
Step 2: aumento en 1 mapcoins[M]
Step 3: Repito los pasos 1 y 2 con N - M hasta que N == M */


/* 12
[1, 2, 5]

Paso 1: Cojo la mayor moneda que no supere 12: cojo 5.
Paso 2: Resto 12 - 5 = 7, e incremento por 1 las veces que he visto la moneda 5.
Paso 3: Cojo la mayor moneda que no supere 7: cojo 5.
Paso 4: Resto 7 - 5 = 2, e incremento por 1 las veces que he visto l amoneda 5.
Paso 5: Cojo la mayor moneda que no supere 2: cojo 2.
Paso 6: Resto 2 - 2 = 0, e incremeneto por 1 las veces que he visto la moneda 2.
Paso 7: Hemos visto, 0, paramos. */

