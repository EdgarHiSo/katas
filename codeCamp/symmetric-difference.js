let arrDiff = [[1, 2, 3], [5, 2, 1, 4]]
function flattenArr(arrDiff) {
    let newArr = [];
    for (let subarray of arrDiff) {
        for (let elm of subarray) {
            if (!subarray.includes(elm)) {
                newArr.push(elm)
            }
        }
    }
    return newArr
}
console.log(flattenArr/arrDiff)
