// Assignment code here

// User input
var enter;
var confirmNumber;
var confirmSpecial;
var confirmUpper;
var confirmLower;

special = ["!", "@", "#", "%", "^", "&", "*", "-", "=", "_", "+", "(", ")"];
number = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
letters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

conv = [];

var choice;

var toUpper = function (x) {
  return x.toUpperCase();
};

letters2 = letters.map(toUpper);

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
