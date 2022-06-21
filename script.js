// Assignment code here

// User input
var userInput;
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

function generatePassword() {
  userInput = parseInt(
    prompt(
      "How many characters would you like for your password to be? Please choose a number between 8 and 128."
    )
  );
  if (!userInput) {
    alert("This needs a value");
  } else if (userInput < 8 || userInput > 128) {
    userInput = parseInt(
      prompt(
        "How many characters would you like for your password to be? Please choose a number between 8 and 128."
      )
    );
  } else {
    confirmNumber = confirm("Do you want your password to contain numbers?");
    confirmSpecial = confirm(
      "Do you want your password to contain special characters?"
    );
    confirmUpper = confirm(
      "Do you want your password to contain uppercase letters?"
    );
    confirmLower = confirm(
      "Do you want your password to contain lowercase letters?"
    );
  }
  if (confirmNumber) choice = number;
  if (confirmSpecial) choice = choice.concat(special);
  if (confirmUpper) choice = choice.concat(upper);
  if (confirmLower) choice = choice.concat(lower);

  if (!confirmNumber && !confirmSpecial && !confirmUpper && !confirmLower) {
    choice = alert("You must choose a criteria!!!!");
  }
}
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
