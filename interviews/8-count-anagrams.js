function sortWord(str) {
    return str.split("").sort().join("")
}
function isAnagram(str1, str2) {
    return sortWord(str1) === sortWord(str2)
}
let words = ["tsar", "rat", "tar", "star", "tars", "cheese"]
function countAnagr(words) {
    let count = 0;
    for (let i = 0; i < words.length - 1; i++) {
        for (let j = i + 1; j < words.length; j++) {
            if (isAnagram(words[i], words[j])) {
                count++
            }
        }
    }
    return count
}
console.log(countAnagr(words))