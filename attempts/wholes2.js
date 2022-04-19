function validParens(parens) {
    let map = { ")": "(", "}": "{", "]": "[" }
    let stack = []
    for (let paren of parens) {
        if (!map[paren]) {
            stack.push(paren)
        } else if (stack.pop() !== map[paren]) {
            return false
        }
    }
    return stack.length == 0
}

console.log(validParens('({]})'))