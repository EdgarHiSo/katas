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
console.log(validParens("("))
function encoder(number) {
    let map = { M: 1000, CM: 900, D: 500, CD: 400, C: 100, XC: 90, L: 50, XL: 40, X: 10, IX: 9, V: 5, IV: 4, I:1 }
    let output = "";
    for (let i in map) {
        while (number >= map[i]) {
            output += i;
            number -= map[i]
        }
    }
    return output
} 

function decoder(romanNum) {
    let map = { M: 1000, CM: 900, D: 500, CD: 400, C: 100, XC: 90, L: 50, XL: 40, X: 10, IX: 9, V: 5, IV: 4, I:1 }
    let count = 0;
    let chars = romanNum.split("")
    let i = 0;
    while(i < chars.length) {
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

function isPrim(num) {
    if (num <= 1) {
        return false
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false
        }
    }
    return true
}
let array = [1,3,5]
function twoSum(array, target) {
    for (let i = 0; i < array.length; i++) {
        for (let j = i +1; i < array.length; j++) {
            if (array[i] + array[j] === target) {
                return [i, j]
            }
        }
    }
}
let arrayNames = [["Pablo", "Enrique", "Josh", "Juan", "Gonzalo"], ["Michael", "Alexander", "Mikel", "Ariel"], ["John", "Julia", "Brad", "George"]]

function flatten(arrayNames) {
    let newArr = []
    for (let subarray of arrayNames) {
        for (let name of subarray) {
            newArr.push(name)
        }
    }
    return newArr
}

function sortArray(arrayNames) {
    let arrNames = flatten(arrayNames)
    return arrNames.sort((name1, name2) => {
        if (name1.length > name2.length) {
            return 1
        } else if (name2.length > name1.length) {
            return -1
        } 
        return name1.localeCompare(name2)
    })
}
console.log(sortArray(arrayNames))