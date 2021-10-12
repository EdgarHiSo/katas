//Sort an Array2D
let arrayNames = [["Pablo", "Enrique", "Josh", "Juan", "Gonzalo"], ["Michael", "Alexander", "Mikel", "Ariel"], ["John", "Julia", "Brad", "George"]]

function flatten(arrayNames) {
    let newArr = []
    for (let subarray of arrayNames) {
      for (let elem of subarray) {
        newArr.push(elem)
      }
    }
    return newArr
  }
  
  function namesSorter(arrayNames) {
    let arr = flatten(arrayNames) 
    return arr.sort((name1, name2) => {
      if (name1.length > name2.length) {
        return 1
      } else if (name1.length < name2.length) {
        return -1
        }
      return name1.localeCompare(name2)
    })
  }
