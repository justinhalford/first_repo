function factorial(number){
total = 1;
for (i = 1; i <= number; i++) {
  total *= i
}
return total
}

console.log(factorial(6))