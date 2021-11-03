let array = [ 3,4,6,7]
function getClosest(array, target){
    return array.reduce((prev, curr) => (target - curr) < (target - prev) && curr <= target && curr !== target ? curr : prev, Number.MIN_VALUE)
} 
let numberCents = 1560
function howManyCoins(numberCents){
    let mapCoins = { 200: 0, 100: 0, 50: 0, 20: 0, 10: 0, 5: 0, 2: 0, 1: 0 };
    do {
        M = getClosest(Object.keys(mapCoins), numberCents)
        mapCoins[M]++
        numberCents -= M
    } while (numberCents != 0)
    return mapCoins
}

function filtered(obj) {
    let res = {};
    for (let key in obj) {
        if (obj[key] > 0) {
            res[key] = obj[key]
        }
    }
    return res
}
console.log(filtered(howManyCoins(numberCents)), "yeeey")
















function filter(array, predicate) {
    let res = []
    for (let element of array) {
        if (predicate(element)) {
            res.push(element)
        }
    }
    return res
}

function filter(obj, predicate) {
    let res = {}
    for (let key in obj) {
        if (predicate(obj[key])) {
            res[key] = obj[key]
        }
    }
    return res
}

console.log(filter({5: 2, 10: 0}, element => element > 0))

console.log(howManyCoins(numberCents))