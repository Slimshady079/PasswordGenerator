// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

var lowerCaseArr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

var upperCaseArr = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

var numbersArr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

var specialArr = ['!', '@', '#', '$', '*', '%'];

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// var passLength = prompt("Please select a password between 8 and 128 characters");

// var passLength = function() {
//   prompt("Please select a password between 8 and 128 characters");
//   if () {

//   }
// };

var passLowerCase = confirm("Do you want your password to include lowercase values?");

if (confirm() === true) {
  // program to get a random item from an array

function getRandomItem(arr) {

    // get random index value
    const randomIndex = Math.floor(Math.random() * arr.length);

    // get random item
    const item = arr[randomIndex];

    return item;
}

const array = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

const result = getRandomItem(array);
console.log(result);
  
} else {

};



// var passLowerCase = confirm("Do you want your password to include uppercase values?");
// var passLowerCase = confirm("Do you want your password to include numeric value?");
// var passLowerCase = confirm("Do you want your password to include special character values?");

