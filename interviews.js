/* function isValid(parens) {
    let n = 0;
    for (let i = 0; i < parens.length; i++) {
        if (parens[i] == "(") n++
        if (parens[i] == ")") n--
        if (n < 0) return false
    }
    return n == 0
}
console.log(isValid(parens)) */

let parens = "()"

function isValid(parens) {
    let stack = [];
    let characters = { ")": "(", "}": "{", "]": " [" }
    for (let char of parens) {
        if (!characters[char]) {
            stack.push(char)
        } else if (stack.pop() !== characters[char]) {
            return false
        }
    }
    return stack.length == 0
}
console.log(isValid(parens))

var isValid = function (s) {
    const stack = 0;
    for (const char of s) {
        if (char != ')') {
            stack++
        }
        else {
            stack--;
        }
        if (stack < 0) {
            return false
        }
    }
    return stack === 0;
};