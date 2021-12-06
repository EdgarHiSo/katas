const fib = function (n) {
    if (n === 0) return 0
    if (n === 1) return 1
    return fib(n - 1) + fib(n - 2)
  }


function fastFib(n) {
  var arr = [0, 1]
  for (let i = 0; i < n; i++) {
    arr = [arr[1], arr[0] + arr[1]]
  }
  return arr[0]
}
console.log(fastFib(9))

0, 1, 1, 2, 3, 5, 8, 13, 21, 34