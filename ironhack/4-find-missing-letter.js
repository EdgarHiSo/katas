let array = ['a','b','c','d','f']
function makeStr(array) {
    return array.join("")
}

function findMissingLetter(array){
    let str = makeStr(array)
    let alphabet = "abcdefghijklmnopqrstuvwxyz";
    let startingPoint = alphabet.indexOf(str[0])
    for (let i = 0; i < str.length + 1; i++) {
        if (str[i] !== alphabet[startingPoint + i]) {
            return alphabet[startingPoint + i];
        }
    }
    return undefined;
  }
  console.log(findMissingLetter(array))