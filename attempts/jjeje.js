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
    const lists = []
    const representatives = []
    for (let i = 0; i < array.length; i++) {
        let representative = sortWord(array[i])
        if (!representatives.includes(representative)) {
            let list = [array[i]]
            for (let j = i + 1; j < array.length; j++) {
                if (isAnagram(array[i], array[j])) {
                    list.push(array[j])
                }
            }
            lists.push(list);
            representatives.push(representative)
        }
    }
    return lists
}

function scramblies(word1, word2) {
    let mapLetters = {};
    word2.split("").forEach(letter => {
        if (letter in mapLetters) {
            mapLetters[letter]++
        } else {
            mapLetters[letter] = 1
        }
    })
    word1.split("").forEach(letter => {
        if (letter in mapLetters) {
            mapLetters[letter]--
        }
    })
    return Object.values(mapLetters).every(letter => letter <= 0)
}

function mergeTwoArr(arr1, arr2) {
    const longest = arr1.length > arr2.length ? arr1: arr2
    let newArr = []
    for (let i = 0; i < longest.length; i++) {
        if (i < arr1.length) {
            newArr.push(arr1[i])
        }
        if (i < arr2.length) {
            newArr.push(arr2[i])
        }
    }
    return newArr
}

function getClosest(array, target) {
    return array.reduce((prev, curr) => (target - curr) < (target - prev)
     && curr <= target ? curr: prev , Number.MIN_SAFE_INTEGER)
}
function getCoins(cents) {
    let mapCoin = { 200: 0, 100: 0, 50: 0, 20: 0, 10: 0, 5: 0, 2: 0, 1: 0 };
    do {
        M = getClosest(Object.keys(mapCoin), cents)
        mapCoin[M]++
        cents -= M 
    } while (cents != 0)
    return mapCoin
}

let list1 = [
    { firstName: 'Harry', lastName: 'K.', country: 'Brazil', continent: 'Americas', age: 19, language: 'Python' },
    { firstName: 'Kseniya', lastName: 'T.', country: 'Belarus', continent: 'Europe', age: 29, language: 'JavaScript' },
    { firstName: 'Jing', lastName: 'X.', country: 'China', continent: 'Asia', age: 39, language: 'Ruby' },
    { firstName: 'Noa', lastName: 'A.', country: 'Israel', continent: 'Asia', age: 40, language: 'Ruby' },
    { firstName: 'Andrei', lastName: 'E.', country: 'Romania', continent: 'Europe', age: 59, language: 'C' },
    { firstName: 'Maria', lastName: 'S.', country: 'Peru', continent: 'Americas', age: 60, language: 'C' },
    { firstName: 'Lukas', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 75, language: 'Python' },
    { firstName: 'Chloe', lastName: 'K.', country: 'Guernsey', continent: 'Europe', age: 98, language: 'Ruby' },
    { firstName: 'Viktoria', lastName: 'W.', country: 'Bulgaria', continent: 'Europe', age: 88, language: 'PHP' },
    { firstName: 'Piotr', lastName: 'B.', country: 'Poland', continent: 'Europe', age: 128, language: 'JavaScript' }
  ];

function removeLastNumber(number) {
    return Math.floor(number / 10)
}
function isAgeDiverse(list1) {
    let ages = list1.map(elm => elm.age)
    let seen = [...Array(10)].map(x => false)
    for (let age of ages) {
        let decade = removeLastNumber(Math.min(age, 100))
        seen[decade - 1] = true
    }
    return seen.every(elm => elm === true)
}

function filterDuplicates(array) {
    
}