// Number of anagrams in an array of words
let str = "hloa"
function sortStr(str) {
    return str.split("").sort().join("")
}
let str1 = "hola"; let str2 = "olah"
function isAnag(str1, str2) {
    return sortStr(str1) === sortStr(str2)
}
let array = ["dell", "ledl", "abc", "cba"]
function countAnag(array) {
    let count = 0;
    for (let i = 0; i < array.length -1; i++) {
        for (let j = i + 1; j < array.length; j++) {
            if (isAnag(array[i], array[j])) {
                count++
            }
        }
    }
    return count
}
console.log(countAnag(array))