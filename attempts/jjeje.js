
function getClosest(array, target) {
    return array.reduce((prev, curr) => (target - prev) > (target - curr)
        && curr <= target && curr !== target ? curr : prev, Number.MIN_VALUE)
}

function getCoins(cents) {
    let mapCoin = { 200: 0, 100: 0, 50: 0, 20: 0, 10: 0, 5: 0, 2: 0, 1: 0 };
    do {
        M = getClosest(Object.keys(mapCoin), cents)
        mapCoin[M]++
        cents -= M
    } while (cents != 0)
    return mapCoin
}

function encoder(number) {
    let map = { M: 1000, CM: 900, D: 500, CD: 400, C: 100, XC: 90, L: 50, IL: 49, X: 10, IX: 9, V: 5, IV: 4, I: 1 };
    let output = ""
    for (let i in map) {
        while (number >= map[i]) {
            output += i;
            number -= map[i]
        }
    }
    return output
}

function decoder(roman) {
    let map = { M: 1000, CM: 900, D: 500, CD: 400, C: 100, XC: 90, L: 50, IL: 49, X: 10, IX: 9, V: 5, IV: 4, I: 1 };
    let count = 0;
    let chars = roman.split("")
    let i = 0
    while (i < chars.length) {
        let char = chars[i]
        if (i < chars.length - 1) {
            let next = chars[i + 1]
            if (char + next in map) {
                i += 2;
                count += map[char + next]
            } else {
                i++;
                count += map[char]
            }
        } else {
            i++;
            count += map[char]
        }
    }
    return count
}
console.log(decoder("MDCCLIX"))