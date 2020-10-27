// Assignment Code
var generateBtn = document.querySelector("#generate");
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k",
    "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var specialChars = ['@', '#', '$', '%', '<', '^', '<'];

// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

}

function generatePassword() {
    var generatedString = "";
    var addNums = false;
    var useLower = false;
    var useCaps = false;
    var useSpecial = false;
    var flag = true;
    var length = 0;
    //get criteria

    while (flag) {
        addNums = confirm("Would you like to use numbers? (Click cancel for no)");
        useLower = confirm("Would you like to use lower case letters? (Click cancel for no)");
        useCaps = confirm("Would you like to use capital letters? (Click cancel for no)");
        useSpecial = confirm("Would you like to use special characters? (Click cancel for no)");

        if(addNums === false && useLower === false && useCaps === false && useSpecial === false){
            alert("Error: Please say yes to at least one option");
        } else {
            flag = false;
        }
    }

    flag = true;
    var valid = false;
    while(flag){
        //input should be a whole number where 8 <= input <= 128
        input = prompt("How long do you want your password to be? (between 8 and 128 characters)");

        valid = validateInput(input);
        if(valid === false){
            alert("Error: Please enter a number between 8 and 128");
        } else {
            flag = false;
        }
    }

    


    return generatedString;

}//end of generatePassword();


function validateInput(input){

    //make sure input is number first
    var num = parseInt(input);

    if(Number.isInteger(num) === false ){
        return false;
    }

    if(input < 8 || input > 128){
        return false;
    }

    return true;
}

function generateRandomLetter(lower, capital){

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
