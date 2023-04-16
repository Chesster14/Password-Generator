function generatepassword() {
}
//First, define generate-password below

// A string is a series of characters and is surrounded by quotes 
var myStringPassword = "444Password!2023";

// A number can be either an integer or a decimal
var myNumberInt = 100;
var myNumberDecimal = 100.100;

// Booleans have two values: true or false
var isMyBooleanTrue = true;
var isMyBooleanFalse = false;

// To check the type of data, use typeof followed by the name of the variable
// Logs undefined
console.log(typeof myUndefined);

// Logs number
console.log(typeof myNumberInt); 

// Logs boolean
console.log(typeof true);

// Logs string
console.log(typeof "Howdy");










/*Do not touch any of the code below
//Do not touch any of the code below
//Do not touch any of the code below
//Do not touch any of the code below
//Do not touch any of the code below
//Do not touch any of the code below
*/Do not touch any of the code below

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);





