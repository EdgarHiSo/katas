// Crea un mapa M de letras de str2 a veces que aparece esa letra
// Iteras todas las letras de str1, y si esta en el mapa M, le restas uno (warning: fijate en 0)
// Al final, checkea que M es todos 0

function scramble(str2) {
    let mapM = {}
     str2.split("").forEach(elm => mapM.push(elm))
     return mapM
}
console.log(scramble("world"))