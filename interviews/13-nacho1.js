/* [12:17, 12/11/2021] Nacho Hispano: Yo te doy un string de letras repetidas, por ejemplo “aaabbc”,
 me tienes que devolver otro string que comprimido que cuenta cuantas veces estan las letras repetidas.
  En este caso devolveria “a3b2c”
[12:17, 12/11/2021] Nacho Hispano: Otro ejemplo: “aaaaffffddrrtt” 
Devuelveme: “a4f4d2r2t2” */
//Kata 2019: Combine Fruits

let str = "aaaaffffddrrtt"
let str1 = "aabbaa"
function getObject(str) {
    return str.split("")
        .reduce((total, letters) => {
            if (total[letters] == null) {
                total[letters] = 1
            } else {
                total[letters]++
            }
            return total
        }, {})
}

function getHow(str) {
    const keys = Object.keys(getObject(str))
    const values = Object.values(getObject(str))
    const longest = keys.length > values.length ? keys : values
    const result = [];

    for (let i = 0; i < longest.length; i++) {
        if (i < keys.length) {
            result.push(keys[i])
        }
        if (i < values.length) {
            result.push(values[i])
        }
    }
    return result.join("")
}


function compress(s) {
    let ans = ""
    let i = 0
    while (i < s.length) {
        let letter = s[i]
        let count = 1
        while (letter == s[i + 1]) {
            count++
            i++
        }
        ans += letter
        if (count > 1) {
            ans += count
        }
        i++
    }
    return ans
}

let ss = "aaaaffffddrrtta"
console.log(compress(ss))





