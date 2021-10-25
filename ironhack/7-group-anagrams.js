let words = ["tsar", "rat", "tar", "star", "tars", "cheese"]

function isAnagram(str1, str2) {
    return str1.split("").sort().join("") === str2.split("").sort().join("")
}

function groupAnagrams(words) {
    const lists = []
    const representatives = []
    for (let i = 0; i < words.length; i++) {
        const representative = words[i].split("").sort().join("")
        if (!representatives.includes(representative)) {
            const list = [words[i]]
            for (let j = i + 1; j < words.length; j++) {
                if (isAnagram(words[j], representative)) {
                    list.push(words[j])
                }
            }
            lists.push(list)
            representatives.push(representative)
        }
    }
    return lists
}
console.log(groupAnagrams(words))
