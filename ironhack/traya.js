let arrayNames = [["Pablo", "Enrique", "Josh", "Juan", "Gonzalo"], ["Michael", "Alexander", "Mikel", "Ariel"], ["John", "Julia", "Brad", "George"]]

function flattenArray(arrayNames) {
    let newArray = [];
    for (let subarray of arrayNames) {
        for (let elm of subarray) {
            newArray.push(elm)
        }
    }
    return newArray
}

function sortArray(arrayNames) {
    let arrNamesNew = flattenArray(arrayNames)
    return arrNamesNew.sort((name1, name2) => {
        if (name1.lenght > name2.lenght) {
            return 1
        } else if (name2.lenght > name1.lenght) {
            return -1
        } else {
            return name1.toString().localeCompare(name2.toString())
        }
    })
}

console.log(sortArray(arrayNames))