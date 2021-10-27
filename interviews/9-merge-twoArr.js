function mergeArrays(a, b) {
    let longest = a.length > b.length ? a : b
    let arr = [];
    for (let i = 0; i < longest.length; i++) {
        if (a[i]) {
            arr.push(a[i])
        }
        if (b[i]) {
            arr.push(b[i])
        }
    }
    return arr
}
console.log(mergeArrays(['b', 'r', 'a', 'u', 'r', 's', 'e', 'q', 'z'], [2, 5, 8, 23, 67, 6]))
