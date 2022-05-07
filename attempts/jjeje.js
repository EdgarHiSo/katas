
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
    return stack.length === 0
}
function encoder(number) {
    let map = {
        M: 1000, CM: 900, D: 500, CD: 400, C: 100, XC: 90,
        L: 50, XL: 40, X: 10, IX: 9, V: 5, IV: 4, I: 1
    }
    let output = ""
    for (let i in map) {
        while (number >= map[i]) {
            output += i;
            number -= map[i]
        }
    }
    return output
}

function decoder(number) {
    let map = {
        M: 1000, CM: 900, D: 500, CD: 400, C: 100, XC: 90,
        L: 50, XL: 40, X: 10, IX: 9, V: 5, IV: 4, I: 1
    }
    chars = number.split("")
    let count = 0;
    let i = 0
    while (i < chars.length) {
        let char = chars[i]
        if (i < chars.length - 1) {
            let next = chars[i + 1]
            if (char + next in map) {
                i += 2
                count += map[char + next]
            } else {
                i++
                count += map[char]
            }
        } else {
            i++
            count += map[char]
        }
    }
    return count
}

function isPrim(number) {
    if (number <= 1) return false
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % 2 === 0) {
            return false
        }
    }
    return true
}
function sortStr(str) {
    return str.split("").sort().join("")
}
function isAnag(str1, str2) {
    return sortStr(str1) === sortStr(str2)
}
let words = ["tsar", "rat", "tar", "star", "tars", "cheese"]
function countAnag(words) {
    let count = 0
    for (let i = 0; i <= words.length - 1; i++) {
        for (let j = i + 1; j < words.length; j++) {
            if (isAnag(words[i], words[j])) {
                count++
            }
        }
    }

    return count
}

function groupAna(words) {
    const lists = []
    const representatives = []

    for (let i = 0; i < words.length; i++) {
        let representative = sortStr(words[i])
        if (!representatives.includes(representative)) {
            let list = [words[i]]
            for (let j = i + 1; j < words.length; j++) {
                if (isAnag(words[i], words[j])) {
                    list.push(words[j])
                }
            }
            lists.push(list);
            representatives.push(representative)
        }
    }
    return lists
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

function removeLastNumber(number) {
    return Math.floor(number / 10)
}

function isAgeDiverse(list1) {
    const ages = list1.map(elm => elm.age)
    let seen = [...Array(10)].map(elm => elm === false)
    for (let age of ages) {
        let decade = removeLastNumber(Math.min(100, age))
        seen[decade -1 ] = true
    }
    return seen.every(elm => elm === true)
}
console.log(isAgeDiverse(list1))