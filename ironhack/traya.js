let array = [1,2,4]
function twoSum(array, target) {
    let indixes = []
    for (let i = 0; i < array.length; i++) {
        for (let j = i + 1; j < array.length; j++) {
            if (array[i] + array[j] === target) {
                indixes.push(i)
                indixes.push(j)
            }
        }
    }
    return indixes
}
console.log(twoSum(array, 5))