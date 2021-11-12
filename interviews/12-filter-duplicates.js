let things = [1, 4, 6, "arr", 56, 2, "arr", 4, 1]

/* function getDuplicates(things) {
    let uniqueChars = [];
    let duplicates = [];
    things.forEach(elm => {
        if (!uniqueChars.includes(elm)) {
            uniqueChars.push(elm)
        } else if (uniqueChars.includes(elm)) {
            duplicates.push(elm)
        }
    })
    return duplicates
}
 */
function getDuplicates(things) {
    let newThings = [... new Set(things)]
    return newThings
}
console.log(getDuplicates(things))