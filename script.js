// declare variables and initialize
var characterTotal = 0;
var useLower = false;
var useUpper = false;
var useNumber = false;
var useSpecial = false;
var userReply = "";

//length of password is between 8 and 128 characters
var getCharacterTotal = function() {
  if (characterTotal < 8 || characterTotal > 128 || characterTotal === "" || (characterTotal/characterTotal) != 1  ) {
    characterTotal = window.prompt("Enter length of password (8-128).");
    getCharacterTotal();
  }
}

//make sure user reply is either y or n
var userReplyIsValid = function() {
  console.log("user reply: " + userReply);
  if (userReply.toLowerCase() === "y" || userReply.toLowerCase() === "n") {
    console.log("user reply is valid");
    return true;
  } else {
    console.log("user reply NOT valid");
    return false;
  }
}

//determine if user wants to include lowercase letters
var getUseLower = function() {
  userReply = window.prompt("Would you like to use lowercase letters? (y/n)");
  if (userReplyIsValid() === false) {
    getUseLower();
  } else {
    // set useLower to true or false
    if (userReply.toLowerCase() === "y") {
      useLower = true;
    } 
    if (userReply.toLowerCase() === "n") {
      useLower = false;
    } 
  }
}

//determine if user wants to include uppercase letters
var getUseUpper = function() {
  userReply = window.prompt("Would you like to use uppercase letters? (y/n)");
  if (userReplyIsValid() === false) {
    getUseUpper();
  } else {
    // set useUpper to true or false
    if (userReply.toLowerCase() === "y") {
      useUpper = true;
    } 
    if (userReply.toLowerCase() === "n") {
      useUpper = false;
    } 
  }
}

//determine if user wants to include numbers
var getUseNumber = function() {
  userReply = window.prompt("Would you like to use numbers? (y/n)");
  if (userReplyIsValid() === false) {
    getUseNumber();
  } else {
    // set useNumber to true or false
    if (userReply.toLowerCase() === "y") {
      useNumber = true;
    } 
    if (userReply.toLowerCase() === "n") {
      useNumber = false;
    } 
  }
}

//determine if user wants to include special characters
var getUseSpecial = function() {
  userReply = window.prompt("Would you like to use special characters? (y/n)");
  if (userReplyIsValid() === false) {
    getUseSpecial();
  } else {
    // set useSpecial to true or false
    if (userReply.toLowerCase() === "y") {
      useSpecial= true;
    } 
    if (userReply.toLowerCase() === "n") {
      useSpecial = false;
    } 
  }
}

//get user input and make sure all inputs are valid and alert user of conditions
var getUserInputs = function() {
  getCharacterTotal();
    while (useLower === false && useUpper === false && useNumber === false && useSpecial === false) {
      getUseLower();
      getUseUpper();
      getUseNumber();
      getUseSpecial();
      if (useLower === false && useUpper === false && useNumber === false && useSpecial === false) {
        window.alert("Password must include at least one of the following character types: lowercase, uppercase, number, special character. Please make your selections again.")
      }  
    }
}

//Generate password based on user selections
var generatePassword = function() {
  window.alert("Create password with the following selections:\nCharacters: " + characterTotal + "\nLowercase: " + useLower + "\nUppercase: " + useUpper + "\nNumbers: " + useNumber + "\nSpecial: " + useSpecial);

  var lowerCaseCharacters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
  var upperCaseCharacters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
  var numberCharacters = ["0","1","2","3","4","5","6","7","8","9"];
  var specialCharacters = ["!","@","#","$","%","^","&","*","(",")"];
  var password = "";
  
  //add random characters from selected character types until max character limit is reached
  while (password.length < characterTotal) {
    if (useLower === true && password.length < characterTotal) {
      password = password+lowerCaseCharacters[Math.floor(Math.random() * (lowerCaseCharacters.length-1))];
    }
    if (useUpper === true && password.length < characterTotal) {
      password = password+upperCaseCharacters[Math.floor(Math.random() * (upperCaseCharacters.length-1))];
    }
    if (useNumber === true && password.length < characterTotal) {
      password = password+numberCharacters[Math.floor(Math.random() * (numberCharacters.length-1))];
    }
    if (useSpecial === true && password.length < characterTotal) {
      password = password+specialCharacters[Math.floor(Math.random() * (specialCharacters.length-1))];
    }
  }
  return password;
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  getUserInputs();

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
