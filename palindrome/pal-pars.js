function makePalindrome(str) {
    return str.toString().split("").reverse().join("")
}
function isPalindrome(str) {
    return makePalindrome(str) === str
}
function palindromePars(arr) {
    let result = []
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (i != j) {
                if (isPalindrome(arr[i] + arr[j])) {
                    result.push([i, j])
                }
            }
        }
    }
    return result
}
console.log(palindromePars(["abcd", "dcba", "lls", "s", "sssll"])) //no debería contar la puta "s"

