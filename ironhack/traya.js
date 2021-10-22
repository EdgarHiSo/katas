function decoderNumber(roman) {
    let map = { M: 1000, CM: 900, D: 500, CD: 400, C: 100, XC: 90, L: 50, XL: 40, X: 10, IX: 9, V: 5, IV: 4, I: 1 }
    let chars = roman.split("")
    let number = 0;
    let i = 0;
    while (i < chars.length) {
        let char = chars[i]
        if (i < chars.length - 1) {
            let next = chars[i + 1]
            if (char + next in map) {
                number += map[char + next]
                i += 2
            } else {
                number += map[char]
                i++
            }
        } else {
            number += map[char]
            i++
        }
    }
    return number
}
console.log(decoderNumber("LXXX"))