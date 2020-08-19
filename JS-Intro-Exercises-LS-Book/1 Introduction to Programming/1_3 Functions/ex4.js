function factorial(number) {
  let cummulativeFactorial = 1
  for (i = 1; i <= number; i++){
    cummulativeFactorial = cummulativeFactorial * i
    console.log(cummulativeFactorial);
  }
}

factorial(10);