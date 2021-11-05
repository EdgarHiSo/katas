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

function mergeArrays(array1, array2) {
    const longest = array1.length > array2.length ? array1: ar2
    let newArr = []
    for (let i = 0; i < longest.length; i++) {
        if ( i < array1.length) {
            newArr.push(array1[i])
        }
        if (i < array2.length) {
            newArr.push(array2[i])
        }
    }
    return newArr
}
