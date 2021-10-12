//Sort an Array2D
let arrayNames = [["Pablo", "Enrique", "Josh", "Juan", "Gonzalo"], ["Michael", "Alexander", "Mikel", "Ariel"], ["John", "Julia", "Brad", "George"]]

function flattenArrey(arrayNames) {
    let newArray = [];
    for (let elm of arrayNames) {
        newArray.push(elm)
    }
    return newArray
}

function sortArrays(arrayNames) {
    let arr = flattenArrey(arrayNames)
    return arr.sort((name1, name2) => {
        if (name1.length > name2.length) {
            return 1
        } else if (name1.length < name2.length) {
            return -1
        }
    return name1.localeCompare(name2)
    }) 
}


function namesSorter(arrayNames) {
    let arr = flattenArrey(arrayNames) 
    return arr.sort((name1, name2) => {
      if (name1.length > name2.length) {
        return 1
      } else if (name1.length < name2.length) {
        return -1
        }
      return name1.localeCompare(name2)
    })
  }

  console.log(namesSorter(arrayNames))