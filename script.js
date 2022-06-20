// Assignment code here
var promptChar = window.prompt(
  "How many characters would you like in your password? (Must be between 8 to 128 characters.)"
);

var promptLower = window.prompt(
  "Would you like your password to contain lowercase letters?"
);

var promptUpper = window.prompt(
  "Would you like your password to contain uppercase letters?"
);

var promptNumbers = window.prompt(
  "Would you like your password to contain numbers?"
);

var promptSpecial = window.prompt(
  "Would you like your password to contain special characters?"
);

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
