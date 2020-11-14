// Assignment code here
var characterTotal = 0;
var useLower = false;
var useUpper = false;
var useNumber = false;
var useSpecial = false;


var getCharacterTotal = function() {
  if (characterTotal < 8 || characterTotal > 128 || characterTotal === "" || (characterTotal/characterTotal) != 1  ) {
    characterTotal = window.prompt("Enter length of password (8-128).");
    getCharacterTotal();
  }
}

var getUserInputs = function() {
  getCharacterTotal();

}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  getUserInputs();

  // var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
