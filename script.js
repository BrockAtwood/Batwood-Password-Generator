// Assignment Code
var generateBtn = document.querySelector("#generate");
var specialCharacters = [
  "~",
  "`",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "-",
  "+",
  "=",
  "{",
  "[",
  "}",
  "]",
  "|",
  ":",
  ";",
  "'",
  "<",
  ",",
  ">",
  ".",
  "?",
  "/",
];
var numberCharacters = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
var lowercaseCharacters = [
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
var uppercaseCharacters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
var passwordLength;
var specialCheck;
var numberCheck;
var lowercaseCheck;
var uppercaseCheck;

function determineLength() {
  passwordLength = prompt(
    "How many characters would you like your password to contain?"
  );
  if (passwordLength < 8) {
    alert("Password length must be at least 8 characters.");
    determineLength();
  } else if (passwordLength > 129) {
    alert("Password length must be less than 129 characters.");
    determineLength();
  } else if (isNaN(passwordLength)) {
    alert("Password length must be a number.");
    determineLength();
  } else {
    alert(
      "Next, we will determine what types of characters you want to use in your Generated Password."
    );
  }
  return passwordLength;
}

function determineSpecial() {
  specialCheck = confirm("Click OK to comfirm including special characters.");
}

function determineNumber() {
  numberCheck = confirm("Click OK to comfirm including number characters.");
}

function determinelowercase() {
  lowercaseCheck = confirm(
    "Click OK to comfirm including lowercase characters."
  );
}

function determineuppercase() {
  uppercaseCheck = confirm(
    "Click OK to comfirm including uppercase characters."
  );
}

function generatePassword() {
  determineLength();
  console.log(passwordLength);
  determineSpecial();
  console.log(specialCheck);
  determineNumber();
  console.log(numberCheck);
  determinelowercase();
  console.log(lowercaseCheck);
  determineuppercase();
  console.log(uppercaseCheck);
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
