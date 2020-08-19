function multiply() {
  let readlineSync = require('readline-sync');
  let numOne = parseFloat(readlineSync.question('What is the first number?'));
  let numTwo = parseFloat(readlineSync.question('What is the second number'));
  return Math.floor(numOne*numTwo);
}

multiply();