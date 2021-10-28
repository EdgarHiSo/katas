function mergeArrays(a, b) {
    let longest = a.length > b.length ? a : b
    let arr = [];
    for (let i = 0; i < longest.length; i++) {
        if (i < a.length) {
            arr.push(a[i])
        }
        if (i < b.length) {
            arr.push(b[i])
        }
    }
    return arr
}
console.log(mergeArrays(['b', 'r', 'a', 'u', 'r', 's', 'e', 'q', 'z'], [2, 5, 8, 23, 67, 6]))
