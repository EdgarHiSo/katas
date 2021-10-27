// Crea un mapa M de letras de str2 a veces que aparece esa letra
// Iteras todas las letras de str1, y si esta en el mapa M, le restas uno (warning: fijate en 0)
// Al final, checkea que M es todos 0
str1 = "wwldokkktrddowwwwwwwwww"
str2 = "woorldd"

function scramble(str1, str2) {
    let map = {}
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

console.log(scramble(str1, str2))


