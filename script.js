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
    //generate the string based on the criteria


    return generatedString;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
