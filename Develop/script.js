// Assignment Code

var generateBtn = document.querySelector("#generate");
// declaring global variables 

const special_char = "!@#$^&%*()+=-[]{}|:<>?,.";
const lowercase_abc = 'abcdefghijklmnopqrstuvwxyz';
const numbers = '0123456789';
const uppercase_abc = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var password_length;
var password_upper;
var password_lower;
var password_special;
var password_numbers;
var possibleChar;



// get user input and what the user wants for their password
// raises an alert if length is not a number
// also raises an alert if length is less than 8 or greater than 128

function user_input(){
  password_length  = prompt("enter a number between 8 and 128");
  if (isNaN(password_length)){
    alert("please enter a number");
    return false;
  }
  if (password_length < 8){
  alert('length must be at least 8 characters');
  return false;
}
if (password_length > 128){
  alert('length must be less than 128');
  return false;
}

  password_upper = confirm('do you want uppercase letters? ');
  password_lower = confirm('do you want lowercase letters? ');
  password_special = confirm('do you want special characters? ');
  password_numbers = confirm('do you want numbers in your password?');


  return true;
  }

// 

function generatePassword(){
  
  possibleChar = '';
  var new_password_char = '';

  if (password_upper == true){
    
    possibleChar += uppercase_abc;
  }
  
  if (password_lower == true){
    
    possibleChar += lowercase_abc;
  }
  
  if (password_special == true){
    
    possibleChar += special_char;
  }
  
  if (password_numbers == true){
    
    possibleChar += numbers;
  }
  // iterate over the new string 
  for (i = 0; i < password_length; i++){
    
    new_password_char += (possibleChar[Math.floor(Math.random() * possibleChar.length)]);
    console.log(new_password_char);
   
}
  
return new_password_char;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}



// Add event listener to generate button
generateBtn.addEventListener("click", function(){
  
  if (user_input()){
    writePassword();
  }
  
});





