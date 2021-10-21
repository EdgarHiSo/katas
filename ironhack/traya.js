function sortWord(str) {
    return str.split("").sort().join("")
}
function isAnagram(str1, str2) {
    return sortWord(str1) === sortWord(str2)
}
let array = ["dell", "ledl", "abc", "cba", "abc", "cba"]

function countAnagrams(array) {
    let count = 0;
    for (let i = 0; i < array.length - 1; i++) {
        for (let j = i + 1; j < array.length; j++) {
            if (isAnagram(array[i], array[j])) {
                count++
            }
        }
    }
    return count
}
console.log(countAnagrams(array))