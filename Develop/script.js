// Assignment code here
// Adam Al-ibraheem
// 11/12/2021

function generatePassword() {
  //Call PasswordLength() & store in passwordLengh variable
  var passwordLength = PasswordLength();

  //variables:
  var upperCase = false;
  var numeric = false;
  var specialCharacters = false;
  const charsNoNums = "abcdefghijklmnopqrstuvwxyz";
  const charNums = "abcdefghijklmnopqrstuvwxyz0123456789";
  const charSpecial = "abcdefghijklmnopqrstuvwxyz!@#$%&";
  const charNumsAndSpecial = "abcdefghijklmnopqrstuvwxyz0123456789!@#$%&";
  var password = "";

  //Prompt for uppercase or lowercase letters
  while (true) {
    //while loop for user input
    var userInput = window.prompt(
      "Add uppercase or lowercase letters? (Type 'upper' for Uppercase or 'lower' for Lowercase)"
    );

    if (userInput === "upper" || userInput === "UPPER") {
      window.alert("Uppercase added!");
      upperCase = true;
      break;
    } else if (userInput === "lower" || userInput === "LOWER") {
      break;
    } else {
      window.alert("Incorrect Input. Try again.");
    }
  }

  //Prompt for numeric characters
  numeric = window.confirm("Add numeric characters?");
  if (numeric) {
    window.alert("Numeric added!");
  }
  //Prompt for special characters
  specialCharacters = window.confirm("Add special characters?");
  if (specialCharacters) {
    window.alert("Special Characters added!");
  }

  //Generate random password

  // Random with Numbers & Special characters
  if (numeric === true && specialCharacters === true) {
    for (var i = 0; i < passwordLength; i++) {
      var randomNum = Math.floor(Math.random() * charNumsAndSpecial.length);
      password += charNumsAndSpecial.substring(randomNum, randomNum + 1);
    }
  } else if (numeric === true) {
    // Random with Numbers
    for (var i = 0; i < passwordLength; i++) {
      var randomNum = Math.floor(Math.random() * charNums.length);
      password += charNums.substring(randomNum, randomNum + 1);
    }
  } else if (specialCharacters === true) {
    //Random with special characters
    for (var i = 0; i < passwordLength; i++) {
      var randomNum = Math.floor(Math.random() * charSpecial.length);
      password += charSpecial.substring(randomNum, randomNum + 1);
    }
  } else {
    //Random no nums or special characters
    for (var i = 0; i < passwordLength; i++) {
      var randomNum = Math.floor(Math.random() * charsNoNums.length);
      password += charsNoNums.substring(randomNum, randomNum + 1);
    }
  }

  //Check if uppercase
  if (upperCase === true) {
    var UppercasePassword = password.toUpperCase();
    // Display password Uppercase
    window.alert("Your new password is: " + UppercasePassword);
  } else {
    //Display password lowercase
    window.alert("Your new password is: " + password);
  }
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//Function to define length of password
function PasswordLength() {
  while (true) {
    //while loop for user input
    var lengthOfPassword = window.prompt(
      "Specify length of password. Must be between 8 and 128 characters long:"
    );

    parseInt(lengthOfPassword); //change lengthOfPassword var into number

    //Check length of password
    if (lengthOfPassword < 8 || lengthOfPassword > 128) {
      window.alert("Please enter valid password length!");
    } else {
      break;
    }
  }

  //Display length entered
  window.alert("Length of your password is " + lengthOfPassword);

  return parseInt(lengthOfPassword);
}
