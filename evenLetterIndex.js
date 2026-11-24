const prompt = require('prompt-sync')();

let text = prompt("Enter any word ")
	for(let i = 1; i <= text.length; i++ ){
	if(i % 2 == 0){
		console.log(`${text.charAt(i)}`)
}
}
