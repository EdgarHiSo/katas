let words = ["tsar", "rat", "tar", "star", "tars", "cheese"]

function sortWord(str) {
    return str.split("").sort().join("")
}
function isAnagram(str1, str2) {
    return sortWord(str1) === sortWord(str2)
}
function groupAnagrams(words) {
   const lists = []
   const representatives = []
   for (let i = 0; i < words.length; i++) {
       const representative = sortWord(words[i])
       if (!representatives.includes(representative)) {
           const list = [words[i]]
           for (let j = i + 1; j < words.length; j++) {
               if (isAnagram(representative, words[j])) {
                   list.push(words[j])
               }
           }
           lists.push(list);
           representatives.push(representative)
       }
   }
   return lists
}







function countAnagrams(words) {
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

