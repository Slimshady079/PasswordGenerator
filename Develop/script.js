// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

var lowerArr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

var upperArr = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

var numbersArr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

var specialArr = ['!', '@', '#', '$', '*', '%', '&'];

// Add event listener to generate button

generateBtn.addEventListener("click", writePassword);

//use onload to activate this function after an onclick button press??? i think

var generatepass = function() {
  var passLength = prompt("Please select a password between 8 and 128 characters");
 
if(!passLength) {
    return;
  }
}
generatepass();

//allows a path to the lowerArr index 
var passLowerCase = confirm("Do you want your password to include lowercase values?");
var lowerIndex = Math.floor(Math.random() * lowerArr.length);
var userLower = lowerArr[lowerIndex];
console.log(userLower);

//allows a path to the upperArr index
var passUpperCase = confirm("Do you want your password to include uppercase values?");
var upperIndex = Math.floor(Math.random() * upperArr.length);
var userUpper = upperArr[upperIndex];
console.log(userUpper);

//allows a path to the numbersArr index
var passNumberic = confirm("Do you want your password to include numeric value?");
var numbersIndex = Math.floor(Math.random() * numbersArr.length);
var userNumber = numbersArr[numbersIndex];
console.log(userNumber);

//allows a path to the specialArr index
var passSpecial = confirm("Do you want your password to include special character values?");
var specialIndex = Math.floor(Math.random() * specialArr.length);
var userSpecial = specialArr[specialIndex];
console.log(userSpecial);
