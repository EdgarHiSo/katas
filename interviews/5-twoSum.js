let array = [1,2,3]
function twosum(array, target) {
    let indexes = []
    for (let i = 0; i < array.length - 1; i++) {
        for (let j = i + 1; j < array.length; j++) {
            if (array[i] + array[j] === target) {
                indexes.push(i);
                indexes.push(j)
            }
        }
    }
    return indexes
}
console.log(twosum(array, 5))