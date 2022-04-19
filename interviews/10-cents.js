let array = [65,78,96,32,22]
function getClosest(array, target) {
    return array.reduce((prev, curr) => (target - curr) < (target - prev)
     && curr <= target && target !== curr ? curr : prev, Number.MIN_VALUE)
}
console.log(getClosest(array, 90))
function getCoins(cents) {
    let mapCoin = { 200: 0, 100: 0, 50: 0, 20: 0, 10: 0, 5: 0, 2: 0, 1: 0 };
    do {
        M = getClosest(Object.keys(mapCoin), cents)
        mapCoin[M]++
        cents -= M
    } while (cents != 0)
    return mapCoin
}

function jeje(cents) {
    let arrCoins = [200, 100, 50, 20, 10, 5, 2, 1]
    return arrCoins.reduce((total, coin) => {
        let qty = Math.floor(cents / coin)
        total[coin] = qty
        cents -= qty * coin
        return total
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

