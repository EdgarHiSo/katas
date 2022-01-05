let number = 345
function getRomansNumbers(number) {
    const map = {M: 1000, CM: 900, D: 500, CD: 400, C: 100, XC: 90,L: 50, XL: 40, X: 10, IX: 9, V: 5, IV: 4, I: 1};
    let output = ""
    for (let i in map) {
        while (number >= map[i]) {
            output += i;
            number -= map[i]
        }
    }
    return output
}
console.log(getRomansNumbers(number))

