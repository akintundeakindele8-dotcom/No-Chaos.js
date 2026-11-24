const prompt = require('prompt-sync')();

let threeDigitNumber = Number(prompt("Enter three digit number: "))
let sum = 0, firstDigit = 0 , secondDigit = 0 ,thirdDigit = 0 



while(threeDigitNumber > 99 && threeDigitNumber < 1000 ){
	thirdDigit = threeDigitNumber % 10
	secondDigit = Math.floor((threeDigitNumber - thirdDigit) / 10) % 10
	firstDigit = Math.floor(threeDigitNumber / 100)
while(threeDigitNumber == 0){
		sum = (firstDigit ** 2) + (secondDigit ** 2) + (thirdDigit ** 2)
	}


}if(sum == threeDigitNumber ){
	console.log(`The squared sum of ${firstDigit} ${secondDigit} ${thirdDigit} is equal to ${threeDigitNumber} `)

}else{
	console.log(`The squared sum of ${firstDigit} ${secondDigit} ${thirdDigit} is not equal to ${threeDigitNumber} `)	
}