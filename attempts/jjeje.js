/* 
te doy una lista de numeros de tamaño N. Dime que numeros del 1 al N no aparecen en esa lista
Por ejemplo, si te doy [1,2,3,3], esto es una lista de 4 numeros. Dime que numeros del 1 al 4 faltan. En este caso falta 4 
*/

function missings(array) {
    let newArr = [];
    for (let i = 1; i <= array.length; i++) {
        if (!array.includes(i)) {
            newArr.push(i)
        }
    }
    return newArr
}
function compress(str) {
    let output = ""
    let i = 0
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
/*  Lo que haremos es procesar cada carácter de la cadena y cuando encontremos un paréntesis abierto comprobamos que no es una clave de nuestro hashmap,
 y sino lo es, lo empujaremos a la pila. Luego, cuando veamos un paréntesis cerrado, comprobaremos si es del mismo tipo que el paréntesis de nuestra pila,
 y si lo es, lo sacaremos de la pila.Entonces comprobaremos si el carácter es un paréntesis abierto asegurándonos de que no es una clave en nuestro hashmap.
 Después de eso sabemos que es un paréntesis abierto, así que ahora podemos empujarlo a nuestra pila. Si es un paréntesis cerrado podemos sacar el abierto 
 de nuestra pila y ver si es del mismo tipo. Si no lo es devolvemos false, de lo contrario pasamos al resto de la cadena. */

function validParens(parens) {
    let map = { "]": "[", ")": "(", "}": "{" }
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
    let map = { M: 1000, CM: 900, D: 500, CD: 400, C: 100, XC: 90, L: 50, XL: 40, X: 10, IX: 9, V: 5, IV: 4, I: 1 }
    let output = ""
    for (let i in map) {
        while(number >= map[i]) {
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

function sortStr(str) {
    return str.split("").sort().join("")
}
function isAnagram(str1, str2) {
    return sortStr(str1) === sortStr(str2)
}
function countAnagr(array) {
    const lists = [];
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
            lists.push(list);
            representatives.push(representative)
        }
    }
    return lists
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
function isAgeDiverse(list1) {
    const ages = list1.map(x => x.age)
    const seen = [...Array(10)].map(x => false)
    for (let age of ages) {
        const decade = removeLastNumber(Math.min(age, 100))
        seen[decade - 1] = true
    }
    return seen.every(x => x === true)
}

function fibo(n) {
    let arr = [0, 1]
    for (let i = 0; i < n; i++) {
        arr = [arr[1], arr[0] + arr[1]]
    }
    return arr[0]
}