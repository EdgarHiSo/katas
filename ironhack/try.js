function validParens(parens) {
    let map = { ")": "(", "}": "{", " ]": "[" }
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

function encoderRomanNum(number) {
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

function romansNumbers(roman) {
    let map = { M: 1000, CM: 900, D: 500, CD: 400, C: 100, XC: 90, L: 50, XL: 40, X: 10, IX: 9, V: 5, IV: 4, I: 1 };
    let chars = roman.split("");
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
    for (let i = 2; i < Math.sqrt(number); i++) {
        if (number % i === 0) return false
    }
    return true
}
function twoSum(array, target) {
    let indexes = [];
    for (let i = 0; i < array.length; i++) {
        for (let j = i + 1; j < array.length; j++) {
            if (array[i] + array[j] === target) {
                indexes.push(i); indexes.push(j)
            }
        }
    }
    return indexes
}
let words = ["tsar", "rat", "tar", "star", "tars", "cheese"]
function sortWord(str) {
    return str.split("").sort().join("")
}
function isAnagram(str1, str2) {
    return sortWord(str1) === sortWord(str2)
}
function countAnagram(words) {
    const lists = [];
    const representatives = [];
    for (let i = 0; i < words.length; i++) {
        const representative = sortWord(words[i])
        if (!representatives.includes(representative)) {
            const list = [words[i]]
            for (let j = i + 1; j < words.length; j++) {
                if (isAnagram(words[i], words[j])) {
                    list.push(words[j])
                }
            }
            lists.push(list);
            representatives.push(representative)
        }
    }
    return lists
}
str1 = "wwwordlhdgfihg"
str2 = "wordl"
function scramblie(str1, str2) {
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


function scramble(str1, str2) {
    let occurences = str1.split("").reduce((arr, cur) => { arr[cur] ? arr[cur]++ : arr[cur] = 1; return arr; }, {});
    console.log(occurences)
     str2.split("").every((character) => --occurences[character] >= 0);
  }
console.log(scramble(str1, str2))