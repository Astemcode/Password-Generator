// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Random Password Generator  
const unique_strings = {
    lowercase: 'abcdefghijklmnopqrstuvwxyz',
    uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
    number: '0123456789',
    symbol: "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~",
  };
  
  function generatePassword() {
    var passwordCharSet = "";
  
    var length = window.prompt("Enter a number from 8 to 128 for password length.");
  
    var lowercase = window.confirm("Would you like to use lowercase letters?");
    if (lowercase) {
      passwordCharSet += unique_strings.lowercase;
    };
  
    var uppercase = window.confirm("Would you like to use uppercase letters?");
    if (uppercase) {
      passwordCharSet += unique_strings.uppercase;
    };
  
    var symbols = window.confirm("Would you like to use symbols?");
    if (symbols) {
      passwordCharSet += unique_strings.symbol;
    };
  
    var numbers = window.confirm("Would you like to use numbers?");
    if (numbers) {
      passwordCharSet += unique_strings.number;
    };
    var password = "";
    for (let i = 0; i < length; i++) {
      password += passwordCharSet[Math.floor(Math.random() * passwordCharSet.length)]
    }
    return password;
  }
  

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
