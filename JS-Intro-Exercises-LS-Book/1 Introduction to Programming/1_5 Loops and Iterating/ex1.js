let age = parseInt(prompt('What is your age?'));
let timeframes = [10, 20, 30, 40]
console.log(`You are ${age} years old.`);
for (i = 0; i < timeframes.length; i++){
console.log(`In ${timeframes[i]}, you will be ${timeframes[i] + age} years old.`)
};