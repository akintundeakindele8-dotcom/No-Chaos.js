const prompt = require("prompt-sync")();
let word = prompt("Enter any word: ");
reversedWord = ""
for(character in word){
	reversedWord = character + reverseWord;
}
if (reversedWord !== word){
	console.log("It is not  a palindrome")
}
else if(reversedWord == word){
	console.log ("It is a a palindrome")
}