/* 
te doy una lista de numeros de tamaño N. Dime que numeros del 1 al N no aparecen en esa lista
Por ejemplo, si te doy [1,2,3,3], esto es una lista de 4 numeros. Dime que numeros del 1 al 4 faltan. En este caso falta 4 
*/

/* function getMissingNum(array) {
    let missings = [];
    for (let elm of array) {

    }
}
console.log(getMissingNum([5, 4, 3, 3, 1]))

[2, 2, 2, 2, 2, 7, 7, 7]

function isElementInList(lst, element) {
    return lst.includes(element)
}

function getMissing(lst) {
    let missing = []
    for (let i = 1; i <= lst.length; i++) {
        if (!lst.includes(i)) {
            missing.push(i)
        }
    }
    return missing
}
 */

function validParens(parens) {
    let map = { ")": "(", "]": "[", "}": "{" }
    let stack = []
    for (let elm of parens) {
        if (!map[elm]) {
            stack.push(elm)
        } else if (stack.pop() !== map[elm]) {
            return false
        }
    }
    return stack.length == 0
}
function encoder(number) {
    let map = { M: 1000, CM: 900, D: 500, CD: 400, C: 100, XC: 90, L: 50, IL: 49, X: 10, IX: 9, V: 5, IV: 4, I: 1 }
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
    let map = { M: 1000, CM: 900, D: 500, CD: 400, C: 100, XC: 90, L: 50, IL: 49, X: 10, IX: 9, V: 5, IV: 4, I: 1 }
    let chars = roman.split("")
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


function getClosest(array, target) {
    return array.reduce((prev, curr) =>  (target - curr) < (target - prev)
     && curr < target ? curr : prev, Number.MIN_VALUE)
}
function howCents(cents) {
    let map = { 200: 0, 100: 0, 50: 0, 20: 0, 10: 0, 5: 0, 2: 0, 1: 0}
    do{
         M  = getClosest(Object.keys(map), cents)
        map[M]++
        cents -= M
    } while (cents != 0)
    return map
}
console.log(howCents(1500))