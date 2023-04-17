 

var numbers = "1234567890"
var lowercase = "abcdefghijklmnopqrstuvwxyz"
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var symbols = "!`~@#$%^&*()_+=-;:'/?.>,<"

var megaString = ""

//Define generate-password below

function generatePassword() {
  var confirmNumbers = window.confirm("Do you want numbers in your password?");
  console.log(confirmNumbers, "confirm numbers")
  var confirmLowercase = window.confirm("Do you want lowercase in your password?");
  console.log(confirmLowercase, "confirm lowercase")
  var confirmUppercase = window.confirm("Do you want uppercase in your password?");
  console.log(confirmUppercase, "confirm uppercase")
  var confirmSymbols = window.confirm("Do you want symbols in your password?");
  console.log(confirmSymbols, "confirm symbols")

  if (confirmNumbers === true) {
    console.log("want numbers")
  }
  if (confirmLowercase === true) {
    console.log("want lowercase")
  }
  if (confirmUppercase === true) {
    console.log("want uppercase")
  }
  if (confirmSymbols === true) {
    console.log("want symbols")
  }

}

//Do not touch any of the code below
//Do not touch any of the code below
//Do not touch any of the code below
//Do not touch any of the code below
//Do not touch any of the code below

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





