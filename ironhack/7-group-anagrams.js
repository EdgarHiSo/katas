let words = ["tsar", "rat", "tar", "star", "tars", "cheese"]

function sortWords(str) {
    return str.split("").sort().join("")
}
function isAnagram(str1, str2) {
    return sortWords(str1) === sortWords(str2)
}
function groupAnagrams(words) {
   let result = {};
   for (let word of words) {
       let cleansed = word.split("").sort().join("")
       if (result[cleansed]) {
           result[cleansed].push(word)
       } else {
           result[cleansed] = [word]
       }
   }
   return Object.values(result)
}
console.log(groupAnagrams(words))