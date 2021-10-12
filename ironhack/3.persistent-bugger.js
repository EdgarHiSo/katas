/* Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence,
 which is the number of times you must multiply the digits in num until you reach a single digit. */
let num = 888
function persistence(num) {
    return num.toString().length > 1
        ? 1 + persistence(num.toString().split("").reduce((a, b) => a * b, 1))
        : 0
}
console.log(persistence(num), "a")
function multiplyArray(arr) {
    let total = 1
    for (let element of arr) {
        total *= element
    }
    return total
}

function persistence(num) {
    const digits = num.toString()
    if (digits.length === 1) {
        return 0
    } else {
        return 1 + persistence(multiplyArray(digits))
    }
}
console.log(persistence(num), "b")

