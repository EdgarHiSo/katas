const arrayNumbers = [1, 2, 3, 4, 5, 6, 9]
function getClosest(arrayNumbers, target) {
    return arrayNumbers.reduce((prev, curr) => (target - curr) < (target - prev) && curr <= target && curr !== target ? curr : prev, Number.MIN_VALUE)
}
let numberCents = 1569
function howManyCoins(numberCents) {
    let mapCoins = { 200: 0, 100: 0, 50: 0, 20: 0, 10: 0, 5: 0, 2: 0, 1: 0 };
    do {
        M = getClosest(Object.keys(mapCoins), numberCents)
        mapCoins[M]++
        numberCents -= M
    } while (numberCents != 0)
    return filterMap(mapCoins)
}

function filterMap(obj) {
    let res = {};
    for (let coin in obj) {
        if (obj[coin] > 0) {
            res[coin] = obj[coin]
        }
    }
    return res
}
let cents = 1500
function counterCoins(cents) {
    let coinsArr = [200, 100, 50, 20, 10, 5, 2, 1]
    return coinsArr.reduce((acc, coin) => {
        let qty = Math.floor(cents / coin)
        acc[coin] = qty
        cents -= qty * coin
        return acc
    }, {})
}

function filter(obj) {
    let res = {};
    for (let coin in obj) {
        if (obj[coin] > 0) {
            res[coin] = obj[coin]
        }
    }
    return res
}
console.log(filter(counterCoins(cents)))