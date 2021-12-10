function validParens(parens) {
    let map = { "]": "[", ")": "(", "}": "{" };
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
    let map = { M: 1000, CM: 900, D: 500, CD: 400, X: 100, XC: 90, L: 50, XL: 40, X: 10, IX: 9, V: 5, IV: 4, I: 1 }
    let output = ""
    for (let i in map) {
        while (number >= map[i]) {
            output += i;
            number -= map[i]
        }
    }
    return output
}
function decoder(roman) {
    let map = { M: 1000, CM: 900, D: 500, CD: 400, X: 100, XC: 90, L: 50, XL: 40, X: 10, IX: 9, V: 5, IV: 4, I: 1 }
    let count = 0
    let chars = roman.split("")
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

function fibonacci(n) {
    let arr = [0, 1]
    for (let i = 0; i < n; i++) {
        arr = [arr[1], arr[0] + arr[1]]
    }
    return arr[0]
}
function getClosest(array, target) {
    return array.reduce((prev, curr) => (target - curr) < (target - prev) && curr <= target ? curr : prev, Number.MIN_VALUE)
}
function filter(obj) {
    let res = {}
    for (let coin in obj) {
        if (obj[coin] >= 1) {
            res[coin] = obj[coin]
        }
    }
    return res
}
function howCents(cents) {
    let mapCoins = { 200: 0, 100: 0, 50: 0, 20: 0, 10: 0, 5: 0, 2: 0, 1: 0 };
    do {
        M = getClosest(Object.keys(mapCoins), cents)
        mapCoins[M]++
        cents -= M
    } while (cents != 0)
    return filter(mapCoins)
}

function compress(str) {
    let output = "";
    let i = 0;
    while (i < str.length) {
        let letter = str[i]
        let count = 1
        while (letter == str[i + 1]) {
            count++
            i++
        }
        output += letter
        if (count > 1) {
            output += count + "|"
        }
        i++
    }
    return output
}

function scramblies(word1, word2) {
    let map = {};
    word1.split("").forEach(letter => {
        if (letter in map) {
            map[letter]++
        } else {
            map[letter] = 1
        }
    })
    word2.split("").forEach(letter => {
        if (letter in map) {
            map[letter]--
        }
    })
    return Object.values(map).every(letter => letter <= 0)
}

function removeLastNumber(number) {
    return Math.floor(number / 10)
}
let list1 = [
    { firstName: 'Harry', lastName: 'K.', country: 'Brazil', continent: 'Americas', age: 19, language: 'Python' },
    { firstName: 'Kseniya', lastName: 'T.', country: 'Belarus', continent: 'Europe', age: 29, language: 'JavaScript' },
    { firstName: 'Jing', lastName: 'X.', country: 'China', continent: 'Asia', age: 39, language: 'Ruby' },
    { firstName: 'Noa', lastName: 'A.', country: 'Israel', continent: 'Asia', age: 40, language: 'Ruby' },
    { firstName: 'Andrei', lastName: 'E.', country: 'Romania', continent: 'Europe', age: 59, language: 'C' },
    { firstName: 'Maria', lastName: 'S.', country: 'Peru', continent: 'Americas', age: 60, language: 'C' },
    { firstName: 'Lukas', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 75, language: 'Python' },
    { firstName: 'Chloe', lastName: 'K.', country: 'Guernsey', continent: 'Europe', age: 88, language: 'Ruby' },
    { firstName: 'Viktoria', lastName: 'W.', country: 'Bulgaria', continent: 'Europe', age: 98, language: 'PHP' },
    { firstName: 'Piotr', lastName: 'B.', country: 'Poland', continent: 'Europe', age: 128, language: 'JavaScript' }
  ];
function ageDiverse(list1) {
    let seen = [...Array(10)].map(x => false)
    const ages = list1.map(x => x.age)
    for (let age of ages) {
        const decade = removeLastNumber(Math.min(age, 100))
        seen[decade - 1]= true
    }
    return seen.every(x => x == true)
}

function fibonacci(n) {
    let arr = [0, 1]
    for (let i = 0; i < n; i++) {
        arr = [arr[1], arr[0] + arr[1]]
    }
    return arr[0]
}
console.log(fibonacci(6))