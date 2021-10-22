function isPrim(number) {
   for (let i = 2; i < number; i++) {
       if (number % 2 === 0) {
           return false
       }
   }
   return number > 1
}
console.log(isPrim(9))