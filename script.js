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

//starter prompt

var passwordlength = prompt(
  "How many characters would you like your password to contain?"
);
function determinelength() {
  if (passwordlength < 8) {
    alert("Password length must be at least 8 characters.");
    passwordlength;
  } else if (passwordlength > 128) {
    alert("Password length must be less than 129 characters.");
    passwordlength;
  } else if (isNaN(passwordlength)) {
    alert("Password length must be a number.");
    passwordlength;
  }
}

var useAllspecialCharacters = confirm(
  "Click OK to comfirm including special characters."
);

var useAllnumberCharacters = confirm(
  "Click OK to confirm including numeric characters."
);

var useAlllowercaseCharacters = confirm(
  "Click OK to confirm including lowercase characters."
);

var useAlluppercaseCharacters = confirm(
  "Click OK to confirm inculding uppercase characters."
);

if (useAllspecialCharacters === true) {
  for (i = 0; i < specialCharacters.length; i++) {
    validchars.push(specialCharacters[i]);
  }
}

if (useAllnumberCharacters === true) {
  for (i = 0; i < numberCharacters.length; i++) {
    validchars.push(numberCharacters[i]);
  }
}

if (useAlllowercaseCharacters === true) {
  for (i = 0; i < lowercaseCharacters.length; i++) {
    validchars.push(lowercaseCharacters[i]);
  }
}

if (useAlluppercaseCharacters === true) {
  for (i = 0; i < uppercaseCharacters.length; i++) {
    validchars.push(uppercaseCharacters[i]);
  }
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
