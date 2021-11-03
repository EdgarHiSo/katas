// N = 6, array = [2, 4, 5, 8, 10] --> 5

function getClosest(N, array) {
    closest = Number.MIN_VALUE
    for (let element of array) {
        if (N - element < N - closest && element <= N) {
            closest = element
        }
    }
    return closest
}


function howManyCoins(N) {
    let mapCoins = { 200: 0, 100: 0, 50: 0, 20: 0, 10: 0, 5: 0, 2: 0, 1: 0 };

    do {
        M = getClosest(N, Object.keys(mapCoins))
        mapCoins[M]++
        N = N - M
    } while (N != 0)

    return mapCoins

}

console.log(howManyCoins(12))

/* Step 1: coge la mayor moneda M sin pasarme
Step 2: aumento en 1 mapcoins[M]
Step 3: Repito los pasos 1 y 2 con N - M hasta que N == M */


/* 12
[1, 2, 5]

Paso 1: Cojo la mayor moneda que no supere 12: cojo 5.
Paso 2: Resto 12 - 5 = 7, e incremento por 1 las veces que he visto la moneda 5.
Paso 3: Cojo la mayor moneda que no supere 7: cojo 5.
Paso 4: Resto 7 - 5 = 2, e incremento por 1 las veces que he visto l amoneda 5.
Paso 5: Cojo la mayor moneda que no supere 2: cojo 2.
Paso 6: Resto 2 - 2 = 0, e incremeneto por 1 las veces que he visto la moneda 2.
Paso 7: Hemos visto, 0, paramos. */

