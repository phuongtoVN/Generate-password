// Assignment Code
var generateBtn = document.querySelector("#generate");
var length = 0;
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

const generatePassword = function(){
  /* 4 types of character:
  Type 1: upper case
  Type 2: lower case
  Type 3: number
  Type 4: special character */
  var pw = '';
  let i = 0;
  while (i < length) {
    let type = Math.floor(Math.random()*4) + 1;
    i++;
    if (type == 1 && upperCase) {pw+=randomUpperCase()}
    else if (type == 2 && lowerCase) {pw+=randomLowerCase()}
    else if (type == 3 && numberic) {pw+=randomNumber()}
    else if (type == 4 && specialCharacters) {pw+=randomSpecial()}
    else i--;
  }

  return pw;

}

/* Random a number and convert that number to a char/string base on Ascii Table */

// Ascii code for a - z is from 97 
const randomLowerCase = function(){
  return(String.fromCharCode(Math.floor(Math.random()*26)+97));
}

//Ascii code for A - Z starts at 65
const randomUpperCase = function(){
  return(String.fromCharCode(Math.floor(Math.random()*26)+65));
}

//ascii code for 0-9 starts at 48
const randomNumber = function(){
  return(String.fromCharCode(Math.floor(Math.random()*9)+48));
}

const randomSpecial = function(){
  /* In ascci chart, there are 4 groups of speacial characters
  1st group from 33 --> 47
  2nd group from 58 --> 64
  3rd group from 91 --> 96
  4th group from 123 --> 126
  x is going to be the ascii number of the special character
  */
 let x = 0;
 while ((x < 33 || x > 47) && (x < 58 || x > 64) && (x < 91 || x > 96) && (x < 123 || x > 126)){
  x = Math.floor(Math.random()*126)
 }
 return(String.fromCharCode(x));
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



while (length < 8 || length > 128){
  length = prompt("How many character do you want for your password?");
  if (length < 8 || length > 128) {alert("Password length has to be at least 8 and less than 129")}
}

var lowerCase = confirm("Do you like to include lowercase letters?");
var upperCase = confirm("Do you like to include upper letters?");
var numberic = confirm("Do you like to include number?");
var specialCharacters = confirm("Do you like to include special character?"); 
