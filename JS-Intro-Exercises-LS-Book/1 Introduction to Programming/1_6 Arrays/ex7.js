function sumOfSquares(numbers) {
return numbers.reduce((accumulator, element) =>
  accumulator + element**2, 0
)
}

let numbers = [3, 5, 7];
console.log(sumOfSquares(numbers)); // => 83