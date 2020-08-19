let number = 4936;
let singlesPlace = number % 10;
let tensPlace = ((number - singlesPlace) % 100) / 10;
let hundredsPlace = ((number - (1 * singlesPlace) - (10 * tensPlace)) % 1000) / 100;
let thousandsPlace = ((number - (1 * singlesPlace) - (10 * tensPlace) - (100 * hundredsPlace)) % 10000) / 1000;
console.log(singlesPlace);
console.log(tensPlace);
console.log(hundredsPlace);
console.log(thousandsPlace);