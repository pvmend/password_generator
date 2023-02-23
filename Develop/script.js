// Assignment Code
var generateBtn = document.querySelector("#generate");
// declaring global variables 
// need to seperate string in array using splice
const special_char = "!@#$^&%*()+=-[]{}|:<>?,.";
const lowercase_abc = 'abcdefghijklmnopqrstuvwxyz';
const numbers = '0123456789';
const uppercase_abc = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var password_length;
var password_upper;
var password_lower;
var password_special;
var password_numbers;
// spliced into multiple arrays
var lower_array = lowercase_abc.split('');
var upper_array = uppercase_abc.split('');
var number_array = numbers.split('');
var special_array = special_char.split('');
console.log(special_array);


function user_input(){
  password_length  = prompt("enter a number between 8 and 128");
  password_upper = prompt('do you want uppercase letters? ');
  password_lower = prompt('do you want lowercase letters? ');
  password_special = prompt('do you want special characters? ');
  password_numbers = prompt('do you want numbers in your password?');
  console.log(password_length);
}
function generatePassword(){
  new_password = [];
  if (password_upper == true){
    new_password.push(upper_array);
  }
  if (password_lower == true){
    new_password.push(lower_array);
  }
  if (password_special == true){
    new_password.push(special_array);
  }
  if (password_numbers == true){
    new_password.push(number_array);
  }
  
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
function generatePassword(){ 
  var password = '';
  

}


function password_lowercase(){
  password = password.toLowerCase();
  return;
}

function password_uppercase(){
  password = password.toUpperCase();
  return;
}



// if (password.length() < 8){
//   prompt('length must be at least 8 characters');
// }
// if (password.length() > 128){
//   prompt('length must be less than 128');
// }

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);






// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters
// WHEN asked for character types to include in the password
// THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
