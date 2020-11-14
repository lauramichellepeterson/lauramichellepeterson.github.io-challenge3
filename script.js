// Assignment code here
var characterTotal = 0;
var useLower = false;
var useUpper = false;
var useNumber = false;
var useSpecial = false;
var userReply = "";


var getCharacterTotal = function() {
  if (characterTotal < 8 || characterTotal > 128 || characterTotal === "" || (characterTotal/characterTotal) != 1  ) {
    characterTotal = window.prompt("Enter length of password (8-128).");
    getCharacterTotal();
  }
}

var userReplyIsValid = function() {
  // userReply = userReply.toLowerCase;
  console.log("user reply: " + userReply);
  if (userReply.toLowerCase() === "y" || userReply.toLowerCase() === "n") {
    console.log("user reply is valid");
    return true;
  } else {
    console.log("user reply NOT valid");
    return false;
  }
}

var getUseLower = function() {
  // userReply = "";
  userReply = window.prompt("Would you like to use lowercase letters? (y/n)");
  if (userReplyIsValid() === false) {
    getUseLower();
  } else {
    // set useLower to true or false
  }
}

var getUserInputs = function() {
  getCharacterTotal();
  getUseLower();
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
