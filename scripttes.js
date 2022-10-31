//script.js




var lowerArr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

var upperArr = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

var numbersArr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

var specialArr = ['!', '@', '#', '$', '*', '%', '&'];


function generatePassword() {
    var passwordLength = prompt("Choose a password from 8 to 128!!");
    passwordLength = Number(passwordLength);
    console.log(passwordLength);

if (passwordLength < 8 || passwordLength > 128) {
    alert("Please make sure you apply the right amount of characters.");
    return;
} 


var passLowerCase = confirm("Do you want your password to include lowercase values?");
var passUpperCase = confirm("Do you want your password to include uppercase values?");
var passNumberic = confirm("Do you want your password to include numeric value?");
var passSpecial = confirm("Do you want your password to include special character values?");


var userChoice = []; {
    if (passLowerCase) {
        userChoice = userChoice.concat(lowerArr);
    }
}
    if (passUpperCase) {
        userChoice = userChoice.concat(upperArr);
    }


    if (passNumberic) {
        userChoice = userChoice.concat(numbersArr);
    }
    if (passSpecial) {
        userChoice = userChoice.concat(specialArr);
    }

    var actualPass = [];
    
    for (var i = 0; i < passwordLength; i++) {
        randomIndex = Math.floor(Math.random() * userChoice.length);
        actualPass = actualPass.concat(userChoice[randomIndex]);
    }
    console.log(actualPass);

    actualPass = actualPass.join("");
    return actualPass;

}
    
var buttonRefer = document.querySelector("#generate");

function writePassword() {
    var passWord = generatePassword();
    var passText = document.querySelector("#password");
    passText.value = passWord;
}

buttonRefer.addEventListener("click", writePassword);

if (!lowerCase && !upperCase && !numbers && !special) {

}