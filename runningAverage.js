const prompt = require('prompt-sync')();

let number = Number(prompt("Enter number or -1 to stop inputting: "))
let counter = 1, sum = 0
while(number != -1){
sum += number
let average = sum / counter
console.log(`The average after ${counter} inputs is ${average}`)
number = Number(prompt("Enter number or -1 to stop inputting: "))	
counter++

}

