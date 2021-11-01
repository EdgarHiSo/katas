/* 1-PROBLEMA
- diseña un contador
- el contador tendrá un método que sume en uno la cuenta y devuelva el resultado
-Podrá tu contador contar hasta infinito? */
// La version 1
let count = 0n
function counter() {
    count++                     
    return count
}
counter()
counter()
counter()
console.log(counter())
/* function counter() {
    let count = 0
    count++
    return count ee
}
console.log(counter()) */
// La version 2 con clase
class Counter {
    constructor() {
        this.total = 0n
    }
    countOne = () => {
        this.total++
        return this.total
    }
    countMultiple = (num) => {
        this.total += num
        return this.total
    }

}
const myCounter = new Counter()
//console.log(myCounter.countOne())
//console.log(myCounter.countMultiple(5))
/* 
No puede contar hasta el finito por muchas razones, entre ellas que no tenemos memoria 
ilimitada en el pc, y también porque en JavaScript hay un número máximo que es el MAX_SAFE_INTEGER,
habrá más razones pero con estas vas que chutas */


console.log(Number.MAX_VALUE + 10000000000000000000000000)




























