let str = "aaaabbbccce"

function compres(str) {
    let output = ""
    let i = 0
    while(i < str.length) {
        let letter = str[i]
        let count = 1
        while (letter === str[i + 1]) {
            i++
            count++
        }
        output += letter
        if (count > 1) {
            output += count
        }
        i++
    }
    return output
}
console.log(compres(str))

function filter(array) {
    let mising = []
    for (let i = 1; i <= array.length; i++) {
        if (!array.includes(i)) {
            mising.push(i)
        }
    }
    return mising
}

function reverse(name) {
    let newName = ""
    for (let i = name.length -1; i >= 0; i--) {
        newName += name[i]
    }
    return newName
}

function nameSpace(name) {
    let newName = ""
    for (let i = 0; i < name.length; i++) {
        if (i < name.length - 1) {
            newName += name[i].toUpperCase() + " ! " 
        } else {
            newName += name[i].toUpperCase()
        }
    }
    return newName
}

console.log(nameSpace("edgar"))